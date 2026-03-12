"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.1 };

const categories = [
  {
    title: "Culinary Salts",
    desc: "Himalayan Pink Salt, Red Salt, White Crystal Salt, and Black Salt, carefully graded for gourmet kitchens and fine dining.",
    image: "/culinary.png"
  },
  {
    title: "Wellness Minerals",
    desc: "Premium bath salts, natural salt lamps, and detoxifying spa products designed for ultimate relaxation and wellbeing.",
    image: "/wellness.png"
  },
  {
    title: "Animal Nutrition",
    desc: "Mineral-rich salt licks that naturally support livestock health, optimal hydration, and overall animal productivity.",
    image: "/lick-salt.png"
  },
  {
    title: "Industrial Minerals",
    desc: "Raw and processed specialized salts tailored for manufacturing, chemical processes, and large-scale industrial use.",
    image: "/hero-salt.png"
  }
];

export default function AboutRange() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#191619] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#CC7778]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#CC7778]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={vp}
           transition={smooth}
           className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#CC7778]" />
            <span className="text-[#CC7778] uppercase tracking-[0.3em] text-xs font-bold">Product Categories</span>
            <span className="h-[1px] w-8 bg-[#CC7778]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
            Our Exceptional <br className="hidden sm:block"/> <span className="text-[#CC7778]">Minerals Range</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg md:text-xl font-light leading-relaxed">
            At Kohistan Minerals, we transform nature’s finest minerals into specialized products that meet the highest standards of chefs, wellness experts, and industrial clients worldwide.
          </p>
        </motion.div>

        {/* Holographic Layout (Contained contained) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ ...smooth, delay: idx * 0.1 }}
              className="group relative flex flex-col h-full bg-gradient-to-b from-white/[0.03] to-[#08080a] border border-white/5 rounded-[2rem] p-6 sm:p-8 text-center transition-all duration-700 overflow-hidden hover:border-[#CC7778]/40 hover:shadow-[0_20px_50px_rgba(204,119,120,0.08)]"
            >

              {/* Holographic Projection Base */}
              <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#CC7778]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0" />


              {/* Contained Floating Mineral Specimen */}
              <div className="relative z-20 w-full h-[180px] sm:h-[200px] flex items-center justify-center mb-8 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-4 group-hover:scale-[1.15]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)] brightness-[0.9] group-hover:brightness-110 transition-all duration-1000 group-hover:rotate-[4deg]"
                />
              </div>

              {/* Content Area */}
              <div className="relative z-10 flex flex-col flex-grow w-full transform group-hover:-translate-y-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] mt-auto border-t border-white/5 pt-6 group-hover:border-[#CC7778]/30">
                <h3 className="text-lg xl:text-xl font-bold text-white mb-3 uppercase tracking-wider group-hover:text-[#CC7778] transition-colors duration-500">
                  {cat.title}
                </h3>
                <p className="text-[#a1a1aa] text-xs xl:text-sm font-light leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="!px-10 !py-4 !text-sm">Explore Our Full Range</Button>
        </div>
      </div>
    </section>
  );
}
