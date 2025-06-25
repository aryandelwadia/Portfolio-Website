"use client"
import { motion } from "motion/react";

export default function PortfolioPage(){
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            Portfolio Page
        </motion.div>
    );
}