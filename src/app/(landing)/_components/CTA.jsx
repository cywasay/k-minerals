"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.3 };

export default function CTA() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#CC7778] overflow-hidden">
      {/* Abstract dark shapes for depth */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={smooth}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[#191619] uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mb-6 block opacity-70">
              Call to Action
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191619] font-black tracking-tight mb-8 max-w-4xl mx-auto leading-tight uppercase">
              Partner with Kohistan Minerals Today
            </h2>
            <p className="text-[#191619]/80 text-base sm:text-l md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Secure a reliable supply of premium Himalayan minerals backed by global logistics and export expertise. Build a partnership that guarantees quality, consistency, and trust.
            </p>
            
            <div className="flex justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="!bg-[#191619] !border-[#191619] !text-white hover:!bg-black transition-colors w-full">
                  Contact Our Sales Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
