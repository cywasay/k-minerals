import Header from "@/app/(landing)/_components/Header";
import Footer from "@/app/(landing)/_components/Footer";
import AboutHero from "./_components/AboutHero";
import AboutLegacy from "./_components/AboutLegacy";
import AboutRange from "./_components/AboutRange";
import AboutValues from "./_components/AboutValues";
import AboutSustainability from "./_components/AboutSustainability";
import AboutGlobal from "./_components/AboutGlobal";
import AboutCTA from "./_components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="relative overflow-clip bg-[#060608]">
      <Header />
      <AboutHero />
      <AboutLegacy />
      <AboutRange />
      <AboutValues />
      <AboutSustainability />
      <AboutGlobal />
      <AboutCTA />
      <Footer />
    </div>
  );
}
