"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Layers3, Radio } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-100/25 bg-cyan-100/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
            <Radio size={14} />
            Project garage
          </div>
          <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-6xl lg:text-7xl">Mission Deck</h1>
          <p className="mt-6 text-lg leading-8 text-white/64">
            A focused showcase of full-stack builds, presented like race systems: clear purpose, visible modules, and direct access to the source.
          </p>
        </div>

        <div className="perspective-1200 mt-12 grid gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="tilt-card overflow-hidden rounded-lg border border-white/10 bg-[#0c0c0d]/92 shadow-[0_30px_90px_rgba(0,0,0,0.34)] lg:grid lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className={`relative min-h-[280px] overflow-hidden bg-white/[0.03] ${index % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top opacity-90"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.75))]" />
                <div className="absolute bottom-5 left-5 rounded-full border border-red-300/40 bg-red-500/20 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-100">
                  {project.type}
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-cyan-100/70">
                  <Layers3 size={18} />
                  System {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">{project.title}</h2>
                <p className="mt-5 text-base leading-7 text-white/62">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/66">
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="mt-7 grid gap-3 text-sm text-white/64 sm:grid-cols-3">
                  {project.points.map((point) => (
                    <li key={point} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.href}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#050505] transition hover:bg-cyan-100"
                >
                  <Code2 size={17} />
                  Source
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
