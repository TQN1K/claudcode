"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  websiteType: string;
  message: string;
};

const websiteTypes = [
  "Custom Business Website",
  "Landing Page",
  "Website Redesign",
  "Booking / Appointment Site",
  "E-commerce Store",
  "Other / Not Sure",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "", businessName: "", phone: "", email: "", websiteType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-violet-900/30 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-600/60 focus:bg-white/[0.06] transition-all duration-200";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 radial-glow-cyan opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3 block">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s Build Your{" "}
              <span className="gradient-text">Dream Website</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              Fill out the form and we&apos;ll get back to you within 24 hours with a
              custom quote. Or call us directly — we love talking to local businesses.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, label: "Phone", value: "321-977-1333", href: "tel:3219771333", color: "from-violet-700 to-blue-800" },
                { icon: Mail, label: "Email", value: "abou99822@gmail.com", href: "mailto:abou99822@gmail.com", color: "from-blue-700 to-indigo-800" },
                { icon: MapPin, label: "Location", value: "Winter Garden, Florida", href: null, color: "from-indigo-700 to-violet-800" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 flex items-center gap-4 border border-violet-900/20">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-md`}>
                    <item.icon size={17} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/25 mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-violet-400 transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 glass rounded-xl p-4 border border-violet-900/20">
              <p className="text-white/35 text-sm leading-relaxed">
                <span className="text-white/70 font-medium">Response time:</span>{" "}
                We respond to all inquiries within{" "}
                <span className="text-violet-400 font-medium">1 business day</span>.
                Prefer a quick call? Mon–Fri, 9am–6pm EST.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 text-center border border-violet-900/30"
              >
                <CheckCircle size={56} className="text-violet-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
                <p className="text-white/40 leading-relaxed">
                  Thanks, {formData.name}! We&apos;ll review your request and get back to
                  you within 1 business day with a custom quote.
                </p>
                <div className="mt-6 pt-6 border-t border-white/[0.05]">
                  <p className="text-white/25 text-sm mb-3">Need to talk now?</p>
                  <a href="tel:3219771333" className="btn-primary">
                    <Phone size={16} /> Call 321-977-1333
                  </a>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-7 flex flex-col gap-5 border border-violet-900/25"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Your Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Business Name *</label>
                    <input type="text" name="businessName" required value={formData.businessName} onChange={handleChange} placeholder="Your Business" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Phone *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(407) 555-0100" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Website Needed</label>
                  <select
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ color: formData.websiteType ? "#fff" : "rgba(255,255,255,0.2)" }}
                  >
                    <option value="" disabled className="bg-[#050010]">Select a website type...</option>
                    {websiteTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#0a0020] text-white">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Tell Us About Your Project</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, what you need, and any details that will help us give you an accurate quote..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <><Send size={17} />Send My Request</>
                  )}
                </button>

                <p className="text-center text-xs text-white/20">
                  No spam. We&apos;ll only use your info to respond to your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
