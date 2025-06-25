"use client"
import { motion } from "motion/react";

export default function ContactPage(){
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            contact
        </motion.div>
    );
}