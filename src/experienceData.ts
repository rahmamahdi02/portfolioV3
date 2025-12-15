export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  bullets?: string[];
  technologies: string[];
  type?: "work" | "project" | "education";
  companyLogo?: string;
}

export const experiences: Experience[] = [
  {
    company: "Sony Interactive Entertainment",
    companyLogo: "/images/sony_logo.jpeg",
    title: "Software Engineer (Contract)",
    duration: "Jul 2024 – Jul 2025",
    location: "San Francisco, CA",
    description:
      "Developed and maintained internal SDKs and C++ libraries powering PlayStation’s machine learning deployments on console, enabling real-time inference and seamless integration with platform services used by millions of devices worldwide.",
    bullets: [
      "Implemented the first-ever native-level cross-platform UI framework in TypeScript by extending React Native’s bridgeless architecture, reducing cross-device bugs by 30% and improving runtime consistency",
      "Deployed and monitored over-the-air ML updates across all consoles, expanding coverage from 5% → 100% through automated rollout and version tracking",
      "Verified and optimized TensorFlow Lite pipelines on CPU and GPU via unit and integration testing, increasing inference reliability and reducing post-deployment defects by 35%",
      "Conducted A/B testing and performance analysis across console environments to optimize model accuracy, latency, and end-user experience",
      "Integrated LiteRT and TensorFlow Lite runtimes into console SDKs, validating inference reliability and optimizing runtime performance for real-time, user-facing AI systems",
      "Contributed to internal open-source SDKs improving ML model onboarding, prototyping pipelines, and developer tooling reliability"
    ],
    technologies: [
      "C++",
      "TypeScript",
      "React Native",
      "TensorFlow Lite",
      "LiteRT",
      "AWS",
      "CI/CD",
      "Unit & Integration Testing",
      "A/B Testing"
    ],
    type: "work",
  },
  {
    company: "Google",
    title: "Software Engineering Fellow",
    duration: "Nov 2024 - Feb 2025",
    location: "San Francisco, CA",
    description:
      "Refactored UI components for performance and accessibility, shipping features ahead of schedule and collaborating with product and engineering leads to deliver high-impact improvements.",
    bullets: [
      "Refactored UI components, shipping features 3 weeks ahead of a 2-month deadline",
      "Scoped and prioritized UI redesign tasks with product and engineering leads, delivering iterative improvements supporting 5 high-impact feature launches"
    ],
    technologies: ["React", "TypeScript", "UI/UX Optimization", "Agile/Scrum"],
    type: "work",
  },
  {
    company: "Techtonica",
    title: "Full-Stack Software Engineer",
    duration: "Nov 2022 - Dec 2023",
    location: "San Francisco, CA",
    description:
      "Built and scaled React-based curriculum tools for 600+ developers, leading cross-functional teams and ensuring robust production-ready applications with modern front-end and back-end technologies.",
    bullets: [
      "Built and scaled React-based curriculum tools using React, TypeScript, Node.js, RESTful APIs, and PostgreSQL",
      "Designed and implemented OpenAPI specifications, database schemas, queries, and API endpoint logic",
      "Led agile Scrum meetings for a cross-functional team of 14 engineers, driving alignment and ensuring on-time delivery",
      "Championed rollout of React Testing Library, increasing test coverage by 70% and improving application stability"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "OpenAPI", "Agile/Scrum", "Testing"],
    type: "work",
  },
  {
    company: "EDGE in TechTM Initiative at UC Berkeley",
    title: "Software Engineer",
    duration: "Aug 2021 - May 2022",
    location: "Berkeley, CA",
    description:
      "Developed responsive React UI components for web applications visualizing large-scale testing data, while maintaining Python-based data analysis tooling to improve ed-tech insights.",
    bullets: [
      "Developed responsive UI components in React for large-scale data visualization",
      "Maintained Python-based data analysis tooling, identifying correlations with ed-tech integrations and demonstrating significant improvements in test scores (p < 0.001)"
    ],
    technologies: ["React", "Python", "Data Analysis", "UI Development", "Visualization"],
    type: "work",
  },
];

