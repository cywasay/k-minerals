"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const rareMinerals = [
  {
    title: "Gold",
    desc: "Exceptional 99.99% purity gold sourced from high-yield mining tracts for global markets.",
    image: "/rare-earth-pngs/gold.png",
    slug: "gold"
  },
  {
    title: "Silver",
    desc: "Refined high-conductivity silver, meticulously processed for industrial and precious uses.",
    image: "/rare-earth-pngs/silver.png",
    slug: "silver"
  },
  {
    title: "Copper",
    desc: "High-grade copper ore essential for global electrical infrastructure and modern manufacturing.",
    image: "/rare-earth-pngs/copper.png",
    slug: "copper"
  },
  {
    title: "Iron",
    desc: "Industry-leading 65% yield iron ore, the backbone of structural growth and heavy industry.",
    image: "/rare-earth-pngs/iron.png",
    slug: "iron"
  },
  {
    title: "Antimony",
    desc: "A vital strategic mineral for advanced batteries, microelectronics, and flame retardants.",
    image: "/rare-earth-pngs/antimony.png",
    slug: "antimony"
  }
];

export default function RareEarthMinerals() {
  return (
    <section className="bg-[#191619] pb-16 sm:pb-20 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col items-center mb-10 sm:mb-14 text-center">
             <div className="flex items-center gap-4 mb-3">
                <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
                <span className="text-[#CC7778] uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold">
                  Strategic Assets
                </span>
                <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
              </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold uppercase tracking-tight">
              Rare Earth & Strategic Minerals
            </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:grid-cols-5 lg:gap-10">
          {rareMinerals.map((item, idx) => {
            const CardContent = (
              <motion.div
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
                  className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] mb-4 sm:mb-6"
                >
                  {/* Under-glow effect */}
                  <div className="absolute inset-x-0 bottom-[10%] h-[40%] bg-[#CC7778]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <Image
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] brightness-90 group-hover:brightness-100 transition-all duration-500 relative z-10"
                  />
                </motion.div>
                <div className="w-full flex flex-col text-center">
                  <h3 className="text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2 font-bold uppercase tracking-wider font-sans group-hover:text-[#CC7778] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white opacity-60 text-[11px] sm:text-xs md:text-[13px] leading-[1.5] font-light group-hover:opacity-90 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );

            return item.slug ? (
              <Link key={idx} href={`/products/${item.slug}`} className="block">
                {CardContent}
              </Link>
            ) : (
              <div key={idx} className="block">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
