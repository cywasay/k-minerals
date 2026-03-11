"use client";

import Image from "next/image";
import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

export default function Intro() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Background soft glow — opacity only */}
      <div className="absolute inset-0 z-0 flex justify-end items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-[#e66c19]/10 rounded-full blur-[100px] sm:blur-[140px] translate-x-1/4 will-change-[opacity]"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-6 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Left Side: Text Content — single parent animation drives children */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ ...smooth }}
          className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 justify-center will-change-transform"
        >
          <div className="flex items-center gap-2">
            <span className="text-white opacity-50 text-lg sm:text-xl md:text-2xl font-light tracking-widest font-mono">
              #01
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-white opacity-50" />
            <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-wide uppercase">
              Asteroid Echoes
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ ...smooth, delay: 0.15 }}
            className="text-[#a1a1aa] text-sm sm:text-base leading-[1.5] sm:leading-[1.4] font-light max-w-lg will-change-transform"
          >
            Worn by millennia of interstellar travel, each asteroid carries
            silent stories etched into its surface. In the shifting textures and
            jagged edges, one can trace cosmic collisions and eons of
            cosmic drift. The stones remain steadfast witnesses to the
            celestial tides, glowing softly with the memory of fiery births
            and violent expansions.
          </motion.p>
        </motion.div>

        {/* Right Side: Image — translate + opacity only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ ...smooth, duration: 1, delay: 0.1 }}
          className="w-full md:w-1/2 will-change-transform"
        >
           <div className="relative w-full h-[250px] sm:h-[350px] md:w-150 md:h-150 mx-auto">
             <Image 
               src="/red-salt.png"
               alt="Asteroid Specimen"
               fill
               className="object-contain object-center md:object-right drop-shadow-2xl scale-100 sm:scale-110 md:scale-125 lg:scale-[1.35]"
               priority
             />
           </div>
        </motion.div>

      </div>
    </section>
  );
}
