"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Cpu, Flag, Gauge, Layers3, TimerReset } from "lucide-react";
import { experience, profile, skillGroups } from "@/data/portfolio";

export default function AboutPage() {
  const skillRef = useRef<HTMLDivElement | null>(null);
  const isSkillRefInView = useInView(skillRef, { once: true });

  const experienceRef = useRef<HTMLDivElement | null>(null);
  const isExperienceRefInView = useInView(experienceRef, { once: true });

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
        <div className="scanline rounded-lg border border-white/10 bg-[#0c0c0d]/88 p-6 shadow-2xl lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-red-200">Driver profile</p>
          <h1 className="mt-4 text-4xl font-black uppercase text-white sm:text-5xl">{profile.role}</h1>
          <p className="mt-5 text-lg leading-8 text-white/66">{profile.headline}</p>
          <div className="mt-8 grid gap-3">
            {[
              { icon: Flag, label: "Mindset", value: "F1-inspired precision" },
              { icon: Gauge, label: "Focus", value: "Full-stack web apps" },
              { icon: TimerReset, label: "Method", value: "Learn, build, iterate" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <item.icon className="text-cyan-200" size={22} />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/44">{item.label}</p>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-100/70">Biography</p>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/68 sm:text-lg">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div ref={skillRef}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                <Cpu className="text-red-300" />
                <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-white">Skill Telemetry</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="tilt-card rounded-lg border border-white/10 bg-[#0f1011]/90 p-5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100">
                      <Layers3 size={17} />
                      {group.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-white/74">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div ref={experienceRef}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isExperienceRefInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-3">
                <Flag className="text-red-300" />
                <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-white">Track Record</h2>
              </div>
              <div className="mt-6 space-y-4">
                {experience.map((item) => (
                  <div key={`${item.role}-${item.period}`} className="relative rounded-lg border border-white/10 bg-[#0f1011]/90 p-5 pl-8">
                    <span className="absolute left-0 top-5 h-10 w-1 rounded-r-full bg-red-500" />
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">{item.period}</p>
                    <h3 className="mt-2 text-xl font-black text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-bold text-cyan-100/75">{item.company}</p>
                    <p className="mt-4 text-sm leading-6 text-white/58">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
