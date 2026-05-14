"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    industry: "Barber Shop",
    name: "The Sharp Edge",
    location: "Winter Garden, FL",
    accent: "#7c3aed",
    accentDim: "#3b0764",
    tagline: "Premium Cuts, Online Booking",
    tags: ["Booking System", "Gallery", "Local SEO"],
    icon: "✂️",
  },
  {
    industry: "Beauty Salon",
    name: "Luxe Beauty Studio",
    location: "Windermere, FL",
    accent: "#4f46e5",
    accentDim: "#1e1b4b",
    tagline: "Book Your Glow-Up Online",
    tags: ["Appointment Booking", "Services Menu", "Reviews"],
    icon: "💅",
  },
  {
    industry: "Restaurant",
    name: "Savory Oak Grill",
    location: "Orlando, FL",
    accent: "#3b82f6",
    accentDim: "#1e3a5f",
    tagline: "Reserve Your Table Tonight",
    tags: ["Online Menu", "Reservations", "Food Gallery"],
    icon: "🍽️",
  },
  {
    industry: "Cleaning Company",
    name: "Crystal Clean Pro",
    location: "Ocoee, FL",
    accent: "#6d28d9",
    accentDim: "#2e1065",
    tagline: "Instant Online Quotes",
    tags: ["Quote Form", "Testimonials", "Service Areas"],
    icon: "🧹",
  },
  {
    industry: "HVAC & Plumbing",
    name: "CoolFlow Services",
    location: "Clermont, FL",
    accent: "#1d4ed8",
    accentDim: "#1e3a8a",
    tagline: "24/7 Emergency Service",
    tags: ["Emergency CTA", "Service Finder", "Reviews"],
    icon: "🔧",
  },
  {
    industry: "Wedding & Events",
    name: "Golden Vow Events",
    location: "Winter Garden, FL",
    accent: "#5b21b6",
    accentDim: "#2e1065",
    tagline: "Your Perfect Day Starts Here",
    tags: ["Portfolio Gallery", "Inquiry Form", "Packages"],
    icon: "💍",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function MockupBrowser({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl">
      {/* Browser chrome */}
      <div className="bg-[#0a0015] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-violet-700/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-700/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-700/60" />
        </div>
        <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-[10px] text-white/25 font-mono truncate">
          cloudpixel.dev/{project.industry.toLowerCase().replace(/\s+/g, "-")}
        </div>
      </div>

      {/* Mockup content */}
      <div
        className="h-44 relative flex flex-col items-start justify-end p-4 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accentDim}, #000)` }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-30"
          style={{ background: project.accent }}
        />
        {/* Icon */}
        <div className="absolute top-4 right-4 text-4xl opacity-20">{project.icon}</div>

        {/* Nav mockup */}
        <div className="absolute top-3 left-4 right-12 flex items-center justify-between">
          <div className="w-16 h-2 rounded-full bg-white/20" />
          <div className="flex gap-2">
            {[1, 2, 3].map((d) => (
              <div key={d} className="w-6 h-1.5 rounded-full bg-white/15" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mb-2">
          <div className="w-32 h-3 rounded-full mb-2" style={{ background: project.accent }} />
          <div className="w-44 h-1.5 rounded-full bg-white/20 mb-1" />
          <div className="w-36 h-1.5 rounded-full bg-white/15" />
        </div>

        <div
          className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white"
          style={{ background: project.accent }}
        >
          {project.tagline}
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
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
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Websites Built for{" "}
            <span className="gradient-text">Local Florida Businesses</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            We know the Central Florida market. Every site we build is crafted
            to attract and convert your specific local customers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              className="glass glass-hover rounded-2xl overflow-hidden group"
            >
              <MockupBrowser project={project} />

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest mb-1 block"
                      style={{ color: project.accent }}
                    >
                      {project.industry}
                    </span>
                    <h3 className="text-base font-bold text-white">{project.name}</h3>
                    <p className="text-xs text-white/30">{project.location}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={15} className="text-white/30" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${project.accent}15`,
                        color: project.accent,
                        border: `1px solid ${project.accent}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 mb-5">Ready to see your business here?</p>
          <a href="#contact" className="btn-primary">Get My Website Built</a>
        </motion.div>
      </div>
    </section>
  );
}
