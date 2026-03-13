"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040406] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <div className="relative w-32 h-16">
              <Image 
                src="/logo.png" 
                alt="Kohistan Minerals" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-light max-w-xs">
              Rooted in Pakistan’s rich mineral heritage, supplying Himalayan salts and minerals to global industries with quality and consistency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Specialties", "Process", "Highlights", "Global Network"].map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    className="text-white/40 hover:text-[#CC7778] transition-colors text-sm font-light"
                  >
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/about" 
                  className="text-white/40 hover:text-[#CC7778] transition-colors text-sm font-light"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-white/40 hover:text-[#CC7778] transition-colors text-sm font-light"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Products</h4>
            <ul className="flex flex-col gap-3">
              {["Industrial Salt", "Edible Pink Salt", "Bath & Wellness", "Animal Feed Salt", "Bulk Minerals"].map((product) => (
                <li key={product}>
                  <Link 
                    href="#" 
                    className="text-white/40 hover:text-[#CC7778] transition-colors text-sm font-light"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Get in Touch</h4>
            <div className="flex flex-col gap-4 text-sm font-light text-white/40">
              <p className="flex items-start gap-3">
                <span className="text-[#CC7778]">📍</span>
                1100 Louisiana Street, Houston, TX 77002
              </p>
              <p className="flex items-center gap-3 hover:text-[#CC7778] transition-colors">
                <span className="text-[#CC7778]">📧</span>
                sales@kohistanminerals.com
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#CC7778]">📞</span>
                +1 (713) 555-0123
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.2em]">
          <p>© {currentYear} Kohistan Minerals. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
