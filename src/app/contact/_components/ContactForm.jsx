"use client";

import { motion } from "motion/react";
import { useState } from "react";

import Button from "@/components/ui/Button";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };
const vp = { once: true, amount: 0.2 };

// Icon Components
const IndustrialIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2v18Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
);

const CulinaryIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
);

const WellnessIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);

const WholesaleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
);

export default function ContactForm() {
  const [activeCategory, setActiveCategory] = useState("industrial");
  const [focusedField, setFocusedField] = useState(null);

  const categories = [
    { id: "industrial", label: "Industrial Supply", icon: <IndustrialIcon /> },
    { id: "culinary", label: "Gourmet & Edible", icon: <CulinaryIcon /> },
    { id: "wellness", label: "Wellness & Spa", icon: <WellnessIcon /> },
    { id: "wholesale", label: "Bulk Wholesale", icon: <WholesaleIcon /> },
  ];

  return (
    <section className="relative w-full py-10 sm:py-16 overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-[#CC7778]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-[#CC7778]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full mb-10 md:mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={vp}
           transition={smooth}
           className="text-left"
        >
          <span className="text-[#CC7778] uppercase tracking-[0.3em] text-[10px] sm:text-xs font-semibold mb-3 block">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-semibold tracking-tight uppercase mb-4 leading-[0.95]">
            Get In Touch
          </h1>
          <p className="text-white/50 text-base sm:text-lg font-light max-w-xl leading-relaxed">
            Have a question or ready to start an order? Our team is here to help you get what you need.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Side: The "Intent" Selector */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ ...smooth, delay: 0.1 }}
          >
            <h3 className="text-white text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40">
              Select Inquiry Type
            </h3>
            <div className="flex flex-col gap-2 relative">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-xl border transition-colors duration-500 text-left ${
                    activeCategory === cat.id 
                    ? "border-[#CC7778]" 
                    : "bg-[#121217]/50 border-white/5 hover:border-white/20"
                  }`}
                >
                  {/* Sliding Background */}
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId="active-bg"
                      className="absolute inset-0 bg-[#CC7778] rounded-xl"
                      initial={false}
                      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                      style={{ zIndex: 0 }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-3 transition-colors duration-500 pointer-events-none">
                    <span className={`${activeCategory === cat.id ? "text-[#191619]" : "text-[#CC7778]"}`}>
                      {cat.icon}
                    </span>
                    <span className={`text-sm sm:text-base font-semibold uppercase tracking-tight ${activeCategory === cat.id ? "text-[#191619]" : "text-white/60"}`}>
                      {cat.label}
                    </span>
                  </div>
                  <div className={`relative z-10 transition-all duration-500 pointer-events-none ${activeCategory === cat.id ? "rotate-45 text-[#191619]" : "group-hover:translate-x-1 text-white/40"}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l10-10M7 7h10v10"/></svg>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ ...smooth, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm"
          >
            <h4 className="text-[#CC7778] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Email Us Directly</h4>
            <div className="flex flex-col gap-6 text-white">
              <div className="flex flex-col">
                <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Sales Inquiry</p>
                <a href="mailto:sales@kohistanminerals.com" className="text-base sm:text-lg font-medium font-mono hover:text-[#CC7778] transition-colors break-all">
                  sales@kohistanminerals.com
                </a>
              </div>
              <div className="flex flex-col">
                <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Customer Support</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📧</span>
                  <a href="mailto:support@kohistanminerals.com" className="text-base sm:text-lg font-medium font-mono hover:text-[#CC7778] transition-colors break-all">
                    support@kohistanminerals.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: The Interactive Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ ...smooth, delay: 0.15 }}
            className="bg-[#121217] rounded-3xl p-6 sm:p-8 md:p-10 border border-white/5 relative shadow-2xl"
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#CC7778]/5 blur-[60px] pointer-events-none" />

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="md:col-span-1 space-y-1.5 relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1 leading-none h-4 block">Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/[0.03] border border-white/5 p-3 text-sm text-white focus:outline-none focus:border-[#CC7778]/50 transition-colors rounded-xl placeholder:text-white/10 relative z-10"
                  />
                  {focusedField === "name" && (
                    <motion.div 
                      layoutId="field-highlight"
                      className="absolute inset-0 bg-[#CC7778]/5 border-[#CC7778]/30 rounded-xl z-0"
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    />
                  )}
                </div>
              </div>

              <div className="md:col-span-1 space-y-1.5 relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1 leading-none h-4 block">Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/[0.03] border border-white/5 p-3 text-sm text-white focus:outline-none focus:border-[#CC7778]/50 transition-colors rounded-xl placeholder:text-white/10 relative z-10"
                  />
                  {focusedField === "email" && (
                    <motion.div 
                      layoutId="field-highlight"
                      className="absolute inset-0 bg-[#CC7778]/5 border-[#CC7778]/30 rounded-xl z-0"
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    />
                  )}
                </div>
              </div>

              <div className="md:col-span-2 space-y-1.5 relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1 leading-none h-4 block">Description</label>
                <div className="relative">
                  <textarea 
                    rows="3"
                    placeholder="Tell us about your needs..."
                    onFocus={() => setFocusedField("requirements")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/[0.03] border border-white/5 p-3 text-sm text-white focus:outline-none focus:border-[#CC7778]/50 transition-colors rounded-xl placeholder:text-white/10 resize-none relative z-10"
                  ></textarea>
                  {focusedField === "requirements" && (
                    <motion.div 
                      layoutId="field-highlight"
                      className="absolute inset-0 bg-[#CC7778]/5 border-[#CC7778]/30 rounded-xl z-0"
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    />
                  )}
                </div>
              </div>

              <div className="md:col-span-2 flex items-center gap-3 py-2">
                <div className="flex-1 h-[1px] bg-white/5" />
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/20 whitespace-nowrap">
                  Secured
                </span>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full !py-5"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
