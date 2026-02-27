import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { ProjectsSectionAutoScroll, ServicesSectionGrid } from "@/components/sections";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection
          title="Digital product design and technology partner"
          subtitle="Working alongside ambitious startups and enterprises to build scalable web, mobile, and cross-platform products — from concept to launch worldwide."
          ctaText="Let's discuss your project"
          ctaHref="#contact"
        />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <ProjectsSectionAutoScroll />

        <ServicesSectionGrid />
       
      </main>
      <Footer />
    </div>
  );
}
