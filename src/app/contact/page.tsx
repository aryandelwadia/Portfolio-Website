"use client"
import { motion } from "motion/react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage(){
    
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const text = "Say Hello"

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form.current!, {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        })
        .then(
            () => {
                setSuccess(true);
                form.current?.reset();
            },
            (error) => {
                setError(true);
                console.log(error);
            },
        );
    };
    
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                    <motion.div>
                        {text.split("").map((letter, index) =>(
                            <motion.span key={index} initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 3, repeat: Infinity, delay: index*0.1}}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 " action="">
                    <span>Dear Aryan Delawadia</span>
                    <textarea name="user_message" id="" rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none"></textarea>
                    <span>My mail address is:</span>
                    <input name="user_email" type="text" className="bg-transparent border-b-2 border-b-black outline-none resize-none"/>
                    <span>Regards</span>
                    <button type="submit" className="bg-purple-200 rounded font-semibold text-gray-600 p-4 ">Send</button>
                    {success && <span className="text-green-600 font-semibold">Your message has been sent Successfully!</span>}
                    {error && <span className="text-red-600 font-semibold">Something went Wrong!</span>}
                </form>
            </div>
        </motion.div>
    );
}