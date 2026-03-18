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
              <span className="uppercase tracking-[0.3em] text-xs font-semibold text-white">
                {product.subtitle}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none text-[#CC7778]">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-16 lg:gap-20">
            {/* Spec Category Mapping for refined structure */}
            {[
              { 
                title: "Primary Uses", 
                data: product.primaryUses,
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              },
              { 
                title: "Product Range", 
                data: product.productRange,
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              },
              { 
                title: "Quality & Handling", 
                data: product.qualityHandling,
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ ...smooth, delay: i * 0.15 }}
                className="flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-3xl p-8 sm:p-10 hover:border-[#CC7778]/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC7778]/5 rounded-bl-full blur-2xl group-hover:bg-[#CC7778]/10 transition-colors duration-500" />
                
                {/* Modern Header */}
                <div className="flex flex-col mb-10 relative z-10">
                  <div className="flex items-center gap-4 mb-4 text-[#CC7778]">
                    {category.icon}
                    <div className="h-[1px] w-12 bg-white/10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl text-white font-bold uppercase tracking-[0.1em] leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Minimalist List */}
                <div className="flex flex-col gap-6 relative z-10">
                  {category.data.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-[#CC7778] transition-colors duration-300 flex-shrink-0 shadow-[0_0_10px_rgba(204,119,120,0)] group-hover/item:shadow-[0_0_10px_rgba(204,119,120,0.8)]" />
                      <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed group-hover/item:text-white transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 sm:mt-40 pt-16 sm:pt-24 border-t border-white/5 space-y-20 lg:space-y-32">
            
            {/* Supply Format Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ ...smooth }}
                className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
              >
                <div className="absolute inset-0 bg-[#CC7778]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191619] via-transparent to-transparent z-10 opacity-60" />
                <Image 
                  src="/supply_format.png" 
                  alt="Supply Format Concept" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ ...smooth, delay: 0.15 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CC7778] shadow-[0_0_10px_rgba(204,119,120,0.8)]" />
                  <h3 className="text-sm sm:text-base text-white font-bold uppercase tracking-[0.2em] leading-tight">Supply Format & Capability</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {product.supplyFormat.map((format, idx) => (
                    <div key={idx} className="flex flex-col relative pl-6 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-white/10 hover:before:bg-[#CC7778]/70 before:transition-colors before:duration-500">
                      <span className="text-[#CC7778] text-[10px] uppercase tracking-widest font-bold mb-2">Spec {(idx + 1).toString().padStart(2, '0')}</span>
                      <p className="text-white/80 text-sm font-light leading-relaxed">{format}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Source Efficiency Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ ...smooth }}
                className="flex flex-col order-2 lg:order-1"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CC7778] shadow-[0_0_10px_rgba(204,119,120,0.8)]" />
                  <h3 className="text-sm sm:text-base text-white font-bold uppercase tracking-[0.2em] leading-tight">Source Quality & Efficiency</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {product.whyWorks.map((reason, idx) => (
                    <div key={idx} className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-500 border border-transparent hover:border-white/[0.05]">
                      <div className="text-2xl sm:text-3xl font-black text-white/5 group-hover:text-[#CC7778]/40 transition-colors duration-500 italic">
                        {(idx + 1).toString().padStart(2, '0')}
                      </div>
                      <p className="text-white/50 text-sm font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ ...smooth, delay: 0.15 }}
                className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl order-1 lg:order-2"
              >
                <div className="absolute inset-0 bg-[#CC7778]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191619] via-transparent to-transparent z-10 opacity-60" />
                <Image 
                  src="/source_efficiency.png" 
                  alt="Source Efficiency Concept" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
              </motion.div>
            </div>
            
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
