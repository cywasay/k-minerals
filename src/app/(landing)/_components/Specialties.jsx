"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const specialties = [
  {
    title: "Kohistan Pink Salt",
    desc: "Premium Himalayan pink salt for culinary and wellness uses, naturally rich in minerals.",
    image: "/pink-salt.png",
    slug: "edible-pink-salt"
  },
  {
    title: "Red Salt",
    desc: "Mineral-rich Himalayan salt ideal for cooking, spa, and wellness applications.",
    image: "/red-salt-crystal.png",
    slug: null
  },
  {
    title: "White Crystal Salt",
    desc: "Pure, versatile salt suitable for culinary, decorative, and industrial purposes.",
    image: "/white-salt.png",
    slug: "industrial-salt"
  },
  {
    title: "Black Salt",
    desc: "Specialty salt for gourmet cooking, health-focused recipes, and wellness products.",
    image: "/black-salt.png",
    slug: null
  },
  {
    title: "Animal Salt Licks",
    desc: "Natural mineral salt blocks for livestock nutrition and agricultural use.",
    image: "/lick-salt.png",
    slug: "animal-salt-licks"
  },
  {
    title: "Bath & Wellness Salts",
    desc: "Salt lamps, bath salts, and spa products designed for relaxation and wellness environments.",
    image: "/bath-salt.png",
    slug: "bath-and-wellness"
  }
];

export default function Specialties() {
  return (
    <section className="bg-[#191619] py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:grid-cols-3 lg:gap-14">
          {specialties.map((item, idx) => {
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
                  className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[240px] mb-4 sm:mb-6"
                >
                  {/* Subtle under-glow effect on hover */}
                  <div className="absolute inset-x-0 bottom-[10%] h-[40%] bg-[#CC7778]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <Image
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] brightness-90 relative z-10"
                  />
                </motion.div>
                <div className="w-full flex flex-col text-center">
                  <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 font-bold uppercase tracking-wider font-sans group-hover:text-[#CC7778] transition-colors duration-300">
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
