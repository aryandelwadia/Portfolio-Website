"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "motion/react";
import { Code2, Menu, X } from "lucide-react";
import { socials } from "@/data/portfolio";

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
];

export default function Navbar(){
    
    const [open, setOpen] = useState(false);

    const listVariants = {
        closed:{
            x: "100vw",
            opacity: 0,
        },
        opened:{
            x: 0,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            }
        }
    }
    const listItemsVariants = {
        closed:{
            x: -10,
            opacity: 0,
        },
        opened:{
            x: 0,
            opacity: 1,
        }
    }
    
    return (
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="group flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-red-400/50 bg-red-500/10 text-red-200 shadow-[0_0_30px_rgba(240,61,61,0.18)]">
                    <Code2 size={20} />
                </span>
                <span className="leading-none">
                    <span className="block text-sm font-black uppercase tracking-[0.22em] text-white">Aryan</span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100/60">F1 Dev Grid</span>
                </span>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
                {links.map(link => (
                        <NavLink link={link} key={link.url}></NavLink>
                ))}
            </div>

            <div className="md:hidden">
                <button
                    aria-label="Toggle navigation menu"
                    className="relative z-50 grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.08] text-white"
                    onClick={(()=>setOpen(!open))}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
                {open &&
                    <motion.div variants={listVariants} initial="closed" animate="opened" className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#050505] text-4xl font-black uppercase tracking-[0.16em] text-white">
                    {links.map(link => (
                        <motion.div variants={listItemsVariants} key={link.url}>
                            <Link href={link.url} onClick={() => setOpen(false)}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>}
            </div>

            <div className="hidden items-center justify-end gap-3 md:flex">
                {socials.slice(0, 4).map((social) => (
                <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition hover:border-cyan-200/70 hover:bg-cyan-200/10"
                >
                    <Image src={social.image} alt="" width={20} height={20} className="rounded-sm" />
                </Link>
                ))}
            </div>
        </nav>
    );
}
