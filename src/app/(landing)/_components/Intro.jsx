"use client";

import Image from "next/image";
import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

export default function Intro() {
  return (
    <section className="relative w-full pt-32 pb-24 sm:pt-48 sm:pb-32 md:pt-64 md:pb-48 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/intro-bg.jpg"
          alt="Mountain Origin Extraction"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for readability and blending with the rest of the site */}
        <div className="absolute inset-0 bg-[#060608]/40" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #060608 0%, transparent 20%, transparent 80%, #060608 100%)"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ ...smooth }}
          className="w-full flex flex-col items-center gap-6 sm:gap-8 justify-center will-change-transform"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase">
              MOUNTAIN ORIGIN
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ ...smooth, delay: 0.15 }}
            className="text-[#a1a1aa] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-[1.6] font-light max-w-3xl will-change-transform"
          >
            Formed within the rugged mountain ranges of Kohistan, Kohistan
            Minerals’ deposits carry the strength and purity of natural
            geological processes. Extracted with care and prepared through
            structured grading, each material reflects the raw character of its
            origin while meeting the demands of modern industry and global
            trade.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
