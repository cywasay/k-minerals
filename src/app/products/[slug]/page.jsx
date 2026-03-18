"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Header from "@/app/(landing)/_components/Header";
import Footer from "@/app/(landing)/_components/Footer";
import Button from "@/components/ui/Button";
import { products } from "@/constants/products";
import { notFound } from "next/navigation";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

export default function ProductDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#191619] text-white overflow-clip">
      <Header />
      
      {/* Product Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6">
        {/* Background Accents */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none -z-10 opacity-20"
          style={{ backgroundColor: product.bgAccent || "#CC7778" }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...smooth }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#CC7778]" />
              <span className="text-[#CC7778] uppercase tracking-[0.3em] text-xs font-semibold">
                {product.subtitle}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none">
              {product.title}
            </h1>
            <p className="text-[#CC7778] text-lg sm:text-xl font-medium uppercase tracking-widest mb-8 border-l-2 border-[#CC7778]/30 pl-6 italic">
              {product.tagline}
            </p>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              {product.description}
            </p>
            
            <div className="mt-10">
              <Link href="/contact">
                <Button className="!px-10 !py-5 text-base">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ ...smooth, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center p-8 sm:p-12"
          >
            <div className="absolute inset-0 bg-[#CC7778]/5 rounded-3xl blur-3xl" />
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Redesigned Product Information Sections */}
      <section className="py-24 sm:py-32 bg-[#191619] relative z-10 overflow-hidden border-y border-white/5">
        {/* Cinematic Background Decorative Text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.015] select-none -z-10 pt-10">
          <span className="text-[25vw] font-black uppercase tracking-tighter leading-none select-none">DATA</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-16 lg:gap-20">
            {/* Spec Category Mapping for refined structure */}
            {[
              { title: "Primary Uses", data: product.primaryUses },
              { title: "Product Range", data: product.productRange },
              { title: "Quality & Handling", data: product.qualityHandling }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ ...smooth, delay: i * 0.15 }}
                className="flex flex-col"
              >
                {/* Section Title with Numeric Index */}
                <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-14">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] shadow-inner">
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#CC7778] tracking-widest uppercase italic">0{i + 1}</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg sm:text-2xl text-white font-bold uppercase tracking-tight leading-none mb-1">
                      {category.title}
                    </h3>
                    <div className="h-0.5 w-8 sm:w-12 bg-[#CC7778]/50" />
                  </div>
                </div>

                {/* Individual Item Cards */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {category.data.map((item, j) => (
                    <motion.div
                      key={j}
                      whileHover={{ x: 10 }}
                      className="group flex items-start gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-[#CC7778]/30 transition-all duration-500 shadow-xl"
                    >
                      {/* Interactive Dot */}
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC7778] opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                      
                      <p className="text-white/50 text-[13px] sm:text-[15px] leading-relaxed font-light group-hover:text-white transition-colors duration-500">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-20 sm:mt-32">
             {/* Supply Format Card */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={vp}
               transition={{ ...smooth }}
               className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC7778]/5 rounded-bl-full blur-2xl group-hover:bg-[#CC7778]/10 transition-colors duration-500" />
              <h3 className="text-lg sm:text-xl text-white font-bold uppercase tracking-widest mb-6 sm:mb-8">Supply Format</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {product.supplyFormat.map((format, idx) => (
                  <div key={idx} className="flex flex-col gap-1 sm:gap-2 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#CC7778] text-[9px] sm:text-[10px] uppercase tracking-tighter font-bold">Standard</span>
                    <p className="text-white/70 text-xs sm:text-sm font-light">{format}</p>
                  </div>
                ))}
              </div>
            </motion.div>

             {/* Efficiency Card */}
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={vp}
               transition={{ ...smooth }}
               className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#CC7778]/5 rounded-tr-full blur-2xl group-hover:bg-[#CC7778]/10 transition-colors duration-500" />
              <h3 className="text-lg sm:text-xl text-white font-bold uppercase tracking-widest mb-6 sm:mb-8">Source Efficiency</h3>
              <div className="space-y-4">
                {product.whyWorks.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-[#CC7778]/30 flex items-center justify-center text-[10px] text-[#CC7778] font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-white/60 text-xs sm:text-base font-light group-hover:text-white/80 transition-colors duration-300">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Profile Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ ...smooth }}
            className="max-w-4xl"
          >
            <div className="text-[#CC7778] uppercase tracking-[0.4em] text-xs font-bold mb-8">Product Profile</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-10 leading-[1.1]">
              Engineered for consistency across every supply.
            </h2>
            <p className="text-white/50 text-base sm:text-xl font-light italic leading-relaxed">
              &quot;{product.profile}&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Redesigned Business Inquiry CTA - Fully Mobile Optimized */}
      <section className="py-24 sm:py-48 px-4 sm:px-6 relative overflow-hidden bg-[#191619]">
        {/* Background Decorative Large Text - Optimized for Mobile Scale */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none -z-0">
          <span className="text-[20vw] sm:text-[15vw] font-black uppercase tracking-tight leading-none whitespace-nowrap">KOHISTAN</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ ...smooth, duration: 1 }}
          className="max-w-6xl mx-auto relative z-10 flex flex-col items-center"
        >
          {/* Section Breadcrumb/Badge */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-14">
            <div className="h-[1px] w-8 sm:w-12 bg-[#CC7778]/50" />
            <span className="text-[#CC7778] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-xs font-bold whitespace-nowrap">
              Inquiry Segment
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#CC7778]/50" />
          </div>

          <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-8 sm:mb-12 text-center leading-[0.95] sm:leading-[0.9] max-w-4xl px-2">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Operations.</span>
          </h2>

          <p className="text-white/40 text-center text-xs sm:text-lg mb-10 sm:mb-16 max-w-2xl font-light leading-relaxed px-4">
            Connect with Kohistan Minerals to receive industrial-grade specifications, competitive pricing models, and supply options tailored precisely to your operational needs.
          </p>

          <Link href="/contact" className="group w-full sm:w-auto flex justify-center">
            <div className="relative overflow-hidden px-8 sm:px-16 py-5 sm:py-7 w-full sm:w-auto rounded-none border border-[#CC7778]/30 bg-transparent hover:border-[#CC7778] transition-all duration-700">
              {/* Button Filling Animation on Hover */}
              <div className="absolute inset-0 bg-[#CC7778] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-4">
                <span className="text-white group-hover:text-[#191619] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm font-bold transition-colors duration-500">
                  Connect Today
                </span>
                <svg 
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
                  className="text-[#CC7778] sm:w-[18px] sm:h-[18px] group-hover:text-[#191619] group-hover:translate-x-1 transition-all duration-500"
                >
                  <path d="M7 17l10-10M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Subtle Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CC7778]/20 to-transparent" />
      </section>

      <Footer />
    </div>
  );
}
