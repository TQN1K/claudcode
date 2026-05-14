"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Wifi, PhoneOff } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    color: "from-violet-700 to-blue-800",
    glow: "rgba(109,40,217,0.12)",
    stat: "94%",
    statLabel: "of first impressions are design-related",
    title: "Your Website Looks Outdated",
    body: "First impressions happen in under 3 seconds. If your site looks like it was built 10 years ago, visitors leave — and call your competitor instead. Design directly impacts trust.",
  },
  {
    icon: Wifi,
    color: "from-blue-700 to-indigo-800",
    glow: "rgba(29,78,216,0.12)",
    stat: "53%",
    statLabel: "of mobile visitors abandon slow sites",
    title: "Your Website Loads Too Slowly",
    body: "A 1-second delay in page load costs up to 7% in conversions. Slow websites are penalized by Google too — meaning fewer people even find you in the first place.",
  },
  {
    icon: PhoneOff,
    color: "from-indigo-700 to-violet-900",
    glow: "rgba(79,70,229,0.12)",
    stat: "68%",
    statLabel: "of businesses lose leads to poor UX",
    title: "Your Website Doesn't Drive Calls",
    body: "A pretty website means nothing if it doesn't convert. Without clear CTAs, mobile click-to-call, and lead forms — your site is just a digital business card nobody uses.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ProblemSection() {
  return (
    <section id="problem" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 radial-glow-purple" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Most Small Business Websites{" "}
            <span className="gradient-text-warm">Are Losing You Money</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            You worked hard to build your business. Your website should work
            just as hard — 24/7 — bringing in calls and customers. Most don&apos;t.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              className="glass glass-hover rounded-2xl p-8 group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, ${p.glow} 0%, transparent 70%)` }}
              />

              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 shadow-lg`}>
                <p.icon size={26} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 relative">{p.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm relative mb-6">{p.body}</p>

              <div className="relative pt-4 border-t border-white/[0.06]">
                <div className={`text-3xl font-black bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>
                  {p.stat}
                </div>
                <div className="text-xs text-white/30 mt-1">{p.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 text-lg mb-6">That&apos;s exactly why we built Cloud Pixel.</p>
          <a href="#contact" className="btn-primary">Fix My Website — Get a Free Quote</a>
        </motion.div>
      </div>
    </section>
  );
}
