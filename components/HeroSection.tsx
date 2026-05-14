"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";

const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((m) => m.SplineScene),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

function fadeUpProps(i: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.1, duration: 0.65, ease: "easeOut" as const },
  };
}

const trustItems = [
  "No contracts, flat-rate pricing",
  "Delivered in 7–14 days",
  "Built to rank on Google",
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Page-level nebula glow */}
      <div className="absolute inset-0 radial-glow-cyan pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="w-full min-h-[600px] lg:min-h-[680px] bg-black/[0.96] relative overflow-hidden border border-violet-900/30">

          {/* Spotlight sweep */}
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          {/* Inner grid texture */}
          <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

          {/* Purple/blue orb glows */}
          <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-violet-900/20 blur-[100px] pointer-events-none animate-nebula" />
          <div className="absolute -bottom-24 right-0 w-[350px] h-[350px] rounded-full bg-blue-900/20 blur-[80px] pointer-events-none animate-nebula" style={{ animationDelay: "12s" }} />

          <div className="flex flex-col lg:flex-row h-full min-h-[600px] lg:min-h-[680px]">

            {/* ── Left: Copy ─────────────────── */}
            <div className="flex-1 p-8 md:p-12 lg:p-14 relative z-10 flex flex-col justify-center">

              {/* Badge */}
              <motion.div
                {...fadeUpProps(0)}
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 w-fit mb-7"
              >
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-violet-400 fill-violet-400" />
                  ))}
                </div>
                <span className="text-xs text-white/50 tracking-wide">
                  Winter Garden &amp; Central Florida
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUpProps(1)}
                className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-bold leading-[1.08] tracking-tight mb-5"
              >
                <span className="block text-white">Websites That Turn</span>
                <span className="block text-white">Visitors Into</span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)" }}
                >
                  Customers.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                {...fadeUpProps(2)}
                className="text-base sm:text-lg text-white/50 leading-relaxed max-w-[480px] mb-8"
              >
                Cloud Pixel builds clean, fast, and professional websites for
                local businesses in{" "}
                <span className="text-white/80 font-medium">Winter Garden</span>{" "}
                and{" "}
                <span className="text-white/80 font-medium">Central Florida</span>.
                Every pixel is designed to get your phone ringing.
              </motion.p>

              {/* CTAs */}
              <motion.div
                {...fadeUpProps(3)}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <a href="#contact" className="btn-primary text-sm sm:text-base">
                  Get a Free Website Quote
                  <ArrowRight size={17} />
                </a>
                <a href="tel:3219771333" className="btn-secondary text-sm sm:text-base">
                  <Phone size={17} />
                  Call 321-977-1333
                </a>
              </motion.div>

              {/* Trust bullets */}
              <motion.ul
                {...fadeUpProps(4)}
                className="flex flex-col gap-2"
              >
                {trustItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/40">
                    <CheckCircle size={14} className="text-violet-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>

            </div>

            {/* ── Right: Spline 3D ────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="flex-1 relative min-h-[340px] lg:min-h-0"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </Card>

        {/* Below-card floating info strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-white/30"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
            No monthly fees on starter plans
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            100% mobile-first
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
            Local Florida agency
          </span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-white/20 tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-violet-500/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
