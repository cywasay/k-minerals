"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.3 };

export default function AboutCTA() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#CC7778] overflow-hidden">
      {/* Abstract dark shapes for depth */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={vp}
           transition={smooth}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#191619] mb-8 uppercase tracking-tighter shadow-sm">
            Bring Nature’s Purity <br />
            To Your Business Today
          </h2>

          <p className="text-[#191619]/80 text-lg sm:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
            Join global brands who trust Kohistan Minerals for premium culinary, wellness, animal, and industrial minerals. Quality you can rely on, delivered with care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button className="!bg-[#191619] !border-[#191619] !text-white hover:!bg-black transition-colors">
              Get Started Now
            </Button>
            <Button className="!bg-transparent !border-[#191619]/40 !text-[#191619] hover:!bg-[#191619] hover:!text-white transition-all duration-300">
              See Our Products
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
