"use client"
import { AnimatePresence } from "motion/react"
import Navbar from "./navbar";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function TransitionProvider({children} : {children: React.ReactNode}){
    
    const pathName = usePathname();
    const routeLabel = pathName === "/" ? "home" : pathName.substring(1);
    
    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="relative min-h-screen w-screen overflow-x-hidden bg-[#050505] text-[#f6f2e8] carbon-grid">
                <motion.div className="fixed inset-x-0 top-0 z-50 h-screen bg-[#050505]" animate={{height: "0vh"}} exit={{height: "140vh"}} transition={{duration: 0.45, ease: "easeOut"}} />
                <motion.div className="fixed inset-0 z-[60] m-auto h-fit w-fit cursor-default text-4xl font-black uppercase tracking-[0.28em] text-white sm:text-7xl" initial={{opacity: 1, y: 0}} animate={{opacity: 0, y: -16}} exit={{opacity: 0}} transition={{duration: 0.65, ease: "easeOut"}} >
                    {routeLabel}
                </motion.div>
                <motion.div className="fixed inset-x-0 bottom-0 z-50 h-screen bg-[#050505]" initial={{height: "140vh"}} animate={{height: "0vh", transition: {delay: 0.42}}} />
                
                <div className="sticky top-0 z-40 h-20 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
                    <Navbar />
                </div>
                <main>{children}</main>
            </div>
        </AnimatePresence>
    );
}
