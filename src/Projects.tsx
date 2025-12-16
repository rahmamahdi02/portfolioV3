import ProjectCard from "./Card";
import { type Project } from "./Card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
const projectData: Project[] = [
  {
    title: "DoTunnel",
    description:
      "A lightweight HTTP tunnel proxy built on Cloudflare Durable Objects. It allows you to expose your local development server to the internet with a secure, public URL. Perfect for sharing work-in-progress, testing webhooks, or debugging APIs without complex network setups.",
    video: "videos/dotunnel.mp4",
    techStack: [
      { name: "Cloudflare Workers", icon: "cloudflare-workers" },
      { name: "Durable Objects" , icon: "cloudflare-workers" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Hono", icon: "hono" },
    ],
    codeLink: "https://github.com/rmahdi/dotunnel",
    demoLink: "https://www.npmjs.com/package/rmadhi",
  },

  {
    title: "URL Shortener",
    description:
      "A URL shortener that allows users to shorten long URLs into short links. it does run on Edge. using Cloudflare Workers, it provides a fast and nearly instant experience.",
    video: "videos/urlshortner.mp4",
    techStack: [
      { name: "Cloudflare Workers", icon: "cloudflare-workers" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Hono", icon: "hono" },
    ],
    // techStackIcons: ["React", "TS", "TailwindCSS", "Cloudflare Workers", "Hono"],

    codeLink: "https://github.com/rmahdi/bit",
    demoLink: "https://short.rmahdi.me/",
  },
  {
    title: "Patient Management System",
    description:
      "A demo application built for a healthcare company to manage patients and appointments efficiently. It features a user-friendly calendar interface for scheduling and tracking appointments, making client management simple and intuitive.",
    video: "videos/health-calendar.mp4",
    techStack: [
      { name: "Angular v20", icon: "angular" },
      { name: "TypeScript", icon: "typescript" },
      { name: "TailwindCSS", icon: "tailwindcss" },
    ],
    codeLink: "https://github.com/rmahdi/ng-calendar",
    demoLink: "http://pratisoft-demo.rmahdi.me/",
  },
  {
    title: "Real-Time Data Processing System",
    description:
      " a high-performance system responsible for processing and analyzing high-throughput data in real time from diverse sources, with minimal latency. The system is capable of handling large volumes of real-time data streams, thanks to a set of decoupled and distributed components, each of which can be scaled independently.",
    image: ["images/finance/image.png", "images/finance/image1.png"],
    techStack: [
      { name: "Apache Kafka", icon: "kafka" },
      { name: "Celery" },
      { name: "Redis", icon: "redis" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Docker", icon: "docker" },
      { name: "Elasticsearch" },
    ],
    codeLink: "https://github.com/rmahdi/finance",
    // demoLink: "https://example.com/",
  },
];

const Projects = () => {
  return (
    <>
      <div
        id="Portfolio"
        className="flex min-h-0 w-full flex-col items-center justify-center gap-4 px-4"
      >
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground max-w-2xl pb-10 text-center text-lg">
        I've leveraged projects as learning experiences, which should explain the breadth of technologies/principles on this page.
        </p>
        <div className="h-[100px]: grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* for more projects link to github */}
        <div className="m-13">
          <Button asChild>
            <a
              href="https://github.com/rmahdi"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn bg-primary text-primary-foreground hover:bg-primary/90 flex flex-1 items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg"
            >
              For more projects, visit my GitHub
              <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Projects;
