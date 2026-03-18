"use client";

import Image from "next/image";
import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.9 };

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[70vh] md:min-h-[85vh]">
      {/* Background Image Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about us banner.webp"
          alt="Kohistan Mountains"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-[#191619]/70" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #191619 20%, transparent 60%, transparent 80%, #191619 100%), linear-gradient(to bottom, #191619 0%, transparent 20%, transparent 80%, #191619 100%)"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="w-full lg:w-3/5 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={smooth}
          >
            <span className="text-[#CC7778] uppercase tracking-[0.4em] text-xs sm:text-sm font-semibold mb-4 block">
              About Kohistan Minerals
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight mb-6 leading-[0.95] uppercase">
              From the Peaks of Kohistan to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CC7778]/80">
                Global Excellence
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smooth, delay: 0.2 }}
            className="text-slate-200 text-lg sm:text-xl font-light leading-relaxed max-w-xl"
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
