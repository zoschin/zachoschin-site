import type { Metadata } from "next";
import TravelGlobe from "./travel-globe";

export const metadata: Metadata = {
  title: "Travel — Zach Oschin",
};

export default function Travel() {
  return <TravelGlobe />;
}
