"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Gauge, Mail, Radio, Sparkles } from "lucide-react";
import F1Cockpit from "@/components/scene/F1Cockpit";
import { cockpitStats, profile, projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden"
    >
      <section className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-100">
            <Radio size={14} />
            Live from the dev grid
          </div>
          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold text-cyan-100/90 sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_0_34px_rgba(240,61,61,0.34)] transition hover:bg-red-400"
            >
              View Projects <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-100/35 bg-cyan-100/[0.08] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-cyan-50 transition hover:bg-cyan-100/[0.15]"
            >
              Contact Me <Mail size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {cockpitStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/42">{stat.label}</p>
                <p className="mt-2 text-sm font-black text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="perspective-1200 min-h-[420px] lg:min-h-[620px]">
          <F1Cockpit className="h-[420px] lg:h-[620px]" />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-[#0c0c0d]/90 p-5">
            <Gauge className="mt-1 text-red-300" size={24} />
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Performance Mindset</h2>
              <p className="mt-3 text-sm leading-6 text-white/58">
                I tune ideas through feedback, iteration, and the discipline of making interfaces feel clear and fast.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-[#0c0c0d]/90 p-5">
            <Sparkles className="mt-1 text-cyan-200" size={24} />
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Current Stack</h2>
              <p className="mt-3 text-sm leading-6 text-white/58">
                {skillGroups.map((group) => group.skills.slice(0, 3).join(", ")).slice(0, 2).join(", ")}.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-[#0c0c0d]/90 p-5">
            <Radio className="mt-1 text-white" size={24} />
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Featured Builds</h2>
              <p className="mt-3 text-sm leading-6 text-white/58">
                {projects.map((project) => project.title).join(" and ")} are highlighted as the current project deck.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
