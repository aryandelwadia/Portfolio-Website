"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Database,
  Mail,
  MonitorSmartphone,
  MoreHorizontal,
  Paperclip,
  Reply,
  Search,
  Send,
  Sparkles,
  Trash2,
  Workflow,
} from "lucide-react";
import { cockpitStats, experience, profile, projects, skillGroups, socials } from "@/data/portfolio";

const gradientStyle = {
  backgroundImage:
    "linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
  filter: "url(#c3-noise)",
};

const techCloud = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Tailwind",
];

const capabilityCards = [
  {
    tier: "Frontend",
    price: "Interfaces",
    description: "Clear, responsive product surfaces built for speed, polish, and repeated use.",
    features: ["React and Next.js pages", "Tailwind design systems", "Motion-rich UI states", "Responsive layouts"],
  },
  {
    tier: "Backend",
    price: "Systems",
    description: "Practical APIs and data flows that keep full-stack applications organized.",
    features: ["Node.js and Express", "MongoDB and SQL models", "Auth-ready app structure", "Operational dashboards"],
  },
  {
    tier: "Core",
    price: "Logic",
    description: "Problem solving, data structures, and iteration habits that strengthen implementation quality.",
    features: ["DSA practice", "Java, C++, Python", "Git/GitHub workflows", "ML fundamentals"],
  },
];

function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
    </svg>
  );
}

function PrimaryButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="white-cta group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-[0.98]"
    >
      {label}
      <ChevronRight size={16} className="transition-transform group-hover:translate-x-px" />
    </Link>
  );
}

function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/55">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      {label}
      {tag && <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] tracking-[0.12em] text-white/45">{tag}</span>}
    </div>
  );
}

function GlobalBackdrop() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-70"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        <div className="absolute inset-0 bg-[#050505]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(164,244,253,0.14),transparent_34rem),linear-gradient(180deg,transparent,rgba(5,5,5,0.72)_55%,#050505)]" />
      </div>
      <div className="pointer-events-none fixed inset-y-0 left-1/2 z-[5] hidden w-px -translate-x-[calc(50%+36rem)] bg-white/10 md:block" />
      <div className="pointer-events-none fixed inset-y-0 left-1/2 z-[5] hidden w-px translate-x-[calc(-50%+36rem)] bg-white/10 md:block" />
      <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>
    </>
  );
}

function MenuBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75, duration: 0.55, ease: "easeOut" }}
      className="h-10 border-y border-white/10 bg-black/40 backdrop-blur-md"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 text-xs text-white/55">
        <div className="flex items-center gap-4">
          <LogoMark className="h-3.5 w-3.5 text-white" />
          <span className="font-semibold text-white">Aryan.dev</span>
          {["File", "Edit", "View", "Build", "Deploy", "Help"].map((item, index) => (
            <span key={item} className={`${index > 2 ? "hidden sm:inline" : ""} ${index > 3 ? "md:inline" : ""}`}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Search size={14} />
          <span>Open to developer opportunities</span>
        </div>
      </div>
    </motion.div>
  );
}

function PortfolioMockup() {
  const rows = [
    {
      sender: "FreshEats",
      subject: "E-commerce flow",
      preview: "Product browsing, cart, checkout, responsive shopping UI",
      time: "Project 01",
      label: "Full-stack",
      title: "FreshEats grocery platform concept",
      summary: projects[0].summary,
      body: projects[0].points,
      href: projects[0].href,
      attachment: "fresheats-source.md",
    },
    {
      sender: "MediSync",
      subject: "Hospital operations",
      preview: "Patient records, appointments, billing, inventory workflows",
      time: "Project 02",
      label: "Dashboard UX",
      title: "MediSync healthcare operations concept",
      summary: projects[1].summary,
      body: projects[1].points,
      href: projects[1].href,
      attachment: "medisync-source.md",
    },
    {
      sender: "CodeVale",
      subject: "MERN Stack Intern",
      preview: "Practical application workflows and development experience",
      time: "2025",
      label: "Experience",
      title: experience[0].role,
      summary: experience[0].detail,
      body: ["Worked with MERN stack workflows", "Practiced implementation in real development context", "Built stronger project delivery habits"],
      href: "#contact",
      attachment: "experience-notes.md",
    },
    {
      sender: "DSA",
      subject: "Problem solving",
      preview: "Data structures, algorithms, and consistent practice",
      time: "Core",
      label: "Logic",
      title: "Problem-solving practice",
      summary: "DSA practice supports the way I reason through product logic, edge cases, and implementation tradeoffs.",
      body: ["Data structures and algorithms", "Java, C++, and Python practice", "Consistent debugging and decomposition"],
      href: "#skills",
      attachment: "dsa-track.md",
    },
    {
      sender: "F1 Mindset",
      subject: "Build, measure, iterate",
      preview: "Precision, feedback, speed, and continuous improvement",
      time: "Mode",
      label: "Operating mode",
      title: "F1-inspired engineering mindset",
      summary: profile.bio[2],
      body: ["Precision in interface details", "Feedback-driven iteration", "Performance and clarity as default goals"],
      href: "#projects",
      attachment: "operating-mode.md",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [archived, setArchived] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [status, setStatus] = useState("Select any message to inspect a project, skill, or experience note.");
  const visibleRows = rows.filter((row) => !archived.includes(row.sender));
  const activeRow = rows[selectedIndex] || rows[0];

  const selectRow = (sender: string) => {
    const nextIndex = rows.findIndex((row) => row.sender === sender);
    if (nextIndex >= 0) {
      setSelectedIndex(nextIndex);
      setStatus(`${rows[nextIndex].sender} opened in the reader.`);
    }
  };

  const scrollTo = (hash: string) => {
    window.location.hash = hash;
  };

  const openAction = () => {
    if (activeRow.href.startsWith("http")) {
      window.open(activeRow.href, "_blank", "noopener,noreferrer");
      setStatus(`${activeRow.sender} source opened in a new tab.`);
      return;
    }

    scrollTo(activeRow.href);
    setStatus(`Jumped to ${activeRow.href.replace("#", "")}.`);
  };

  const archiveActive = () => {
    if (archived.includes(activeRow.sender)) {
      setStatus(`${activeRow.sender} is already archived.`);
      return;
    }

    const nextArchived = [...archived, activeRow.sender];
    const nextVisible = rows.filter((row) => !nextArchived.includes(row.sender));
    setArchived(nextArchived);
    setStatus(`${activeRow.sender} archived from this mock inbox.`);
    if (nextVisible.length > 0) {
      setSelectedIndex(rows.findIndex((row) => row.sender === nextVisible[0].sender));
    }
  };

  const restoreArchived = () => {
    setArchived([]);
    setSelectedIndex(0);
    setStatus("Archived messages restored.");
  };

  return (
    <section id="profile" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1014]/90 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      >
        <div className="relative flex h-11 items-center justify-center border-b border-white/10">
          <div className="absolute left-4 flex gap-2">
            {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
              <span key={color} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
            ))}
          </div>
          <span className="text-xs text-white/50">Aryan - Portfolio OS</span>
        </div>

        <div className="grid min-h-[520px] lg:grid-cols-12">
          <aside className="border-b border-white/10 bg-black/30 p-4 lg:col-span-3 lg:border-b-0 lg:border-r">
            <button
              className="white-cta inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-[#A4F4FD]"
              onClick={() => {
                scrollTo("#contact");
                setStatus("Contact section opened.");
              }}
            >
              <Sparkles size={15} />
              Build with Aryan
            </button>
            <div className="mt-5 grid gap-2">
              {cockpitStats.map((stat, index) => (
                <button
                  key={stat.label}
                  className={`rounded-lg px-3 py-2 text-left transition ${selectedIndex === index + 2 ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5"}`}
                  onClick={() => selectRow(rows[Math.min(index + 2, rows.length - 1)].sender)}
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span>{stat.label}</span>
                    <span className="text-white/40">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white">{stat.value}</p>
                </button>
              ))}
            </div>
            {archived.length > 0 && (
              <button className="mt-4 w-full rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white" onClick={restoreArchived}>
                Restore archived ({archived.length})
              </button>
            )}
            <div className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Focus labels</p>
              <div className="mt-3 grid gap-2 text-xs text-white/60">
                {[
                  ["#00d2ff", "Full-stack"],
                  ["#A4F4FD", "Interfaces"],
                  ["#f59e0b", "DSA"],
                  ["#10b981", "Learning"],
                ].map(([color, label]) => (
                  <span key={label} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="border-b border-white/10 lg:col-span-4 lg:border-b-0 lg:border-r">
            <div className="border-b border-white/10 p-4">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/35">
                <Search size={15} />
                Search portfolio
              </div>
            </div>
            <div>
              {visibleRows.map((row) => (
                <button
                  key={`${row.sender}-${row.subject}`}
                  className={`block w-full border-b border-white/10 p-4 text-left transition ${row.sender === activeRow.sender ? "bg-white/[0.07]" : "hover:bg-white/[0.035]"}`}
                  onClick={() => selectRow(row.sender)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{row.sender}</p>
                    <span className="text-[11px] text-white/38">{row.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{row.subject}</p>
                  <p className="mt-1 line-clamp-1 text-xs text-white/42">{row.preview}</p>
                </button>
              ))}
              {visibleRows.length === 0 && (
                <div className="p-5 text-sm leading-6 text-white/48">
                  Everything is archived. Use restore to bring the portfolio messages back.
                </div>
              )}
            </div>
          </div>

          <article className="p-5 lg:col-span-5">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <button
                aria-label="Reply through contact form"
                title="Reply through contact form"
                className="grid size-7 place-items-center rounded-md text-white/45 transition hover:bg-white/5 hover:text-white"
                onClick={() => {
                  scrollTo("#contact");
                  setStatus("Reply opened the contact form.");
                }}
              >
                <Reply size={15} />
              </button>
              <button
                aria-label="Open selected source or section"
                title="Open selected source or section"
                className="grid size-7 place-items-center rounded-md text-white/45 transition hover:bg-white/5 hover:text-white"
                onClick={openAction}
              >
                <Code2 size={15} />
              </button>
              <button
                aria-label="Archive selected message"
                title="Archive selected message"
                className="grid size-7 place-items-center rounded-md text-white/45 transition hover:bg-white/5 hover:text-white"
                onClick={archiveActive}
              >
                <Trash2 size={15} />
              </button>
              <button
                aria-label="Toggle details"
                title="Toggle details"
                className={`ml-auto grid size-7 place-items-center rounded-md transition hover:bg-white/5 hover:text-white ${showDetails ? "bg-white/10 text-white" : "text-white/45"}`}
                onClick={() => {
                  setShowDetails((value) => !value);
                  setStatus(showDetails ? "Details collapsed." : "Details expanded.");
                }}
              >
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div className="py-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white">{activeRow.title}</h2>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] text-sm font-semibold text-white">
                  {activeRow.sender.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{activeRow.sender}</p>
                  <p className="text-xs text-white/42">{activeRow.subject} - {activeRow.time}</p>
                </div>
                <span className="ml-auto rounded-full border border-white/10 px-2 py-1 text-xs text-white/55">{activeRow.label}</span>
              </div>
            </div>
            <div className="liquid-glass rounded-lg p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[#A4F4FD]">
                <Sparkles size={16} />
                Summary by portfolio OS
              </div>
              <p className="mt-3 text-sm leading-6 text-white/68">{activeRow.summary}</p>
            </div>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-white/58">
              {activeRow.body.map((point) => (
                <div key={point} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  {point}
                </div>
              ))}
            </div>
            {showDetails && (
              <div className="mt-5 rounded-lg border border-white/10 bg-black/30 p-4 text-xs leading-6 text-white/50">
                <p>Status: {status}</p>
                <p className="mt-1">Action target: {activeRow.href.startsWith("http") ? "external source repository" : activeRow.href}</p>
                <p className="mt-1">Archived in this session: {archived.length || "none"}</p>
              </div>
            )}
            <p className="mt-4 min-h-5 text-xs font-medium text-[#A4F4FD]/80">{status}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/60">
              <Paperclip size={14} />
              {activeRow.attachment}
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

function SkillsSection() {
  const categories = [
    {
      category: "Frontend",
      count: skillGroups.find((group) => group.title === "Frontend")?.skills.length || 0,
      color: "#ffffff",
      items: "React - Next.js - Tailwind CSS",
    },
    {
      category: "Backend",
      count: skillGroups.find((group) => group.title === "Backend")?.skills.length || 0,
      color: "#e5e5e5",
      items: "Node.js - Express.js - MongoDB - SQL",
    },
    {
      category: "Languages",
      count: skillGroups.find((group) => group.title === "Languages")?.skills.length || 0,
      color: "#a3a3a3",
      items: "C/C++ - Java - Python - JavaScript - TypeScript",
    },
    {
      category: "Core",
      count: skillGroups.find((group) => group.title === "Core")?.skills.length || 0,
      color: "#525252",
      items: "DSA - ML - Git/GitHub",
    },
  ];

  return (
    <section id="skills" className="mx-auto grid max-w-6xl scroll-mt-28 gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <SectionEyebrow label="Skills" tag="Full-stack" />
        <h2 className="mt-5 text-3xl font-semibold leading-[1.02] tracking-tight text-white md:text-5xl">
          Clear builds,
          <br />
          shipped in focused passes.
        </h2>
        <p className="mt-6 max-w-md text-base leading-[1.6] text-white/60">
          I combine practical web development with problem-solving discipline, turning ideas into interfaces, data flows, and project systems that are easy to understand.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {["Auto-organized UI", "API-ready thinking", "DSA practice", "Iterative delivery"].map((chip) => (
            <span key={chip} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70">
              {chip}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="liquid-glass rounded-2xl p-5"
      >
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="text-white/80">Today - skill telemetry</span>
          <span className="text-white/35">{skillGroups.flatMap((group) => group.skills).length} signals</span>
        </div>
        <div className="grid gap-3">
          {categories.map((item) => (
            <div key={item.category} className="liquid-glass rounded-lg p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-white">{item.category}</span>
                </div>
                <span className="text-sm text-white/38">{item.count}</span>
              </div>
              <p className="mt-2 text-sm text-white/52">{item.items}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-28">
      <SectionEyebrow label="Projects" tag="Build log" />
      <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-3xl font-semibold leading-[1.02] tracking-tight text-white md:text-5xl">
          Featured systems with real application shape.
        </h2>
        <p className="max-w-sm text-sm leading-6 text-white/55">
          Two current full-stack concepts, shown as practical product surfaces rather than static exercises.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-black/45 backdrop-blur-xl transition hover:border-[#A4F4FD]/45"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
              <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover object-top opacity-85 transition duration-500 group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.78))]" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur">
                System {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A4F4FD]/75">{project.type}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/58">
                    {item}
                  </span>
                ))}
              </div>
              <Link href={project.href} className="white-cta mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-[#A4F4FD]">
                Source
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function CapabilitySection() {
  return (
    <section className="c3-pricing-section">
      <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0">
        <filter id="c3-price-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.075" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>
      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Portfolio.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </div>
      </div>
      <div className="c3-grid">
        {capabilityCards.map((card, index) => (
          <article key={card.tier} className={`c3-card ${index === 1 ? "c3-card-pro" : ""}`}>
            <p className="c3-tier-small">{card.tier}</p>
            <h3 className="c3-tier-large">{card.price}</h3>
            <p className="c3-desc">{card.description}</p>
            <ul className="c3-list">
              {card.features.map((feature) => (
                <li key={feature}>
                  <span className="c3-check">
                    <Check size={15} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a className="c3-btn" href="#contact">
              Start Conversation
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const principles = [
    {
      icon: Workflow,
      title: "Iterative delivery",
      body: "I shape work through feedback loops: build the first useful version, test the weak spots, and keep tightening the result.",
    },
    {
      icon: MonitorSmartphone,
      title: "Interface clarity",
      body: "I care about layouts that scan quickly, flows that feel obvious, and details that make products easier to use.",
    },
    {
      icon: Database,
      title: "Full-stack context",
      body: "I connect UI decisions to data models, API behavior, and the practical constraints behind the screen.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionEyebrow label="Track record" tag="Operating notes" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {principles.map((item) => (
          <figure key={item.title} className="liquid-glass rounded-2xl p-6">
            <item.icon className="text-[#A4F4FD]" size={24} />
            <blockquote className="mt-5 text-sm leading-[1.6] text-white/78">{item.body}</blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/45">{profile.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {experience.map((item) => (
          <div key={`${item.role}-${item.period}`} className="rounded-2xl border border-white/10 bg-black/42 p-5 backdrop-blur-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#A4F4FD]/70">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{item.role}</h3>
            <p className="mt-1 text-sm text-white/52">{item.company}</p>
            <p className="mt-4 text-sm leading-6 text-white/58">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.current) return;

    const formData = new FormData(form.current);
    const email = String(formData.get("user_email") || "").trim();
    const message = String(formData.get("user_message") || "").trim();

    if (!email || !message) {
      setError("Add your email and message before sending.");
      return;
    }

    if (!process.env.NEXT_PUBLIC_SERVICE_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID || !process.env.NEXT_PUBLIC_PUBLIC_KEY) {
      setError("Email service is not configured yet.");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        (sendError) => {
          setError("Message failed to send. Please try again.");
          console.error(sendError);
        },
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-32">
      <div className="liquid-glass relative overflow-hidden rounded-3xl px-6 py-10 md:px-8 md:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(600px_circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionEyebrow label="Contact" tag="Open channel" />
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl">
              Close the tabs.
              <br />
              Open the conversation.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-[1.6] text-white/60">
              Reach out for internships, developer roles, project collaboration, or a focused conversation about software and motorsport.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {socials.map((social) => (
                <Link key={social.label} href={social.href} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white">
                  <Image src={social.image} alt="" width={17} height={17} className="rounded-sm" />
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">Your name</span>
                <input name="user_name" type="text" placeholder="Name" className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[#A4F4FD]/70" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">Email address</span>
                <input name="user_email" type="email" placeholder="you@example.com" className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[#A4F4FD]/70" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">Message</span>
                <textarea name="user_message" rows={6} placeholder="Share the context, role, project, or idea." className="resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[#A4F4FD]/70" />
              </label>
            </div>
            <button type="submit" disabled={sending} className="white-cta mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#A4F4FD] disabled:cursor-not-allowed disabled:opacity-60">
              {sending ? "Sending" : "Send Message"}
              <Send size={16} />
            </button>
            <div className="mt-4 min-h-6 text-sm font-medium">
              {success && <span className="text-[#A4F4FD]">Message sent successfully.</span>}
              {error && <span className="text-red-200">{error}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <GlobalBackdrop />
      <div className="relative z-10">
        <section id="home" className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl scroll-mt-28 flex-col items-center justify-center px-6 pb-20 pt-16 text-center md:pt-28">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-10">
            <LogoMark className="mx-auto h-10 w-10 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-semibold leading-[0.9] tracking-tight text-white md:text-7xl"
          >
            {profile.name}.
            <br />
            <span className="animate-shiny" style={gradientStyle}>
              Revitalized
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
            className="mt-8 max-w-xl text-base leading-[1.5] text-white/60"
          >
            {profile.headline} I build practical full-stack projects, sharpen problem solving through DSA, and keep every interface focused on clarity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.65, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <PrimaryButton href="#projects" label="View Projects" />
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5">
              Contact Me
              <Mail size={16} />
            </Link>
          </motion.div>
          <p className="mt-5 text-xs text-white/40">MERN / Next.js / DSA / F1-inspired engineering</p>
        </section>

        <MenuBar />
        <PortfolioMockup />

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-white/40">Built with the tools I use to turn ideas into systems</p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
            {techCloud.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="text-center text-sm font-semibold tracking-tight text-white/50 transition hover:text-white"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </section>

        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CapabilitySection />
        <ContactSection />
      </div>
    </div>
  );
}
