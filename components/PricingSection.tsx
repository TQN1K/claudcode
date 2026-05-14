"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    tagline: "Perfect for getting online fast",
    price: "Starting at",
    priceValue: "$799",
    color: "from-blue-800 to-indigo-900",
    accent: "#3b82f6",
    borderColor: "border-blue-900/40",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Click-to-call button",
      "Google Maps integration",
      "Basic SEO setup",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    cta: "Request Pricing",
    popular: false,
  },
  {
    name: "Business Website",
    tagline: "The lead-generating powerhouse",
    price: "Starting at",
    priceValue: "$1,499",
    color: "from-violet-700 to-blue-700",
    accent: "#7c3aed",
    borderColor: "border-violet-700/50",
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "Lead gen forms + CRM integration",
      "Booking/appointment system",
      "Local SEO optimization",
      "Google Business Profile setup",
      "Speed optimization",
      "Analytics setup",
      "3 months of support",
    ],
    cta: "Request Pricing",
    popular: true,
  },
  {
    name: "Growth Website",
    tagline: "Full digital presence package",
    price: "Starting at",
    priceValue: "$2,499",
    color: "from-indigo-700 to-violet-900",
    accent: "#4f46e5",
    borderColor: "border-indigo-800/40",
    features: [
      "Unlimited pages",
      "Custom animations & scroll effects",
      "Advanced SEO + blog setup",
      "E-commerce or online payments",
      "Email marketing integration",
      "Review generation system",
      "Monthly maintenance plan",
      "Priority support",
      "Quarterly strategy calls",
    ],
    cta: "Request Pricing",
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 radial-glow-purple" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-700/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Transparent Pricing,{" "}
            <span className="gradient-text">No Surprises</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            Every package is a flat-rate investment in your business growth.
            No hidden fees, no monthly subscriptions unless you want support.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-2xl border ${plan.borderColor} flex flex-col overflow-hidden ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              style={{
                background: plan.popular
                  ? "rgba(10, 0, 35, 0.95)"
                  : "rgba(5, 0, 20, 0.7)",
                backdropFilter: "blur(20px)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${plan.accent}, transparent)` }}
                />
              )}

              {plan.popular && (
                <div className="absolute top-5 right-5">
                  <span
                    className="flex items-center gap-1 text-xs font-bold text-white px-3 py-1.5 rounded-full shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${plan.accent}, #1d4ed8)` }}
                  >
                    <Sparkles size={10} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/35">{plan.tagline}</p>
                </div>

                <div className="mb-7">
                  <div className="text-xs text-white/30 mb-1">{plan.price}</div>
                  <div
                    className={`text-4xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                  >
                    {plan.priceValue}
                  </div>
                  <div className="text-xs text-white/20 mt-1">one-time investment</div>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <div
                        className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${plan.accent}20` }}
                      >
                        <Check size={10} style={{ color: plan.accent }} />
                      </div>
                      <span className="text-white/60">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-white/25 text-sm mt-10"
        >
          All prices are starting points. Final quote depends on your specific needs.{" "}
          <a href="#contact" className="text-violet-400 hover:text-violet-300 transition-colors">
            Contact us for a custom quote →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
