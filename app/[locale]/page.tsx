import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SebarisCodeSection from "@/components/sections/SebarisCodeSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="project">
          <ProjectSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="sign">
          <SebarisCodeSection />
        </section>
      </main>
      <Footer />
    </>
  );
}