"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

const features = [
  {
    num: "01",
    label: "Expertise",
    text: "Decades of expertise in Himalayan mineral extraction.",
    image: "/expertise.jpg",
  },
  {
    num: "02",
    label: "Quality",
    text: "Strict quality control and grading for global standards.",
    image: "/quality.jpg",
  },
  {
    num: "03",
    label: "Ethics",
    text: "Ethically sourced and environmentally responsible.",
    image: "/ethics_salt.png",
  },
  {
    num: "04",
    label: "Reach",
    text: "Trusted by chefs, wellness brands, farmers, and industries worldwide.",
    image: "/reach_salt.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-12 flex min-h-[85vh] sm:min-h-[90vh] items-center sm:py-16 md:py-20 overflow-hidden z-10 bg-[#060608]">
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(204,119,120,0.08),_transparent_50%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 w-full flex flex-col items-center">
        
        {/* Centered Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ ...smooth }}
          className="w-full flex flex-col items-center text-center mb-10 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
            <span className="text-[#CC7778] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
              Why Choose Kohistan Minerals
            </span>
            <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight tracking-tight mb-4">
            Trusted Purity,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CC7778]/80">
              Global Standards
            </span>
          </h2>

          <p className="max-w-2xl text-[#a1a1aa] font-light text-sm sm:text-base leading-relaxed italic border-l border-r border-[#CC7778]/30 px-6 py-2">
            "Every mineral we deliver reflects the legacy of the Kohistan
            mountains—pure, reliable, and ready for global industries."
          </p>
        </motion.div>

        {/* Dynamic Interactive Pillars (Accordion Flex) */}
        <div className="w-full flex flex-col md:flex-row gap-3 h-auto md:h-[350px] lg:h-[400px] mb-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ ...smooth, delay: 0.1 * idx }}
              className="group relative flex-1 md:hover:flex-[1.5] lg:hover:flex-[1.8] transition-all duration-700 ease-out bg-[#0a0a0e] border border-white/5 hover:border-[#CC7778]/40 hover:bg-[#121217] rounded-2xl overflow-hidden flex flex-col justify-end p-5 sm:p-6 cursor-pointer h-[200px] md:h-full"
            >
              {/* Internal Accent Lighting */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#CC7778]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Reveal Image on Hover */}
              <div className="absolute inset-0 opacity-30 md:opacity-20 group-hover:opacity-70 transition-all duration-700 ease-in-out pointer-events-none z-0 mix-blend-luminosity group-hover:mix-blend-normal">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-[#0a0a0e]/50 z-10" />
                <Image
                  src={feature.image}
                  alt={feature.label}
                  fill
                  className="object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
              
              {/* Massive Watermark Number */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 text-5xl md:text-7xl lg:text-8xl font-black text-white mix-blend-overlay opacity-5 group-hover:opacity-30 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none z-10">
                {feature.num}
              </div>

              {/* Content */}
              <div className="relative z-10 w-[200px] md:w-[240px] lg:w-[280px]">
                <h3 className="text-[#CC7778] text-sm uppercase tracking-widest font-semibold mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {feature.label}
                </h3>
                <p className="text-white font-light text-xs sm:text-sm leading-relaxed md:opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Centered CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ ...smooth, delay: 0.2 }}
        >
          <Button>
            Discover Our Difference
          </Button>
        </motion.div>
        
      </div>
    </section>
  );
}
