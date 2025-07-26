"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain"></Image>
        </div>
        
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl font-bold md:text-6xl">Turning Ideas Into Functional Code</h1>
          <p className="md:text-xl">{"Hello! I'm a curious and motivated software developer, just starting out but full of ideas and energy. I love turning concepts into code and learning new things every day. From small scripts to full-stack projects, I'm always excited to build, collaborate, and grow. Thanks for stopping by!"}</p>
          <div className="flex gap-4 ">
            <Link href={"/contact"}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
