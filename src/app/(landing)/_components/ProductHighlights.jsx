"use client";

import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

const highlights = [
  {
    title: "Industrial Salt",
    description: "Bulk Himalayan salt supplied for chemical processing, tanning, and industrial manufacturing.",
  },
  {
    title: "Edible Salt",
    description: "Food-grade Himalayan pink salt available in fine, coarse, and crystal grades.",
  },
  {
    title: "Culinary Salt Products",
    description: "Cooking slabs, salt bowls, and kitchen products used by chefs and hospitality brands.",
  },
  {
    title: "Wellness Salt Products",
    description: "Salt lamps, bath salt, and spa products designed for wellness environments.",
  },
  {
    title: "Salt Tiles & Bricks",
    description: "Natural Himalayan salt blocks used for interior design, spa rooms, and salt walls.",
  },
  {
    title: "Animal Salt Licks",
    description: "Natural mineral salt blocks used for livestock nutrition and agricultural use.",
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ ...smooth, delay: idx * 0.1 }}
              className="group relative flex flex-col p-4 sm:p-8 rounded-2xl border border-white/5 bg-[#121217]/50 backdrop-blur-md z-10 overflow-hidden"
            >
              {/* Internal Card Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CC7778]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

              {/* Numbering + Accent Line */}
              <div className="flex items-center justify-between mb-4 sm:mb-10">
                <span className="text-white/20 font-mono text-base sm:text-xl font-light tracking-widest group-hover:text-[#CC7778]/80 transition-colors duration-500">
                  0{idx + 1}
                </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
