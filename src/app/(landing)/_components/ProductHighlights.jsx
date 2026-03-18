"use client";

import { motion } from "motion/react";
import Link from "next/link";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

// Icon Components
const FactoryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2v18Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
);

const UtensilsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
);

const ChefHatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.8a4.41 4.41 0 1 1 2-8.7 5 5 0 1 1 8 0 4.41 4.41 0 1 1 2 8.7V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/><path d="M6 17h12"/></svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

const LayoutGridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
);

const PawPrintIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><circle cx="9" cy="16" r="2"/><path d="M9 16c-1.1 0-2 .9-2 2 0 1.2.9 2.1 2.1 2.2a21 21 0 0 1 4.7 0c1.2 0 2.2-.9 2.2-2.1 0-1.1-.9-2.1-2.1-2.1H9Z"/></svg>
);

const highlights = [
  {
    title: "Industrial Salt",
    description: "Bulk Himalayan salt supplied for chemical processing, tanning, and industrial manufacturing.",
    icon: <FactoryIcon />,
    slug: "industrial-salt"
  },
  {
    title: "Edible Pink Salt",
    description: "Food-grade Himalayan pink salt available in fine, coarse, and crystal grades.",
    icon: <UtensilsIcon />,
    slug: "edible-pink-salt"
  },
  {
    title: "Bath & Wellness",
    description: "Salt lamps, bath salt, and spa products designed for wellness environments.",
    icon: <SparklesIcon />,
    slug: "bath-and-wellness"
  },
  {
    title: "Animal Salt Licks",
    description: "Natural mineral salt blocks used for livestock nutrition and agricultural use.",
    icon: <PawPrintIcon />,
    slug: "animal-salt-licks"
  },
  {
    title: "Bulk Minerals",
    description: "High-purity minerals sourced naturally to meet industrial and agricultural needs.",
    icon: <LayoutGridIcon />,
    slug: "bulk-minerals"
  },
];

export default function ProductHighlights() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center">
      {/* Subtle Abstract Background Glows */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CC7778]/30 rounded-full blur-[120px] md:blur-[180px] pointer-events-none -z-10 opacity-15"
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CC7778]/20 rounded-full blur-[120px] md:blur-[180px] pointer-events-none -z-10 opacity-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ ...smooth }}
          className="text-center mb-10 md:mb-14 flex flex-col items-center gap-2 sm:gap-3"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
            <span className="text-[#CC7778] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
              Capabilities
            </span>
            <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold uppercase tracking-tight">
            Product Highlights
          </h2>
        </motion.div>

        {/* Premium Dark Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-6xl">
          {highlights.map((item, idx) => (
            <Link key={idx} href={`/products/${item.slug}`} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ ...smooth, delay: idx * 0.1 }}
                className="group relative flex flex-col h-full p-4 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md z-10 overflow-hidden cursor-pointer hover:border-[#CC7778]/30 transition-all duration-500"
              >
                {/* Internal Card Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CC7778]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                {/* Icon + Accent Line */}
                <div className="flex items-center justify-between mb-4 sm:mb-10">
                  <div className="text-white/40 group-hover:text-[#CC7778] transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div className="h-[1px] w-8 sm:w-12 bg-white/10 group-hover:bg-[#CC7778]/40 transition-colors duration-500" />
                </div>

                {/* Text Area */}
                <div className="mt-auto">
                  <h3 className="text-sm sm:text-lg md:text-xl text-white font-semibold uppercase tracking-wider mb-1 sm:mb-2 group-hover:-translate-y-1 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-[#a1a1aa] font-light text-[10px] sm:text-sm leading-tight sm:leading-[1.6] group-hover:text-white/90 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
