"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.3 };

export default function CTA() {
  return (
    <section className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#060608]">
      {/* Decorative background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#CC7778]/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={smooth}
          >
            <span className="text-[#CC7778] uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-6 block">
              Call to Action
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
              Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CC7778]/80">Kohistan Minerals</span> Today
            </h2>
            <p className="text-[#a1a1aa] text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Secure a reliable supply of premium Himalayan minerals backed by global logistics and export expertise. Build a partnership that guarantees quality, consistency, and trust.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button className="w-full sm:w-auto">
                Request a Quote
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Our Sales Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
