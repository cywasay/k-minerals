"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";
import { products } from "@/constants/products";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use this to prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-[#191619]/70 backdrop-blur-xl border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24 md:h-28">
        {/* Logo Section */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105 z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
            <Image 
              src="/logo.png" 
              alt="Kohistan Minerals Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        {/* Navigation Links + Button */}
        <div className="flex items-center gap-4 sm:gap-8 md:gap-10">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 sm:gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.title}
                href={link.href} 
                className="text-white/70 hover:text-[#CC7778] uppercase tracking-widest text-xs font-medium transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <button className="flex items-center gap-1.5 text-white/70 hover:text-[#CC7778] uppercase tracking-widest text-xs font-medium transition-colors duration-300 cursor-pointer outline-none">
                Products
                <motion.svg 
                  width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  animate={{ rotate: isProductsHovered ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="m6 9 6 6 6-6"/>
                </motion.svg>
              </button>

              <AnimatePresence>
                {isProductsHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-[#191619]/95 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 p-2"
                  >
                    <div className="flex flex-col">
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="px-4 py-3 text-white/60 hover:text-[#CC7778] hover:bg-white/5 rounded-lg text-[11px] uppercase tracking-wider font-medium transition-all duration-300 border-b border-white/[0.03] last:border-0"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:block">
              <Button 
                className="!px-4 !py-2 !text-[10px] sm:!px-6 sm:!py-2.5 sm:!text-xs"
              >
                Inquire Now
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col gap-1.5 p-2 z-50 hover:bg-white/5 rounded-full transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`} 
              />
              <div 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`} 
              />
              <div 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`} 
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#191619] z-40 md:hidden flex flex-col pt-24 pb-12 overflow-y-auto"
          >
            {/* Background elements for premium feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#CC7778]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative flex flex-col gap-10 w-full px-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + 0.05 * idx }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl text-white font-bold uppercase tracking-tighter"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Products List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full"
              >
                <div className="text-[#CC7778] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-[#CC7778]/40" />
                  Our Products
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {products.map((product, idx) => (
                    <motion.div
                      key={product.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                    >
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white/60 hover:text-[#CC7778] text-sm uppercase tracking-widest font-medium py-2 block border-l border-white/5 pl-4 hover:border-[#CC7778]/50 transition-all"
                      >
                        {product.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full mt-4"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-center text-sm py-4 tracking-widest uppercase font-bold">
                    Inquire Now
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto px-8 py-8 border-t border-white/5 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-white/20 text-[9px] uppercase tracking-[0.3em]">Hiring Inquiries</span>
                <span className="text-white/40 text-[11px] font-mono">sales@kohistanminerals.com</span>
              </div>
              <div className="text-white/20 text-[9px] tracking-[0.3em] uppercase">
                Kohistan Minerals &copy; 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
