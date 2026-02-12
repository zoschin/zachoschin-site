import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Zach Oschin",
};

export default function Writing() {
  return (
    <div>
      <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
        <p>
          I write about investing, technology, and the ideas I find most
          compelling. Essays and notes will appear here as I publish them.
        </p>
      </div>
    </div>
  );
}
