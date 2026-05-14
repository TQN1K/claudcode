"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, Zap } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/50 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-gradient-to-r from-violet-900/15 to-blue-900/15 blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-violet-900/30"
        >
          <Zap size={13} className="text-violet-400 fill-violet-400" />
          <span className="text-sm text-white/40">Free consultation — no commitment required</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Ready to Build a Website{" "}
          <span className="gradient-text">That Sells?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Every day without a professional website is a day you&apos;re leaving money on
          the table. Let Cloud Pixel build you a site that works as hard as you do —
          and starts generating leads from day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            Get My Free Quote
            <ArrowRight size={20} />
          </a>
          <a href="tel:3219771333" className="btn-secondary text-base px-8 py-4">
            <Phone size={20} />
            Call 321-977-1333
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/25"
        >
          <a href="tel:3219771333" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
            <Phone size={13} /> 321-977-1333
          </a>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <a href="mailto:abou99822@gmail.com" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
            <Mail size={13} /> abou99822@gmail.com
          </a>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <span>📍 Winter Garden, FL</span>
        </motion.div>
      </div>
    </section>
  );
}
