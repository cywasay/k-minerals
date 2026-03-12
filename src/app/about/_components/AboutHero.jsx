"use client";

import Image from "next/image";
import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.9 };

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh] bg-[#191619]">
      {/* Background Blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#CC7778]/15 rounded-full blur-[150px] pointer-events-none shrink-0" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#CC7778]/10 rounded-full blur-[120px] pointer-events-none shrink-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={smooth}
            >
              <span className="text-[#CC7778] uppercase tracking-[0.4em] text-xs sm:text-sm font-semibold mb-4 block">
                About Kohistan Minerals
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight mb-6 leading-[0.95]">
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
              className="text-[#a1a1aa] text-lg sm:text-xl font-light leading-relaxed max-w-xl"
            >
              Kohistan Minerals comes from the pristine Kohistan mountains, where
              centuries-old formations create minerals of unmatched purity. We deliver
              these natural treasures to culinary experts, wellness brands,
              agricultural producers, and global industries with quality and
              reliability.
            </motion.p>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...smooth, delay: 0.3, duration: 1.2 }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative w-full aspect-square max-w-[420px] mx-auto">
              {/* Subtle background glow for image */}
              <div className="absolute inset-0 bg-[#CC7778]/20 rounded-full blur-3xl animate-pulse" />
              
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full flex items-center justify-center p-8"
              >
                <Image
                  src="/about-minerals.png"
                  alt="Kohistan Minerals Specimen"
                  width={600}
                  height={600}
                  priority
                  className="object-contain drop-shadow-[0_20px_50px_rgba(204,119,120,0.3)] filter brightness-110"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
