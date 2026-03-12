"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.3 };

export default function AboutGlobal() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#191619] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CC7778]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={vp}
           transition={smooth}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 uppercase tracking-tight">
            Global <span className="text-[#CC7778]">Reach</span>
          </h2>

          <p className="text-[#a1a1aa] text-lg sm:text-xl font-light leading-relaxed mb-12">
            With a reputation for reliability and excellence, Kohistan Minerals serves clients across the globe. Every shipment is rigorously tested, carefully graded, and traceable. Whether for culinary, wellness, agricultural, or industrial use, our products arrive in perfect condition, maintaining the trust of clients worldwide.
          </p>

          <Button>Contact Us for International Supply</Button>
        </motion.div>
      </div>
    </section>
  );
}
