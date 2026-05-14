"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    color: "from-violet-700 to-blue-800",
    glowColor: "rgba(109,40,217,0.18)",
    title: "Visitor Lands on Your Site",
    description:
      "A potential customer searches \"[your service] near me\" and your site appears. In under 3 seconds, their first impression is formed. Does your site say \"professional\" or \"skip\"?",
    visual: "🌐",
  },
  {
    number: "02",
    color: "from-blue-700 to-indigo-800",
    glowColor: "rgba(29,78,216,0.18)",
    title: "Trust Is Built Through Design",
    description:
      "A clean, fast, modern website signals legitimacy. Sharp typography, strong visuals, purposeful layout — your site becomes a 24/7 salesperson that builds confidence without you saying a word.",
    visual: "✨",
  },
  {
    number: "03",
    color: "from-indigo-700 to-violet-800",
    glowColor: "rgba(79,70,229,0.18)",
    title: "They Click Call or Request a Quote",
    description:
      "Strategic CTA placement, click-to-call buttons, and frictionless contact forms make it effortless for the visitor to reach out. No hunting. No confusion. Just conversion.",
    visual: "📱",
  },
  {
    number: "04",
    color: "from-violet-800 to-blue-900",
    glowColor: "rgba(109,40,217,0.18)",
    title: "Your Business Gets More Customers",
    description:
      "More calls. More bookings. More revenue. Month after month, your professionally built website compounds your growth — working while you sleep, while you're on the job, around the clock.",
    visual: "🚀",
  },
];

export function ScrollStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const step1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.22, 0.3], [0, 1, 1, 0]);
  const step1Y = useTransform(scrollYProgress, [0, 0.1, 0.22, 0.3], [40, 0, 0, -40]);
  const step2Opacity = useTransform(scrollYProgress, [0.22, 0.32, 0.47, 0.55], [0, 1, 1, 0]);
  const step2Y = useTransform(scrollYProgress, [0.22, 0.32, 0.47, 0.55], [40, 0, 0, -40]);
  const step3Opacity = useTransform(scrollYProgress, [0.47, 0.57, 0.72, 0.8], [0, 1, 1, 0]);
  const step3Y = useTransform(scrollYProgress, [0.47, 0.57, 0.72, 0.8], [40, 0, 0, -40]);
  const step4Opacity = useTransform(scrollYProgress, [0.72, 0.82, 1.0, 1.0], [0, 1, 1, 1]);
  const step4Y = useTransform(scrollYProgress, [0.72, 0.82, 1.0, 1.0], [40, 0, 0, 0]);

  const stepData = [
    { opacity: step1Opacity, y: step1Y },
    { opacity: step2Opacity, y: step2Y },
    { opacity: step3Opacity, y: step3Y },
    { opacity: step4Opacity, y: step4Y },
  ];

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative" ref={containerRef} style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05001a] to-black" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-2 block">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              From{" "}
              <span className="gradient-text">First Click</span> to{" "}
              <span className="gradient-text">Paying Customer</span>
            </h2>
          </motion.div>

          {/* Progress bar */}
          <div className="relative h-0.5 bg-white/[0.06] rounded-full max-w-sm mx-auto mb-12 overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-600 to-blue-700 rounded-full"
              style={{ width: progressWidth }}
            />
          </div>

          {/* Stacked step cards */}
          <div className="relative h-72 flex items-center justify-center">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                style={{ opacity: stepData[i].opacity, y: stepData[i].y }}
                className="absolute inset-x-0 flex justify-center"
              >
                <div
                  className="glass rounded-3xl p-8 max-w-2xl w-full mx-4 relative overflow-hidden"
                  style={{ boxShadow: `0 0 60px ${step.glowColor}` }}
                >
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${step.glowColor} 0%, transparent 60%)` }}
                  />

                  <div className="relative flex items-start gap-6">
                    <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg text-2xl`}>
                      {step.visual}
                    </div>

                    <div className="flex-1">
                      <span className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent tracking-widest mb-2 block`}>
                        STEP {step.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/40 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step dots */}
          <div className="flex justify-center gap-3 mt-8">
            {steps.map((step) => (
              <div key={step.number} className={`w-2 h-2 rounded-full bg-gradient-to-br ${step.color} opacity-50`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
