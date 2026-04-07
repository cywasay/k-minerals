"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191619] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Quick Links & Info */}
          <div className="flex flex-col gap-6">
            <div className="relative w-32 h-16">
              <Image
                src="/assets/branding/logo.png"
                alt="Kohistan Minerals"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/50 text-xs leading-relaxed font-light max-w-xs uppercase tracking-wider">
              Rooted in Pakistan’s rich mineral heritage, providing Himalayan
              salts and strategic minerals to global industries with uncompromising quality.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <Link href="/about" className="text-white/40 hover:text-[#CC7778] transition-colors text-[10px] uppercase tracking-[0.2em] font-medium">Our Story</Link>
              <Link href="/contact" className="text-white/40 hover:text-[#CC7778] transition-colors text-[10px] uppercase tracking-[0.2em] font-medium">Contact Us</Link>
            </div>
          </div>

          {/* Salts & Minerals */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs border-b border-white/5 pb-2">
              Industrial Salts
            </h4>
            <ul className="flex flex-col gap-3">
              {products.filter(p => p.category === "Industrial Minerals & Salts").map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-white/40 hover:text-[#CC7778] transition-colors text-[11px] uppercase tracking-widest font-light"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Metals */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs border-b border-white/5 pb-2">
              Strategic Metals
            </h4>
            <ul className="flex flex-col gap-3">
              {products.filter(p => p.category === "Strategic & Precious Metals").map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-white/40 hover:text-[#CC7778] transition-colors text-[11px] uppercase tracking-widest font-light"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Global Offices */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs border-b border-white/5 pb-2">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-[11px] font-light text-white/40 uppercase tracking-wider">
              <a href="mailto:sales@kohistanminerals.com" className="hover:text-[#CC7778] transition-colors">sales@kohistanminerals.com</a>
              <a href="mailto:support@kohistanminerals.com" className="hover:text-[#CC7778] transition-colors">support@kohistanminerals.com</a>
            </div>

            <h4 className="text-white font-semibold uppercase tracking-widest text-[10px] mt-4 opacity-50">
              Global Offices
            </h4>
            <div className="flex flex-col gap-3 text-[10px] font-light text-white/30 uppercase tracking-[0.15em]">
              <div><span className="text-[#CC7778] font-bold">US:</span> Houston, Texas</div>
              <div><span className="text-[#CC7778] font-bold">UAE:</span> Dubai, UAE</div>
              <div><span className="text-[#CC7778] font-bold">PK:</span> ISB & Karachi, PK</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.2em]">
          <p>© {currentYear} Kohistan Minerals. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
