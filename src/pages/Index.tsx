import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => <div className="min-h-screen bg-background">
  <ScrollProgressBar />
  <Navbar />
  <main><HeroSection /><SkillsSection /><ProjectsSection /><ExperienceSection /></main>
  <Footer />
</div>;
export default Index;
