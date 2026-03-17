"use client";

import Header from "@/app/(landing)/_components/Header";
import Footer from "@/app/(landing)/_components/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { motion } from "motion/react";

const smooth = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 };

export default function PrivacyPage() {
  return (
    <SmoothScroll>
      <div className="relative overflow-clip min-h-screen flex flex-col pt-28 bg-[#060608]">
        <Header />
        <main className="flex-grow py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={smooth}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight mb-8 uppercase leading-[0.95]">
                Privacy <span className="text-[#CC7778]">Policy</span>
              </h1>
              
              <div className="space-y-8 text-slate-300 font-light leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">1. Introduction</h2>
                  <p>
                    At Kohistan Minerals, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">2. Information We Collect</h2>
                  <p>
                    We collect several types of information from and about users of our website, including information by which you may be personally identified, such as name, postal address, e-mail address, and telephone number. This is typically collected via our contact and inquiry forms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">3. How We Use Your Information</h2>
                  <p>
                    We use information that we collect about you or that you provide to us to present our website and its contents to you, to provide you with information, products, or services that you request from us, and to fulfill any other purpose for which you provide it.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">4. Data Security</h2>
                  <p>
                    We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CC7778] pl-4">5. Contact Information</h2>
                  <p>
                    To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                    <br />
                    <span className="text-[#CC7778] mt-2 block font-medium">support@kohistanminerals.com</span>
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
