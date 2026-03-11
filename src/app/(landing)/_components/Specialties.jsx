"use client";

import Image from "next/image";
import { motion } from "motion/react";

const specialties = [
  {
    title: "Raw Mining",
    desc: "A blazing core with star-like glimmers."
  },
  {
    title: "Edible Salts",
    desc: "Forged in ancient seas and pristine deposits."
  },
  {
    title: "Lifestyle & Wellness",
    desc: "Radiates a soothing, restorative energy."
  },
  {
    title: "Architectural",
    desc: "Structurally robust with timeless aesthetics."
  },
  {
    title: "Animal Nutrition",
    desc: "Vital minerals to sustain natural ecosystems."
  }
];

export default function Specialties() {
  return (
    <section className="bg-[#040610] opacity-80 py-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:grid-cols-5 lg:gap-8">
          {specialties.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: idx * 0.08,
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[240px] mb-4 sm:mb-6"
              >
                {/* Subtle under-glow effect on hover */}
                <div className="absolute inset-x-0 bottom-[10%] h-[40%] bg-[#e66c19]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <Image
                  src="/red-salt.png" 
                  alt={item.title}
                  fill
                  className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] brightness-90 relative z-10"
                />
              </motion.div>
              <div className="w-full flex flex-col text-center">
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 font-bold uppercase tracking-wider font-sans">
                  {item.title}
                </h3>
                <p className="text-white opacity-60 text-[11px] sm:text-xs md:text-[13px] leading-[1.5] font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
