import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Specialties from "./_components/Specialties";
import RareEarthMinerals from "./_components/RareEarthMinerals";
import Processes from "./_components/Processes";
import WhoWeAre from "./_components/WhoWeAre";
import WhyChooseUs from "./_components/WhyChooseUs";
import ProductHighlights from "./_components/ProductHighlights";
import GlobalOperations from "./_components/GlobalOperations";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export default function LandingPage() {
  return (
    <div className="relative overflow-clip">
      <Header />
      <Hero />
      <Intro />
      <Specialties />
      <RareEarthMinerals />
      <Processes />
      <ProductHighlights />
      <WhoWeAre />
      <WhyChooseUs />
      <GlobalOperations />
      <CTA />
      <Footer />
    </div>
  );
}
