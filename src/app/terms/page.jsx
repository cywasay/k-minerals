"use client";

import Header from "@/app/(landing)/_components/Header";
import Footer from "@/app/(landing)/_components/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };

export default function TermsPage() {
  return (
    <SmoothScroll>
      <div className="relative overflow-clip min-h-screen flex flex-col pt-28 bg-[#191619]">
        <Header />
        <main className="flex-grow py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={smooth}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight mb-8 uppercase leading-[0.95]">
                Terms of <span className="text-[#CC7778]">Service</span>
              </h1>
              
              <div className="space-y-8 text-slate-300 font-light leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">2. Description of Service</h2>
                  <p>
                    Kohistan Minerals provides high-quality Himalayan minerals and logistics services. We reserve the right to modify or discontinue the Service (or any part thereof) with or without notice at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">3. Quotations and Orders</h2>
                  <p>
                    Any quotations provided via the website are subject to availability and formal verification. Orders are only finalized once confirmed by our sales team through formal documentation.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">4. Intellectual Property</h2>
                  <p>
                    The website and its original content, features, and functionality are owned by Kohistan Minerals and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">5. Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws applicable to the operations of Kohistan Minerals, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
