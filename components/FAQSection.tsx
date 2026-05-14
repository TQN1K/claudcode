"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most projects are completed within 7–14 business days from the time we receive your content and have a clear scope. More complex sites with custom features like booking systems, e-commerce, or animations may take 3–4 weeks. We'll give you a clear timeline before we start.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Absolutely — that's our specialty. Cloud Pixel was built specifically to serve local small businesses in Winter Garden and throughout Central Florida. Whether you're just starting out or have been in business for 20 years, we'll build something that works for your budget and goals.",
  },
  {
    q: "Can you redesign my current website?",
    a: "Yes, and we do it often. If your current site is outdated, slow, or not converting visitors into customers, a redesign could be the best investment you make this year. We'll review your existing site, identify what's not working, and rebuild it to perform. We can migrate your existing content.",
  },
  {
    q: "Do you offer website maintenance after launch?",
    a: "Yes. We offer optional monthly maintenance plans that include security updates, plugin/software updates, content changes, speed monitoring, and priority support. Peace of mind so your site never breaks, slows down, or gets hacked while you're busy running your business.",
  },
  {
    q: "Can you help me get more leads from my website?",
    a: "That's the whole point. Every site we build is designed as a lead generation machine — with strategic CTAs, mobile click-to-call, optimized contact forms, and local SEO built in from day one. We also set up Google Analytics so you can see exactly how many leads your site is generating.",
  },
  {
    q: "What do I need to get started?",
    a: "Very little. We just need a quick call or form submission to understand your business, goals, and budget. From there we'll send you a proposal. Once approved, we gather your basic content (logo, colors, photos if you have them — we can work around it if not) and get building.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`glass rounded-2xl overflow-hidden transition-all duration-300 border ${
        open ? "border-violet-700/40" : "border-white/[0.05]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${
          open ? "text-violet-400" : "text-white/70 group-hover:text-white"
        }`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown size={20} className={`transition-colors ${open ? "text-violet-400" : "text-white/25"}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-white/[0.05] mb-4" />
              <p className="text-white/40 leading-relaxed text-sm">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 radial-glow-purple opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-700/40 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Questions?{" "}
            <span className="gradient-text">We Have Answers.</span>
          </h2>
          <p className="text-white/40 text-lg">
            Everything you need to know about working with Cloud Pixel.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass rounded-2xl p-8 mt-10 text-center border border-violet-900/30"
        >
          <p className="text-white font-semibold mb-2">Still have questions?</p>
          <p className="text-white/35 text-sm mb-6">
            We&apos;re just a call or message away. No sales pressure, just honest answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:3219771333" className="btn-secondary text-sm py-2.5">Call 321-977-1333</a>
            <a href="mailto:abou99822@gmail.com" className="btn-primary text-sm py-2.5">Send an Email</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
