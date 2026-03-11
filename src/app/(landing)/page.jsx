import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Specialties from "./_components/Specialties";

export default function LandingPage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Intro />
      <Specialties />
    </div>
  );
}
