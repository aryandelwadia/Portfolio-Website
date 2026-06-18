"use client";

import dynamic from "next/dynamic";

const F1CockpitScene = dynamic(() => import("./F1CockpitScene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

function SceneFallback() {
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-[#070707]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(240,61,61,0.24),transparent_36%),radial-gradient(circle_at_65%_62%,rgba(159,252,255,0.18),transparent_34%)]" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/70 shadow-[0_0_70px_rgba(240,61,61,0.35)]" />
      <div className="absolute bottom-10 left-8 right-8 h-24 rounded-lg border border-white/10 bg-white/[0.03] shadow-2xl" />
      <div className="absolute bottom-20 left-1/2 h-1 w-2/3 -translate-x-1/2 rounded-full bg-cyan-200/70" />
    </div>
  );
}

export default function F1Cockpit({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-full min-h-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-[#050505] shadow-[0_30px_120px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%,rgba(0,0,0,0.45))]" />
      <div className="pointer-events-none absolute left-6 top-6 z-20 rounded-full border border-cyan-100/20 bg-black/40 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-100/80">
        Aero telemetry
      </div>
      <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/45 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white/78 backdrop-blur">
        <span>ARYAN.DEV</span>
        <span className="text-red-200">MERN / DSA / NEXT</span>
      </div>
      <F1CockpitScene />
    </div>
  );
}
