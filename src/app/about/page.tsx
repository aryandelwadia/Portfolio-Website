"use client"
import { motion, useInView, useScroll } from "motion/react";
import Brain from "../../components/brain"
import { useRef } from "react";

export default function AboutPage(){
    
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ container: containerRef });
    
    const skillRef = useRef<HTMLDivElement | null>(null);
    const isSkillRefInView = useInView(skillRef, {once: true});

    const experienceRef = useRef<HTMLDivElement | null>(null);
    const isExperienceRefInView = useInView(experienceRef, {once: true});
    
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 zl:gap-64 lg:w-2/3 xl:w-1/2 lg:pr-0">
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">Biography</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aut! Excepturi, necessitatibus accusamus magni ab ullam dicta nostrum pariatur maxime. Porro, dolores! Molestias eaque odit distinctio mollitia magni, vel harum?</p>
                        <span className="italic">dsad asdniasd asdnasd asdjasodjsaid jasjdaiodnaosi idjasiodas</span>
                    </div>

                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        <motion.h1 initial={{x: "-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay: 0.2}} className="font-bold text-2xl">Skills</motion.h1>
                        <motion.div initial={{x: "-300px"}} animate={isSkillRefInView ? {x:0} : {}} className="flex gap-4 flex-wrap">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">C/C++</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Java</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Python</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">DSA</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Javascript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Typescript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bootstrap</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Express.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Mongo DB</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SQL</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">ML</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git/Github</div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        <motion.h1 initial={{x: "-300px"}} animate={isExperienceRefInView ? {x:0} : {}} transition={{delay: 0.2}} className="font-bold text-2xl">Experience</motion.h1>
                        <motion.div initial={{x: "-300px"}} animate={isExperienceRefInView ? {x:0} : {}} className="">
                            <div className="flex justify-between h-48 ">
                                <div className="w-1/3">
                                    {/* left */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Intern
                                    </div>
                                    <div className="p-3 text-sm italic">
                                        As MERN Stack Developer
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        May - June 2025
                                    </div>
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        CodeVale Technologies
                                    </div>
                                </div>
                                <div className ="w-1/6">
                                    {/* center */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 ">
                                    {/* right */}
                                </div>
                            </div>
                            <div className="flex justify-between h-48 ">
                                <div className="w-1/3">
                                    {/* left */}
                                    
                                </div>
                                <div className ="w-1/6">
                                    {/* center */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 ">
                                    {/* right */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Freelancer
                                    </div>
                                    <div className="p-3 text-sm italic">
                                        Currently looking for a job/internship.....
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        Till Date
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 ">
                    <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>
    );
}