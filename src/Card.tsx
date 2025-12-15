import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

import Carousel from "./components/ui/Carousel";

// Tech Stack Icons from @svgl registry
import  {ReactLight}  from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Cloudflare } from "@/components/ui/svgs/cloudflare";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Angular } from "@/components/ui/svgs/angular";
import { Redis } from "@/components/ui/svgs/redis";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Php } from "@/components/ui/svgs/php";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Nestjs } from "@/components/ui/svgs/nestjs";
import { Html5 } from "@/components/ui/svgs/html5";
import { CssOld } from "@/components/ui/svgs/cssOld";
import { ApacheKafkaLogo } from "@/components/ui/svgs/apacheKafkaLogo";
import { Fastapi } from "@/components/ui/svgs/fastapi";
import { Hono } from "@/components/ui/svgs/hono";

export type TechStack = {
  name: string;
  icon?: string;
};

export type Project = {
  title: string;
  description: string;
  image?: string[];
  techStack: TechStack[];
  codeLink: string;
  demoLink?: string;
  video?: string;
};

// Icon mapping for tech stack
const techStackIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  react: ReactLight,
  typescript: Typescript,
  cloudflare: Cloudflare,
  "cloudflare-workers": Cloudflare,
  nodejs: Nodejs,
  node: Nodejs,
  tailwindcss: Tailwindcss,
  tailwind: Tailwindcss,
  angular: Angular,
  redis: Redis,
  python: Python,
  docker: Docker,
  php: Php,
  mysql: Mysql,
  javascript: Javascript,
  js: Javascript,
  nestjs: Nestjs,
  html5: Html5,
  html: Html5,
  css: CssOld,
  css3: CssOld,
  kafka: ApacheKafkaLogo,
  "apache-kafka": ApacheKafkaLogo,
  fastapi: Fastapi,
  hono: Hono,
};

const ProjectCard = (project: Project) => {
  return (
    <Card className="group mx-auto  relative flex w-full flex-col overflow-hidden border-border bg-card p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
      {/* Image Container with Overlay */}
      {project.image && (
        <div className="relative overflow-hidden">
          <Carousel
            items={project.image.map((img) => ({ image: img }))}
            baseWidth={400}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            loop={true}
            // round={true}
          ></Carousel>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      {project.video && (
        <div className="relative overflow-hidden">
          <video
            poster={`images/thumbnails/${project.video.replace("videos/", "").replace(".mp4",".webp")}`}
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            
            className="pointer-events-none mx-auto w-full object-cover object-top aspect-video" // needed because random black line at bottom of video
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-card-foreground bg-clip-text text-xl font-bold">
              {project.title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Tech Stack Badges */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-card-foreground">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => {
              const IconComponent = tech.icon ? techStackIcons[tech.icon.toLowerCase()] : null;
              return (
                <Badge
                  key={tech.name}
                  variant="outline"
                  className="animate-in fade-in slide-in-from-bottom-2 flex items-center gap-1.5 bg-secondary text-secondary-foreground transition-colors duration-200 hover:bg-secondary/80"
                >
                  {IconComponent && (
                    <IconComponent className="!w-4 !h-4" />
                  )}
                  {tech.name}
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 pb-4">
        {project.codeLink && (
          <Button asChild variant={"outline"}>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex flex-1 items-center justify-center gap-2 border-border bg-transparent transition-all duration-200 hover:border-border/80 hover:shadow-lg"
            >
              <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
              Source Code
            </a>
          </Button>
        )}
        {project.demoLink && (
          <Button asChild>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex flex-1 items-center justify-center gap-2 bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg"
            >
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:-rotate-12" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
