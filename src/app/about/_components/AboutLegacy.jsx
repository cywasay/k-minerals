"use client";

import Image from "next/image";
import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.3 };

export default function AboutLegacy() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#191619] overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CC7778]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Image side */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={vp}
           transition={smooth}
           className="w-full lg:w-1/2 relative h-auto aspect-[4/3] sm:aspect-video lg:aspect-[4/3]"
        >
          <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/our-heritage.jpg"
              alt="Kohistan Mountains"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={smooth}
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#CC7778]" />
            <span className="text-[#CC7778] uppercase tracking-[0.3em] text-xs font-bold">
              Our Heritage
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            A Legacy Carved <br />
            <span className="text-[#CC7778]">in Nature</span>
          </h2>

          <div className="space-y-6">
            <p className="text-[#a1a1aa] text-lg font-light leading-relaxed">
              For centuries, the mountains of Kohistan have preserved minerals of exceptional purity. At Kohistan Minerals, we combine this natural heritage with modern extraction and grading to deliver products that meet the highest international standards.
            </p>
            <p className="text-[#a1a1aa] text-lg font-light leading-relaxed">
              Every crystal and block reflects its origin, carefully processed to serve chefs, wellness brands, agricultural producers, and industries worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
