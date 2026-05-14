"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Gonzalez",
    business: "Bloom Beauty Salon",
    location: "Winter Garden, FL",
    initials: "MG",
    color: "from-violet-700 to-blue-800",
    rating: 5,
    text: "Cloud Pixel completely transformed my online presence. Within the first month of launching my new site, I had 3x more appointment bookings than before. The online booking system alone was worth every penny.",
  },
  {
    name: "James Walker",
    business: "Walker HVAC Solutions",
    location: "Ocoee, FL",
    initials: "JW",
    color: "from-blue-700 to-indigo-800",
    rating: 5,
    text: "I was losing business to competitors who had better websites. After Cloud Pixel built mine, I started getting calls from the site within the first week. The click-to-call button has been a game-changer.",
  },
  {
    name: "Sofia Reyes",
    business: "Savory Bites Catering",
    location: "Clermont, FL",
    initials: "SR",
    color: "from-indigo-700 to-violet-800",
    rating: 5,
    text: "I told them my budget and what I wanted, and they delivered beyond my expectations. The website looks like something a big company would have, not a small catering business. I've already referred two friends.",
  },
  {
    name: "Derek Thompson",
    business: "CrispCuts Barbershop",
    location: "Windermere, FL",
    initials: "DT",
    color: "from-violet-800 to-blue-900",
    rating: 5,
    text: "The booking system they set up saves me hours every week. No more back-and-forth texts to schedule appointments. The website also ranked me on Google within 60 days. Highly recommend.",
  },
  {
    name: "Angela Moreno",
    business: "Sparkling Clean LLC",
    location: "Winter Garden, FL",
    initials: "AM",
    color: "from-blue-800 to-violet-900",
    rating: 5,
    text: "I had no website at all before Cloud Pixel. Now I rank locally for cleaning services in my area and get 5-10 quote requests per week through the website. The investment has paid for itself many times over.",
  },
  {
    name: "Carlos Rivera",
    business: "Rivera Electrical Services",
    location: "Orlando, FL",
    initials: "CR",
    color: "from-indigo-800 to-blue-800",
    rating: 5,
    text: "Quick, professional, and they stayed within budget. The emergency service CTA they added to my homepage is the first thing customers see — and it works. My phone has been busier than ever since the new site went live.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 radial-glow-cyan opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3 block">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real Results for{" "}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-white/40 text-lg">
            Local business owners across Central Florida trust Cloud Pixel to
            build their digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="glass glass-hover rounded-2xl p-6 flex flex-col relative group"
            >
              <Quote
                size={32}
                className="absolute top-5 right-5 text-white/[0.04] group-hover:text-white/[0.07] transition-colors"
              />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={13} className="text-violet-400/80 fill-violet-400/80" />
                ))}
              </div>

              <p className="text-white/45 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.business} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
