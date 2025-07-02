"use client"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "Fresh Eats",
        desc: "The FreshEats e-commerce project aims to create a user-friendly online platform for purchasing everyday grocery items. This system allows customers to browse a wide range of products, add items to a virtual cart, and securely place orders for home delivery or pickup. Key features include real-time inventory management, personalized recommendations, secure payment integration, and responsive design for both web and mobile devices.",
        img: "/FreshEats.png",
        link: "https://github.com/aryandelwadia/FreshEats",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "MediSync",
        desc: "MediSync is a comprehensive hospital management system designed to streamline and digitize medical operations. It integrates patient records, appointments, billing, inventory, and staff management into a single, efficient platform. MediSync enhances workflow efficiency, improves patient care, and ensures secure, centralized data access for healthcare providers.",
        img: "/MediSync.png",
        link: "https://github.com/aryandelwadia/MediSync",
    },
];

export default function PortfolioPage(){
    
    const ref = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({target: ref});

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"])
    
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            <div className="h-[400vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map(item => (
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id} >
                                <div className=" flex flex-col gap-8 text-white">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                                    <div className="relative w-100 h-56 md:w-110 md:h-64 lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[420px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-xl">{item.desc}</p>
                                    <Link href={item.link} className="flex justify-end">
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Github</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}