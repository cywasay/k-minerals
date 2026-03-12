"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#191619]/70 backdrop-blur-xl" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24 md:h-28">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
            <Image 
              src="/logo.png" 
              alt="Kohistan Minerals Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Navigation Links + Button */}
        <div className="flex items-center gap-4 sm:gap-8 md:gap-10">
          <div className="flex items-center gap-4 sm:gap-8">
            <Link 
              href="/" 
              className="text-white/70 hover:text-[#CC7778] uppercase tracking-widest text-[10px] sm:text-xs font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-white/70 hover:text-[#CC7778] uppercase tracking-widest text-[10px] sm:text-xs font-medium transition-colors duration-300"
            >
              About Us
            </Link>
          </div>

          <Button 
            className="!px-4 !py-2 !text-[10px] sm:!px-6 sm:!py-2.5 sm:!text-xs"
          >
            Inquire Now
          </Button>
        </div>
      </nav>
    </header>
  );
}
