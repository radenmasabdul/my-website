import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/HeroSection";
import AboutSection from "@/components/layout/AboutSection";

export default function Home() {
  
  return (
    <>
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>
    </>
  )
}