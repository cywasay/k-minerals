"use client";

import Header from "@/app/(landing)/_components/Header";
import Footer from "@/app/(landing)/_components/Footer";
import ContactForm from "./_components/ContactForm";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function ContactPage() {
  return (
    <SmoothScroll>
      <div className="relative overflow-clip min-h-screen flex flex-col pt-28 bg-[#060608]">
        <Header />
        <main className="flex-grow">
          <ContactForm />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
