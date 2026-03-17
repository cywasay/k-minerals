"use client";

import Image from "next/image";
import { motion } from "motion/react";

// GPU-only spring config — no layout thrashing
const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.9 };

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col justify-center min-h-screen">
      {/* Background Ambient Blobs */}
      <div className="absolute top-[10%] right-[5%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#CC7778]/40 rounded-full blur-[60px] sm:blur-[80px] md:blur-[140px] pointer-events-none z-0 translate-x-1/4 -translate-y-1/4 opacity-50" />
      <div className="absolute bottom-[5%] left-[5%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#CC7778]/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[140px] pointer-events-none z-0 -translate-x-1/4 translate-y-1/4 opacity-30" />

      {/* Hero Rock Image (Left side) — translate + opacity only */}
      <div className="absolute inset-0 z-30 pointer-events-none hidden md:flex items-center max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...smooth, duration: 1.4, delay: 0.9 }}
          className="relative w-full md:w-[60%] lg:w-[60%] h-[85vh] lg:h-[90vh] -ml-12 lg:-ml-20 mt-0 flex items-center justify-center will-change-[transform,opacity]"
        >
          <Image
            src="/hero-salt.png"
            alt="Glowing Mineral Rock"
            fill
            className="object-contain object-center drop-shadow-2xl scale-[115%] lg:scale-[125%]"
            priority
          />
        </motion.div>
      </div>

      {/* Container for Typography */}
      <div className="flex flex-col w-full relative z-10">
        {/* Top Text: KOHISTAN — translate + opacity only */}
        <div className="w-full flex max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="md:w-[55%] md:ml-auto w-full flex flex-col items-center md:items-start pt-2 sm:pt-0">
            <div className="overflow-hidden w-full flex justify-center md:justify-start">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smooth, delay: 0.35 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none uppercase text-white -mb-[0.05em] relative z-20 drop-shadow-md will-change-transform"
              >
                Kohistan
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Bottom Text + Pink Strip: MINERALS — animated scale expansion */}
        <motion.div
          initial={{ scaleX: 0, originX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full bg-[#CC7778] flex flex-col relative z-20 border-y border-[#CC7778]/80 shadow-2xl will-change-[transform,opacity]"
        >
          <div className="w-full flex max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="md:w-[55%] md:ml-auto w-full flex justify-center md:justify-start overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smooth, delay: 1.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none uppercase text-[#191619] pt-1 relative z-20 will-change-transform"
              >
                Minerals
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtext — translate + opacity only */}
      <div className="w-full flex max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8 text-center md:text-left relative z-20">
        <div className="md:w-[55%] md:ml-auto w-full flex justify-center md:justify-start">
          <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto md:mx-0">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smooth, delay: 0.9 }}
              className="text-base sm:text-lg text-slate-300 tracking-wide leading-relaxed font-light"
            >
              Minerals sourced from the mountains of Kohistan, where ancient
              geological formations hold some of the region’s most valuable
              natural resources. Carefully extracted and prepared to support
              industries, global supply chains, and commercial applications
              worldwide.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
