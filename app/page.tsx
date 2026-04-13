import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { CertSection } from "@/components/sections/CertSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navigation } from "@/components/layout/Navigation";

export const metadata = {
  title: "Naym - Full Stack Developer",
  description:
    "Building scalable, practical, and intelligent software. Full Stack Web Application Developer focused on SaaS development and AI automation.",
};

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <CertSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Navigation />
    </main>
  );
}
