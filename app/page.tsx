export default function Home() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <h1 className="font-mono text-xl md:text-2xl tracking-tight text-foreground">
        In Process
        <span className="inline-flex w-[1.5em]">
          <span className="animate-dot1">.</span>
          <span className="animate-dot2">.</span>
          <span className="animate-dot3">.</span>
        </span>
      </h1>
    </div>
  );
}
