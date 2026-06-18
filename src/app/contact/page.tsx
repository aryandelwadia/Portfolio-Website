"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Mail, Radio, Send, ShieldCheck, SignalHigh } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.current) return;

    const formData = new FormData(form.current);
    const email = String(formData.get("user_email") || "").trim();
    const message = String(formData.get("user_message") || "").trim();

    if (!email || !message) {
      setError("Add your email and message before sending.");
      return;
    }

    if (!process.env.NEXT_PUBLIC_SERVICE_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID || !process.env.NEXT_PUBLIC_PUBLIC_KEY) {
      setError("Email service is not configured yet.");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        (sendError) => {
          setError("Message failed to send. Please try again.");
          console.error(sendError);
        },
      )
      .finally(() => setSending(false));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-16">
        <div className="space-y-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-100">
              <SignalHigh size={14} />
              Open channel
            </div>
            <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-6xl lg:text-7xl">Contact</h1>
            <p className="mt-6 text-lg leading-8 text-white/64">
              Send a message for internships, developer roles, project collaboration, or a focused conversation about software and motorsport.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { icon: ShieldCheck, label: "Signal quality", value: "Clear context gets the fastest reply." },
              { icon: Radio, label: "Response mode", value: "I am open to developer opportunities." },
              { icon: Mail, label: "Delivery", value: "This form uses the existing EmailJS setup." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-lg border border-white/10 bg-[#0c0c0d]/90 p-5">
                <item.icon className="mt-1 text-cyan-200" size={22} />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/44">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/70 transition hover:border-cyan-200/60 hover:text-white"
              >
                <Image src={social.image} alt="" width={18} height={18} className="rounded-sm" />
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="scanline rounded-lg border border-white/10 bg-[#0c0c0d]/92 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:p-8">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-100/70">Transmission to</p>
            <h2 className="mt-3 text-3xl font-black text-white">{profile.name}</h2>
          </div>

          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/52">Your name</span>
              <input name="user_name" type="text" placeholder="Name" className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-red-300/70" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/52">Email address</span>
              <input name="user_email" type="email" placeholder="you@example.com" className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-red-300/70" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/52">Message</span>
              <textarea name="user_message" rows={7} placeholder="Share the context, role, project, or idea." className="resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-red-300/70" />
            </label>
          </div>

          <button type="submit" disabled={sending} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_0_34px_rgba(240,61,61,0.26)] transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60">
            {sending ? "Sending" : "Send Message"} <Send size={17} />
          </button>

          <div className="mt-5 min-h-6 text-sm font-semibold">
            {success && <span className="text-cyan-100">Message sent successfully.</span>}
            {error && <span className="text-red-200">{error}</span>}
          </div>
        </form>
      </section>
    </motion.div>
  );
}
