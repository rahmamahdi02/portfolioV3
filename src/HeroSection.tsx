import React from "react";
import Underline from "./Underline";
import RotatingText from "./RotatingText/RotatingText";
import { Button } from "./components/ui/button";
import { Download, Link, Github } from "lucide-react";
import { BackgroundBeams } from "./components/ui/background-beams";

interface Props {
  children?: React.ReactNode;
}

const HeroSection = ({ children }: Props) => {
  return (
    <>
      <main className="mb-30 mb-70 flex h-[80vh] flex-col items-center justify-center gap-20 p-5 pt-84 sm:mb-0 sm:flex-row sm:pt-0">
        <div className="max-w-120">
          <p className="text-foreground max-w-2xl font-mono text-lg">
            Software Engineer experienced in shipping 
            features to production and <Underline>scaling ML-powered systems used by 120M+ users.</Underline>
            
            Experienced in end-to-end development of internal SDKs, full-stack
            applications, and developer tooling. Skilled in rapidly prototyping
            0→1 products, optimizing ML pipelines, and shipping reliable,
            scalable systems in startup-like environments. Adept at <Underline>TypeScript,
            Node.js, React Native (including bridgeless architecture), and
            Python.</Underline> Passionate about developer experience, open-source
            collaboration, developer-friendly APIs, and building robust,
            user-facing systems from the ground up.
          </p>

          {/* two buttons to download my resume or check my github */}
          <div className="mt-5 flex flex-row gap-2">
            <Button
              asChild
              className="group/btn group bg-primary text-primary-foreground hover:bg-primary/90 flex w-2/4 items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg"
            >
              <a
                href={"/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-135 group-hover:rotate-12" />
                My Resume / CV
              </a>
            </Button>

            <Button
              variant={"outline"}
              asChild
              className="group flex w-1/4 items-center justify-center gap-2 hover:shadow-lg"
            >
              <a
                href={"https://github.com/jounaidayoub"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-135 group-hover:rotate-12" />
                Github
              </a>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;

