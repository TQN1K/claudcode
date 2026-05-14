"use client";

import { motion } from "framer-motion";
import {
  Monitor, Rocket, RefreshCw, Calendar,
  Search, Smartphone, FileText, Wrench,
} from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const services = [
  {
    icon: Monitor,
    title: "Custom Business Websites",
    description: "Fully custom-designed websites built to represent your brand and convert visitors into paying customers.",
    highlight: "Most Popular",
    color: "from-violet-700 to-blue-800",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting single pages designed with one goal: get the visitor to call, book, or buy.",
    highlight: null,
    color: "from-blue-700 to-indigo-800",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description: "Transform your outdated site into a modern, fast, and lead-generating machine without starting from scratch.",
    highlight: null,
    color: "from-violet-800 to-blue-900",
  },
  {
    icon: Calendar,
    title: "Booking & Appointment Sites",
    description: "Integrated booking systems that let customers schedule appointments directly from your website, 24/7.",
    highlight: null,
    color: "from-indigo-700 to-violet-800",
  },
  {
    icon: Search,
    title: "Local SEO Setup",
    description: "Get found on Google when locals search for your service. We optimize for Winter Garden and Central Florida.",
    highlight: "High ROI",
    color: "from-blue-800 to-violet-900",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Over 60% of web traffic is mobile. We ensure your site looks and performs flawlessly on every device.",
    highlight: null,
    color: "from-violet-700 to-indigo-700",
  },
  {
    icon: FileText,
    title: "Lead Generation Forms",
    description: "Strategic contact forms and quote request flows designed to capture leads and get your phone ringing.",
    highlight: null,
    color: "from-indigo-800 to-blue-800",
  },
  {
    icon: Wrench,
    title: "Maintenance & Updates",
    description: "Ongoing support to keep your site fast, secure, and up-to-date — so you can focus on your business.",
    highlight: null,
    color: "from-blue-900 to-violet-800",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3 block">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything Your Business{" "}
            <span className="gradient-text">Needs Online</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            From your first website to a full digital presence — we handle the
            tech so you can focus on what you do best.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service, i) => (
            <motion.div key={service.title} variants={cardVariants} className="h-full">
              <GlowCard
                customSize
                glowColor={i % 2 === 0 ? "purple" : "blue"}
                className="h-full w-full p-6 group cursor-default !aspect-auto"
              >
                {service.highlight && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-gradient-to-r ${service.color} text-white z-10`}>
                    {service.highlight}
                  </span>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 mb-5">
            Not sure which service you need?{" "}
            <span className="text-white/70 font-medium">Let&apos;s talk for free.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">Request a Free Consultation</a>
            <a href="tel:3219771333" className="btn-secondary">Call Us Now</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
