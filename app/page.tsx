import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-mono text-xl md:text-2xl tracking-tight mb-12">
        Zach Oschin
      </h1>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
        <p>
          I{"'"}ve been investing in and launching businesses since I was a kid.
          What started with washing cars and buying my first shares of Apple
          stock turned into a long-term obsession with building companies that
          matter.
        </p>
        <p>
          Over the years, I{"'"}ve been lucky to{" "}
          <Link
            href="/investing"
            className="text-accent underline-offset-4 hover:underline transition-colors"
          >
            partner
          </Link>
          {" "}with founders I admire,{" "}
          <Link
            href="/travel"
            className="text-accent underline-offset-4 hover:underline transition-colors"
          >
            travel
          </Link>
          {" "}and work around the world, and build some{" "}
          <Link
            href="/generalistarticle"
            className="text-accent underline-offset-4 hover:underline transition-colors"
          >
            companies
          </Link>
          {" "}of my own along the way. A couple beliefs that guide how I
          approach the work:
        </p>
        <div className="space-y-3 pl-6">
          <p className="border-l-2 border-accent pl-4">
            Building makes you a better investor, and investing makes you a
            better builder
          </p>
          <p className="border-l-2 border-accent pl-4">
            A global perspective improves local outcomes
          </p>
        </div>
        <p>
          Today I spend my time investing (personally and as part of the{" "}
          <a
            href="https://ardent.vc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline transition-colors"
          >
            Ardent
          </a>{" "}
          team) and trying to understand what{"'"}s changing, what{"'"}s durable,
          and what{"'"}s worth building next.
        </p>
        <p>
          This site serves as a repository for what I am working on and thinking
          about. If anything resonates, feel free to reach out.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-foreground/10 flex gap-6 text-sm">
        <a
          href="mailto:hi@zachoschin.com"
          className="text-accent underline-offset-4 hover:underline transition-colors"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/zachoschin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-4 hover:underline transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/zoschin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-4 hover:underline transition-colors"
        >
          X
        </a>
      </div>
    </div>
  );
}
