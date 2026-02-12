"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Feature, Geometry } from "geojson";
import {
  visitedIds,
  livedInIds,
  territoryToParent,
  livedInCountries,
  visitedCountries,
  totalCountries,
  visitedCount,
} from "./country-data";

interface CountryProperties {
  name?: string;
}

// Territories that should never be highlighted (e.g. not visited)
const excludeIds = new Set(["158"]); // Taiwan

function isVisited(id: string): boolean {
  if (excludeIds.has(id)) return false;
  if (visitedIds.has(id)) return true;
  const parent = territoryToParent[id];
  return parent ? visitedIds.has(parent) : false;
}

function isLivedIn(id: string): boolean {
  if (excludeIds.has(id)) return false;
  if (livedInIds.has(id)) return true;
  const parent = territoryToParent[id];
  return parent ? livedInIds.has(parent) : false;
}

export default function TravelGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<[number, number, number]>([-40, -20, 0]);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{
    x: number;
    y: number;
    rotation: [number, number, number];
  }>({
    x: 0,
    y: 0,
    rotation: [-40, -20, 0],
  });
  const animFrameRef = useRef<number>(0);
  const worldRef = useRef<{
    countries: FeatureCollection<Geometry, CountryProperties>;
    borders: GeoJSON.MultiLineString;
  } | null>(null);
  const [loaded, setLoaded] = useState(false);

  const percentage = ((visitedCount / totalCountries) * 100).toFixed(1);

  // Load world data
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((world: Topology<{ countries: GeometryCollection }>) => {
        const countries = topojson.feature(
          world,
          world.objects.countries
        ) as FeatureCollection<Geometry, CountryProperties>;
        const borders = topojson.mesh(
          world,
          world.objects.countries,
          (a, b) => a !== b
        );
        worldRef.current = { countries, borders };
        setLoaded(true);
      });
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || !worldRef.current) return;

    const { countries, borders } = worldRef.current;
    const width = container.clientWidth;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = width * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${width}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    const projection = geoOrthographic()
      .translate([width / 2, width / 2])
      .scale(width / 2 - 2)
      .rotate(rotationRef.current)
      .clipAngle(90);

    const path = geoPath(projection, ctx);
    const graticule = geoGraticule();

    // Clear
    ctx.clearRect(0, 0, width, width);

    // 1. Sphere fill (water)
    ctx.beginPath();
    path({ type: "Sphere" });
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // 2. Country fills
    countries.features.forEach(
      (feature: Feature<Geometry, CountryProperties>) => {
        const id = (feature as { id?: string }).id as string | undefined;
        ctx.beginPath();
        path(feature);
        if (id && isLivedIn(id)) {
          ctx.fillStyle = "#1a1a1a";
        } else if (id && isVisited(id)) {
          ctx.fillStyle = "#8b6d47";
        } else {
          ctx.fillStyle = "#e5e5e5";
        }
        ctx.fill();
      }
    );

    // 3. Borders
    ctx.beginPath();
    path(borders);
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // 4. Graticule
    ctx.beginPath();
    path(graticule());
    ctx.strokeStyle = "rgba(0,0,0,0.06)";
    ctx.lineWidth = 0.3;
    ctx.stroke();

    // 5. Sphere outline
    ctx.beginPath();
    path({ type: "Sphere" });
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 1;
    ctx.stroke();
  }, []);

  // Animation loop
  useEffect(() => {
    if (!loaded) return;

    let running = true;

    const animate = () => {
      if (!running) return;
      if (!isDraggingRef.current) {
        const [λ, φ, γ] = rotationRef.current;
        rotationRef.current = [λ + 0.3, φ, γ];
      }
      draw();
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [loaded, draw]);

  // Resize handler
  useEffect(() => {
    const onResize = () => draw();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [draw]);

  // Pointer drag handlers
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotation: [...rotationRef.current] as [number, number, number],
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    const [λ0, φ0, γ0] = dragStartRef.current.rotation;
    const sensitivity = 0.4;
    rotationRef.current = [
      λ0 + dx * sensitivity,
      Math.max(-90, Math.min(90, φ0 - dy * sensitivity)),
      γ0,
    ];
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const visitedOnly = visitedCountries.filter(
    (c) => !livedInCountries.includes(c)
  );

  return (
    <div>
      <p className="text-sm leading-relaxed text-foreground/80 mb-12">
        Trying to get to every country in the world.
      </p>

      {/* Globe */}
      <div
        ref={containerRef}
        className="w-full max-w-lg mx-auto mb-8 cursor-grab active:cursor-grabbing"
      >
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="block w-full touch-none"
          style={{ aspectRatio: "1 / 1" }}
        />
      </div>

      {/* Progress bar */}
      <div className="mb-12">
        <div className="flex justify-between text-sm text-muted mb-2">
          <span>
            {visitedCount} / {totalCountries} countries
          </span>
          <span>{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Country lists */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-mono tracking-tight mb-3">Lived In</h2>
          <p className="text-sm text-muted leading-relaxed">
            {livedInCountries.join(" · ")}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-mono tracking-tight mb-3">Visited</h2>
          <p className="text-sm text-muted leading-relaxed">
            {visitedOnly.join(" · ")}
          </p>
        </div>
      </div>

      {/* Footnote */}
      <p className="mt-12 text-xs text-muted/60">
        Count includes 193 UN member states and 2 observer states (Holy See,
        Palestine). Dependencies and territories are counted under their
        sovereign nation.
      </p>
    </div>
  );
}
