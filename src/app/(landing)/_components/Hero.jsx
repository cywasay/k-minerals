"use client";

import Image from "next/image";
import { motion } from "motion/react";

// GPU-only spring config — no layout thrashing
const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.9 };

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[85vh] sm:min-h-[90vh]">
      {/* Background Ambient Blobs — opacity-only animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-[10%] right-[5%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#CC7778]/50 rounded-full mix-blend-screen filter blur-[60px] sm:blur-[80px] md:blur-[140px] pointer-events-none z-0 translate-x-1/4 -translate-y-1/4 will-change-[opacity]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.15 }}
        className="absolute bottom-[5%] left-[5%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#CC7778]/50 rounded-full mix-blend-screen filter blur-[60px] sm:blur-[80px] md:blur-[140px] pointer-events-none z-0 -translate-x-1/4 translate-y-1/4 will-change-[opacity]"
      />

      {/* Hero Rock Image (Left side) — translate + opacity only */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-center max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...smooth, duration: 1, delay: 0.1 }}
          className="relative w-full sm:w-[90%] md:w-[60%] lg:w-[60%] h-[70vh] sm:h-[85vh] md:h-[90vh] lg:h-[95vh] -ml-4 sm:-ml-2 md:-ml-12 lg:-ml-20 mt-16 sm:mt-20 md:mt-0 opacity-15 sm:opacity-20 md:opacity-100 flex items-center justify-center will-change-transform"
        >
          <Image
            src="/hero-salt.png"
            alt="Glowing Mineral Rock"
            fill
            className="object-contain object-center sm:object-left md:object-center drop-shadow-2xl scale-[100%] sm:scale-[110%] md:scale-[115%] lg:scale-[125%]"
            priority
          />
        </motion.div>
      </div>

      {/* Container for Typography */}
      <div className="flex flex-col w-full relative z-10">
        {/* Top Text: KOHISTAN — translate + opacity only */}
        <div className="w-full flex max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="md:w-[55%] md:ml-auto w-full flex justify-center md:justify-start overflow-hidden">
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

        {/* Bottom Text + Pink Strip: MINERALS — opacity only on strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="w-full bg-[#CC7778] flex flex-col relative z-20 border-y border-[#CC7778]/80 shadow-2xl will-change-[opacity]"
        >
          <div className="w-full flex max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="md:w-[55%] md:ml-auto w-full flex justify-center md:justify-start overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smooth, delay: 0.7 }}
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
              className="text-base sm:text-lg text-slate-300 tracking-wide leading-relaxed font-light mb-4 drop-shadow-sm will-change-transform"
            >
              Each glowing specimen captures the raw energy of cosmic creation,
              illuminating the dark with an otherworldly brilliance. Experience
              their radiant beauty and feel the pulse of the universe in your
              hands.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
