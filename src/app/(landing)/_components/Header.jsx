"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-30 md:h-30">
            <Image 
              src="/logo.png" 
              alt="Kohistan Minerals Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Right Section: Icons + Button */}
        <div className="flex items-center gap-1.5 sm:gap-4 md:gap-6">
          {/* User Profile Icon */}
          <div className="hidden sm:block cursor-pointer text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          {/* Menu Icon */}
          <div className="cursor-pointer text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="12" y1="18" x2="21" y2="18" />
            </svg>
          </div>

          <Button 
            className="!px-3 !py-1.5 sm:!px-6 sm:!py-2.5 !text-[10px] sm:!text-xs"
          >
            Inquire Now
          </Button>
        </div>
      </nav>
    </header>
  );
}
