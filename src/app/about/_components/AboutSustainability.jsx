"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.3 };

export default function AboutSustainability() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#191619] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-[#CC7778]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
        {/* Image side */}
        <motion.div
           initial={{ opacity: 0, scale: 1.1 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={vp}
           transition={{ ...smooth, duration: 1.2 }}
           className="w-full lg:w-1/2 relative h-auto aspect-[4/3] sm:aspect-video lg:aspect-[4/3]"
        >
          <div className="absolute inset-0 bg-[#CC7778]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative w-full h-full overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/sustainability.jpg"
              alt="Sustainability in Kohistan"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={vp}
           transition={smooth}
           className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Commitment to <br />
            <span className="text-[#CC7778]">Sustainability</span>
          </h2>

          <p className="text-[#a1a1aa] text-lg font-light leading-relaxed mb-10">
            Kohistan Minerals prioritizes responsible sourcing and sustainable practices. Our extraction methods minimize environmental impact while protecting natural resources. By supporting local communities and maintaining ethical operations, we ensure that the Kohistan mountains’ mineral wealth benefits generations to come.
          </p>

          <Link href="/contact">
            <Button>Learn More About Our Practices</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
