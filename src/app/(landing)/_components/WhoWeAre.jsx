"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.3 };

const commitments = [
  {
    title: "Premium Quality",
    desc: "Every product meets rigorous standards.",
  },
  {
    title: "Sustainable Practices",
    desc: "Ethical sourcing and environmental care.",
  },
  {
    title: "Global Reach",
    desc: "Reliable supply chains worldwide.",
  },
  {
    title: "Innovation",
    desc: "Minerals for diverse applications.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-visible z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center">
      {/* Abstract Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#CC7778]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 w-full flex flex-col lg:flex-row gap-10 lg:gap-8 items-center">
        
        {/* Left Side: Text and Commitments */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ ...smooth }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
            <span className="text-[#CC7778] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
              Who We Are
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight tracking-tight mb-4">
            Shaping the World with <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CC7778]/80">
              Pure Himalayan Minerals
            </span>
          </h2>

          <p className="text-[#a1a1aa] font-light text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            Rooted in Pakistan’s rich mineral heritage, Kohistan Minerals supplies
            Himalayan salts and minerals to chefs, wellness brands, agricultural
            producers, and industries worldwide. We combine expertise, sustainable
            sourcing, and modern processing to deliver products of exceptional
            quality and consistency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {commitments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ ...smooth, delay: 0.2 + idx * 0.1 }}
                className="flex flex-col gap-2 border-l border-[#CC7778]/30 pl-4"
              >
                <h4 className="text-white text-base sm:text-lg font-medium tracking-wide">
                  {item.title}
                </h4>
                <p className="text-[#a1a1aa] text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ ...smooth, delay: 0.6 }}
          >
            <Link href="/about">
              <Button>
                Explore Our Story
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Context */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={vp}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 relative h-[300px] sm:h-[350px] md:h-[450px] flex items-center justify-center"
        >
          {/* Subtle frame behind image */}
          <div className="absolute border border-white   rounded-2xl" />
          
          <div className="relative w-full h-full drop-shadow-2xl">
            <Image
              src="/who-we-are.jpg"
              alt="Himalayan Salt Mine Interior"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
