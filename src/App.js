import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from './Skills';
import { PortfolioSection } from './PortfolioSection';
import { ExperienceSection } from './Experience';
import { ContactSection } from './Contact';


export default function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactSection />

      {/* other sections here */}
    </div>
  );
}
