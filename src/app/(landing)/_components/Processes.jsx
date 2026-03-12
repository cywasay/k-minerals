"use client";

import Image from "next/image";
import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

const sections = [
  {
    id: "02",
    title: "RAW MINERAL EXTRACTION",
    desc: "Nestled in the mountains of Kohistan, Kohistan Minerals carefully extracts these natural reserves to preserve their exceptional purity and strength. Every raw material is sourced with precision to supply industries worldwide, from manufacturing and food production to wellness and agriculture.",
    image: "/raw.png",
    imageSide: "right",
  },
  {
    id: "03",
    title: "PRODUCT GRADING & APPLICATION",
    desc: "Once extracted, Kohistan Minerals sorts and grades each mineral according to its intended use. From industrial processing and culinary products to wellness items and architectural features, every shipment meets strict quality standards. This structured approach ensures consistency, versatility, and global readiness across all product categories.",
    image: "/refined.png",
    imageSide: "left",
  },
];

export default function Processes() {
  return (
    <div className="w-full flex flex-col">
      {sections.map((section, idx) => {
        const isLeft = section.imageSide === "left";

        return (
          <section
            key={section.id}
            className={`relative w-full flex items-center overflow-visible py-4 sm:py-6 md:py-10 ${idx !== 0 ? "mt-[-50px] md:mt-[-100px]" : ""}`}
          >
            {/* Background soft glow */}
            <div
              className={`absolute inset-0 z-0 flex ${isLeft ? "justify-start" : "justify-end"} items-center pointer-events-none`}
            >
              <div
                className={`w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#CC7778]/20 rounded-full blur-[100px] sm:blur-[140px] ${isLeft ? "-translate-x-1/4" : "translate-x-1/4"}`}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-6 max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
              {/* Text block */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ ...smooth }}
                className={`w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 justify-center will-change-transform ${isLeft ? "md:order-2 md:pl-10 lg:pl-16" : "md:order-1"}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-white opacity-50 text-lg sm:text-xl md:text-2xl font-light tracking-widest font-mono">
                    #{section.id}
                  </span>
                  <div className="h-[1px] w-4 bg-white opacity-50" />
                  <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-wide uppercase">
                    {section.title}
                  </h2>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ ...smooth, delay: 0.15 }}
                  className="text-[#a1a1aa] text-sm sm:text-base leading-[1.5] sm:leading-[1.4] font-light max-w-lg will-change-transform"
                >
                  {section.desc}
                </motion.p>
              </motion.div>

              {/* Image block */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ ...smooth, duration: 1, delay: 0.1 }}
                className={`w-full md:w-1/2 will-change-transform ${isLeft ? "md:order-1" : "md:order-2"}`}
              >
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto mt-4 md:mt-0">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className={`object-contain ${isLeft ? "object-center md:object-left" : "object-center md:object-right"} drop-shadow-2xl scale-100 sm:scale-[1.15] md:scale-[1.25] lg:scale-[1.4]`}
                  />
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
