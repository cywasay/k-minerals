"use client";

import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.9 };

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center min-h-[50vh] bg-[#191619]">
      {/* Background Blobs */}
      <div className="absolute top-[-15%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CC7778]/30 rounded-full blur-[120px] pointer-events-none opacity-50 shrink-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CC7778]/20 rounded-full blur-[120px] pointer-events-none opacity-40 shrink-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smooth}
          >
            <span className="text-[#CC7778] uppercase tracking-[0.4em] text-xs sm:text-sm font-semibold mb-6 block">
              About Kohistan Minerals
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight mb-8 leading-[0.9]">
              From the Peaks of Kohistan to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CC7778]/80">
                Global Excellence
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smooth, delay: 0.2 }}
            className="text-[#a1a1aa] text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl"
          >
            Kohistan Minerals comes from the pristine Kohistan mountains, where
            centuries-old formations create minerals of unmatched purity. We deliver
            these natural treasures to culinary experts, wellness brands,
            agricultural producers, and global industries with quality and
            reliability.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
