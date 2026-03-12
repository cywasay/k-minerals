"use client";

import { motion } from "motion/react";

export default function Button({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary",
  type = "button"
}) {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden group px-8 py-4 bg-transparent border border-[#CC7778]/50 text-white font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:border-[#CC7778] ${className}`}
    >
      {/* Button Hover Fill */}
      <div className="absolute inset-0 bg-[#CC7778]/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <path
            d="M4 12H20M20 12L14 6M20 12L14 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
