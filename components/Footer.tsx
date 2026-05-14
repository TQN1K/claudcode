"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Custom Websites", href: "#services" },
    { label: "Landing Pages", href: "#services" },
    { label: "Website Redesigns", href: "#services" },
    { label: "Booking Systems", href: "#services" },
    { label: "Local SEO Setup", href: "#services" },
    { label: "Mobile Optimization", href: "#services" },
  ],
  Company: [
    { label: "Why Cloud Pixel", href: "#why-us" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-[#020810]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Cloud Pixel"
                width={130}
                height={46}
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Web development agency serving Winter Garden and Central Florida.
              We build websites that generate real leads for local businesses.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="tel:3219771333"
                className="flex items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors"
              >
                <Phone size={13} />
                321-977-1333
              </a>
              <a
                href="mailto:abou99822@gmail.com"
                className="flex items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors"
              >
                <Mail size={13} />
                abou99822@gmail.com
              </a>
              <span className="flex items-center gap-2 text-slate-600">
                <MapPin size={13} />
                Winter Garden, Florida
              </span>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA block */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Ready to Start?
            </h4>
            <p className="text-slate-500 text-sm mb-5 leading-relaxed">
              Get a free quote for your website project today.
            </p>
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5 w-full justify-center">
              Get Free Quote
            </a>
            <a
              href="tel:3219771333"
              className="btn-secondary text-sm py-2.5 px-5 w-full justify-center mt-3"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {year} Cloud Pixel. All rights reserved. · Winter Garden, FL
          </p>
          <p className="text-slate-700 text-xs">
            Built with ♡ for Central Florida businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
