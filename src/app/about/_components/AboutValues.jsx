"use client";

import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

const values = [
  {
    title: "Purity & Quality",
    desc: "Every mineral reflects the unmatched natural purity of Kohistan."
  },
  {
    title: "Sustainability",
    desc: "Ethical sourcing and eco-friendly practices protect nature and communities."
  },
  {
    title: "Innovation",
    desc: "Combining traditional heritage with modern methods to serve global industries."
  },
  {
    title: "Trust & Reliability",
    desc: "Consistent quality and dependable delivery worldwide."
  },
  {
    title: "Global Vision",
    desc: "Bringing Kohistan’s natural treasures to clients across the globe."
  },
  {
    title: "Integrity & Transparency",
    desc: "Operating with complete openness and maintaining the highest ethical standards in every transaction."
  }
];

export default function AboutValues() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#191619] overflow-hidden">
       {/* Background accent */}
      <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-[#CC7778]/10 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-[#CC7778]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={vp}
           transition={smooth}
           className="mb-12"
        >
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Our Values That <br />
            <span className="text-[#CC7778]">Define Kohistan Minerals</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg font-light leading-relaxed max-w-2xl">
            At Kohistan Minerals, everything we do is guided by principles that ensure purity, trust, and excellence in every mineral we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ ...smooth, delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-[10px] bg-[#CC7778] rounded-full" />
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  {val.title}
                </h3>
              </div>
              <p className="text-[#a1a1aa] text-lg font-light leading-relaxed pl-14">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
