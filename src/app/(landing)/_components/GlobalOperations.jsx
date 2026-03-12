"use client";

import { motion } from "motion/react";
import WorldMap from "@/components/ui/world-map";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

const regions = [
  { name: "North America" },
  { name: "Europe" },
  { name: "Middle East" },
  { name: "Asia" },
];

export default function GlobalOperations() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden z-10 bg-[#040610]">
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_rgba(204,119,120,0.06),_transparent_60%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 w-full flex flex-col items-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ ...smooth }}
          className="w-full flex flex-col items-center text-center mb-8 md:mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
            <span className="text-[#CC7778] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
              Global Operations
            </span>
            <div className="h-[1px] w-8 bg-[#CC7778] opacity-50" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight tracking-tight mb-4">
            Supplying Minerals{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CC7778]/80">
              Across The Globe
            </span>
          </h2>

          <p className="max-w-2xl text-[#a1a1aa] font-light text-sm sm:text-base leading-relaxed">
            Kohistan Minerals operates with a global export focus, facilitating
            supply chains to major markets worldwide.
          </p>
        </motion.div>
      </div>

      {/* World Map — Full Width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={vp}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full mb-10 md:mb-14 relative z-20"
      >
        <WorldMap
          lineColor="#CC7778"
          dots={[
            {
              start: { lat: 35.5, lng: 72.5 },   // Kohistan / Himalayas
              end: { lat: 29.7604, lng: -95.3698 },  // Houston, USA
            },
            {
              start: { lat: 35.5, lng: 72.5 },   // Kohistan / Himalayas
              end: { lat: 40.7128, lng: -74.006 },   // New York, USA
            },
            {
              start: { lat: 35.5, lng: 72.5 },   // Kohistan / Himalayas
              end: { lat: 51.5074, lng: -0.1278 },   // London, UK
            },
            {
              start: { lat: 35.5, lng: 72.5 },   // Kohistan / Himalayas
              end: { lat: 48.8566, lng: 2.3522 },    // Paris, France
            },
            {
              start: { lat: 35.5, lng: 72.5 },   // Kohistan / Himalayas
              end: { lat: 25.276, lng: 55.2962 },    // Dubai, UAE
            },
            {
              start: { lat: 35.5, lng: 72.5 },   // Kohistan / Himalayas
              end: { lat: 35.6762, lng: 139.6503 },  // Tokyo, Japan
            },
            {
              start: { lat: 35.5, lng: 72.5 },   // Kohistan / Himalayas
              end: { lat: 1.3521, lng: 103.8198 },   // Singapore
            },
          ]}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 w-full">
        {/* Bottom Info Row */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">

          {/* Region Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ ...smooth, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-[#121217]/60 backdrop-blur-md hover:border-[#CC7778]/40 transition-colors duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#CC7778]" />
                <span className="text-white/80 text-sm font-medium tracking-wide">
                  {region.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Head Office Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ ...smooth, delay: 0.2 }}
            className="flex flex-col gap-3 text-right shrink-0"
          >
            <div className="flex items-center gap-3 lg:justify-end">
              <div className="h-[1px] w-4 bg-[#CC7778]/40" />
              <span className="text-[#CC7778] uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold">
                Head Office (USA)
              </span>
            </div>
            <p className="text-white/70 text-sm font-light">
              1100 Louisiana Street, Houston, TX 77002
            </p>
            <div className="flex flex-col gap-1">
              <a href="mailto:sales@kohistanminerals.com" className="text-[#a1a1aa] text-sm font-light hover:text-[#CC7778] transition-colors duration-300">
                sales@kohistanminerals.com
              </a>
              <a href="mailto:support@kohistanminerals.com" className="text-[#a1a1aa] text-sm font-light hover:text-[#CC7778] transition-colors duration-300">
                support@kohistanminerals.com
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
