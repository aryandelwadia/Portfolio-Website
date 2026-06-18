"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Code2, Menu, X } from "lucide-react";
import { socials } from "@/data/portfolio";

const links = [
  { href: "#home", title: "Home" },
  { href: "#profile", title: "Profile" },
  { href: "#projects", title: "Projects" },
  { href: "#skills", title: "Skills" },
  { href: "#contact", title: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
      <Link href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
        <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]">
          <Code2 size={19} />
        </span>
        <span className="hidden leading-none sm:block">
          <span className="block text-sm font-semibold tracking-tight text-white">Aryan</span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">Portfolio</span>
        </span>
      </Link>

      <div className="hidden items-center gap-7 md:flex">
        {links.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + index * 0.04, duration: 0.45, ease: "easeOut" }}
            className="text-sm font-medium text-white/65 transition hover:text-white"
          >
            {link.title}
          </motion.a>
        ))}
      </div>

      <div className="hidden items-center justify-end gap-2 md:flex">
        {socials.slice(0, 3).map((social) => (
          <Link
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition hover:border-white/35 hover:bg-white/[0.08]"
          >
            <Image src={social.image} alt="" width={19} height={19} className="rounded-sm" />
          </Link>
        ))}
      </div>

      <button
        aria-label="Toggle navigation menu"
        className="relative z-50 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white md:hidden"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-[#050505]/95 text-3xl font-semibold tracking-tight text-white backdrop-blur-xl md:hidden"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
