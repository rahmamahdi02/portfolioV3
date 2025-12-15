import React from "react";
import Navbar from "./Navbar";
import Base from "./Base";
import HeroSection from "./HeroSection";
import Experience from "./Experience";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { Icons } from "./icons";
// import { ProjectCard } from "./project-card";
import Projects from "./Projects";
import { Car } from "lucide-react";
import Carousel from "./components/ui/Carousel";
import Contact from "./Contact";

const App = () => {
  // Removed under construction toast for more professional appearance
  return (
    <>
      <Toaster theme="dark" richColors={true} />
      <BackgroundBeams className="pointer-events-none fixed z-0 opacity-40"></BackgroundBeams>
      <Base>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </Base>
    </>
    // </div>
  );
};

export default App;
