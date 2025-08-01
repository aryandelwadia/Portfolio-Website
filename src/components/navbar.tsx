"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "motion/react";

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
];

export default function Navbar(){
    
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed:{
            rotate: 0,
        },
        opened:{
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        }
    }
    const centerVariants = {
        closed:{
            opacity: 1,
        },
        opened:{
            opacity: 0,
        }
    }
    const bottomVariants = {
        closed:{
            rotate: 0,
        },
        opened:{
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        }
    }

    const listVariants = {
        closed:{
            x: "100vw"
        },
        opened:{
            x: 0,
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
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                        <NavLink link={link} key={link.url}></NavLink>
                ))}
            </div>

            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                    <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>
                {open &&
                    <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map(link => (
                        <motion.div variants={listItemsVariants} key={link.url}>
                            <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>}
            </div>

            <div className="hidden md:flex gap-4 w-1/3 items-center justify-center">
                <Link href={"https://github.com/aryandelwadia"}>
                    <Image src="/github.png" alt="" width={24} height={24}></Image>
                </Link>
                <Link href={"https://www.linkedin.com/in/aryandelwadia/"}>
                    <Image src="/linkedin.png" alt="" width={24} height={24}></Image>
                </Link>
                <Link href={"https://leetcode.com/u/aryandelwadia/"}>
                    <Image src="/leetcode.png" alt="" width={24} height={24}></Image>
                </Link>
                <Link href={"https://www.geeksforgeeks.org/user/aryan18923/"}>
                    <Image src="/gfg.png" alt="" width={24} height={24}></Image>
                </Link>
                <Link href={"https://www.naukri.com/code360/profile/aryandelwadia"}>
                    <Image src="/cn.jpeg" alt="" width={24} height={24}></Image>
                </Link>
            </div>
        </div>
    );
}