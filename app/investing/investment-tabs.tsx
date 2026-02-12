"use client";

import { useState } from "react";

type Investment = {
  company: string;
  url: string;
  description: string;
  round: string;
  status: "active" | "exited";
};

type Advisory = {
  company: string;
  url: string;
  description: string;
};

const earlyStage: Investment[] = [
  {
    company: "Baubap",
    url: "https://www.baubap.com",
    description: "Mexican microlending app",
    round: "Seed",
    status: "active",
  },
  {
    company: "Carry1st",
    url: "https://www.carry1st.com",
    description: "African mobile games publisher",
    round: "Pre-Seed",
    status: "active",
  },
  {
    company: "Coleap",
    url: "https://www.linkedin.com/company/coleap",
    description: "Collaborative learning platform",
    round: "Pre-Seed",
    status: "exited",
  },
  {
    company: "FinZi",
    url: "https://finzi.co",
    description: "Neobank for teens in LATAM",
    round: "Pre-Seed",
    status: "exited",
  },
  {
    company: "Hunty",
    url: "https://hunty.com",
    description: "LatAm job marketplace",
    round: "Pre-Seed",
    status: "active",
  },
  {
    company: "Labric",
    url: "https://www.labric.co",
    description: "Lab data infrastructure",
    round: "Pre-Seed",
    status: "active",
  },
  {
    company: "Linecook",
    url: "#",
    description: "Strava for cooking",
    round: "Pre-Seed",
    status: "active",
  },
  {
    company: "Luminar",
    url: "https://www.luminartech.com",
    description: "Automotive lidar technology",
    round: "Series A",
    status: "exited",
  },
  {
    company: "Perennial",
    url: "https://www.perennial.earth",
    description: "Soil carbon measurement",
    round: "Pre-Seed",
    status: "active",
  },
  {
    company: "Sonder Health",
    url: "https://www.sonderhealth.co",
    description: "AI hospital discharge navigation",
    round: "Pre-Seed",
    status: "active",
  },
  {
    company: "Spline",
    url: "https://spline.design",
    description: "3D design for the web",
    round: "Pre-Seed",
    status: "active",
  },
  {
    company: "timetohire.ai",
    url: "https://timetohire.ai",
    description: "AI candidate screening",
    round: "Pre-Seed",
    status: "active",
  },
  {
    company: "Trace",
    url: "#",
    description: "Robotics data",
    round: "Pre-Seed",
    status: "active",
  },
];

const lateStage: Investment[] = [
{
    company: "Anduril",
    url: "https://www.anduril.com",
    description: "Defense technology",
    round: "Series C",
    status: "exited",
  },
  {
    company: "Apptronik",
    url: "https://apptronik.com",
    description: "Humanoid robotics",
    round: "Series A",
    status: "active",
  },
  {
    company: "Dropbox",
    url: "https://www.dropbox.com",
    description: "Cloud file storage",
    round: "Pre-IPO",
    status: "exited",
  },
{
    company: "Lyft",
    url: "https://www.lyft.com",
    description: "Rideshare platform",
    round: "Series F",
    status: "exited",
  },
{
    company: "Palantir",
    url: "https://www.palantir.com",
    description: "Data analytics & AI platform",
    round: "Series J",
    status: "active",
  },
  {
    company: "Reforge",
    url: "https://www.reforge.com",
    description: "Tech professional development",
    round: "Series B",
    status: "active",
  },
  {
    company: "SoFi",
    url: "https://www.sofi.com",
    description: "Digital financial services",
    round: "Series G",
    status: "exited",
  },
  {
    company: "Spotter",
    url: "https://www.spotter.com",
    description: "YouTube creator licensing",
    round: "Series D",
    status: "active",
  },
];

const advisoryRoles: Advisory[] = [
  {
    company: "Hunty",
    url: "https://hunty.com",
    description: "LatAm job marketplace",
  },
  {
    company: "Perennial",
    url: "https://www.perennial.earth",
    description: "Soil carbon measurement",
  },
  {
    company: "Xignus",
    url: "https://xignus.ai",
    description: "AI financial analyst",
  },
];

const tabs = ["Early-Stage", "Late-Stage", "Advisory"] as const;
type Tab = (typeof tabs)[number];

function InvestmentRow({ inv }: { inv: Investment }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-4 border-b border-foreground/10">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <a
            href={inv.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline hover:text-accent transition-colors"
          >
            {inv.company}
          </a>
          <span
            className={`text-xs px-1.5 py-0.5 rounded shrink-0 ${
              inv.status === "active"
                ? "bg-foreground/5 text-foreground/50"
                : "bg-accent/10 text-accent"
            }`}
          >
            {inv.status}
          </span>
        </div>
        <p className="text-sm text-foreground/50 mt-0.5">{inv.description}</p>
      </div>
      <span className="text-sm text-foreground/40 whitespace-nowrap">
        {inv.round}
      </span>
    </div>
  );
}

export default function InvestmentTabs() {
  const [active, setActive] = useState<Tab>("Early-Stage");

  return (
    <div>
      <div className="flex gap-4 mb-8 border-b border-foreground/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-3 text-sm transition-colors ${
              active === tab
                ? "text-foreground border-b-2 border-foreground"
                : "text-foreground/40 hover:text-foreground/60"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === "Early-Stage" && (
        <div className="border-t border-foreground/10">
          {earlyStage.map((inv) => (
            <InvestmentRow key={inv.company} inv={inv} />
          ))}
        </div>
      )}

      {active === "Late-Stage" && (
        <div className="border-t border-foreground/10">
          {lateStage.map((inv) => (
            <InvestmentRow key={inv.company} inv={inv} />
          ))}
        </div>
      )}

      {active === "Advisory" && (
        <div className="border-t border-foreground/10">
          {advisoryRoles.map((a) => (
            <div
              key={a.company}
              className="py-4 border-b border-foreground/10"
            >
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline hover:text-accent transition-colors"
              >
                {a.company}
              </a>
              <p className="text-sm text-foreground/50 mt-0.5">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
