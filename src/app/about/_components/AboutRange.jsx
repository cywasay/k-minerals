"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.1 };

const categories = [
  {
    title: "Culinary Salts",
    desc: "Himalayan Pink Salt, Red Salt, White Crystal Salt, and Black Salt, graded for gourmet kitchens.",
    image: "/red-salt.png"
  },
  {
    title: "Wellness Minerals",
    desc: "Bath salts, salt lamps, and spa products designed for relaxation and wellbeing.",
    image: "/bath-salt.png"
  },
  {
    title: "Animal Nutrition",
    desc: "Mineral salt licks that support livestock health, hydration, and productivity.",
    image: "/lick-salt.png"
  },
  {
    title: "Industrial Minerals",
    desc: "Raw and processed salts for manufacturing, chemical processes, and large-scale applications.",
    image: "/hero-salt.png"
  }
];

export default function AboutRange() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#191619] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-[-5%] w-[400px] h-[400px] bg-[#CC7778]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-[#CC7778]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={smooth}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Our Range of <span className="text-[#CC7778]">Exceptional Minerals</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg font-light leading-relaxed">
            At Kohistan Minerals, we transform nature’s finest minerals into products that meet the needs of chefs, wellness experts, agricultural producers, and industrial clients worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ ...smooth, delay: idx * 0.1 }}
              className="bg-[#111114] border border-white/5 p-6 rounded-2xl group hover:border-[#CC7778]/30 transition-all duration-500"
            >
              <div className="relative w-full h-32 mb-6 flex items-center justify-center">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={130}
                  height={130}
                  className="object-contain group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-[#CC7778] transition-colors">
                {cat.title}
              </h3>
              <p className="text-[#a1a1aa] text-sm font-light leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button>Explore Our Full Range</Button>
        </div>
      </div>
    </section>
  );
}
