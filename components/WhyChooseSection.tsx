"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, PhoneCall, Palette, MapPin, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    color: "from-violet-700 to-blue-800",
    title: "Fast Delivery",
    description: "Most websites are delivered in 7–14 days. No months-long delays, no endless revision cycles. We move fast without cutting corners.",
  },
  {
    icon: Smartphone,
    color: "from-blue-700 to-indigo-800",
    title: "Mobile-First Design",
    description: "Every pixel is designed for mobile first. Your site will look stunning and load lightning-fast on every phone, tablet, and screen size.",
  },
  {
    icon: PhoneCall,
    color: "from-indigo-700 to-violet-800",
    title: "Built to Get Calls & Leads",
    description: "We don't just build pretty sites. Every element — CTAs, forms, layout — is strategically placed to convert visitors into customers.",
  },
  {
    icon: Palette,
    color: "from-violet-800 to-blue-900",
    title: "Clean Modern UI",
    description: "Premium design that matches your brand and makes you look like the established professional you are — not just another generic template.",
  },
  {
    icon: MapPin,
    color: "from-blue-800 to-violet-900",
    title: "Local Florida Focus",
    description: "We're based right here in Winter Garden. We understand the local market, local SEO, and what Central Florida customers respond to.",
  },
  {
    icon: DollarSign,
    color: "from-indigo-800 to-blue-800",
    title: "Affordable Packages",
    description: "Professional quality doesn't have to cost a fortune. Our packages are priced for small businesses, with transparent, flat-rate pricing.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function WhyChooseSection() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 radial-glow-cyan opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3 block">
                Why Cloud Pixel
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                The Agency That{" "}
                <span className="gradient-text">Actually Gets Results</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-8">
                You&apos;ve seen agencies promise the world and deliver a template.
                Cloud Pixel is different. We&apos;re a local Florida agency obsessed
                with one thing: building websites that generate real business for
                real people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">Work With Us</a>
                <a href="tel:3219771333" className="btn-secondary">Call 321-977-1333</a>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="glass glass-hover rounded-2xl p-5 group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon size={18} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
