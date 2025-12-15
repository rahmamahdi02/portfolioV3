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
    company: "Leyton CognitX",
    companyLogo: "/images/leytoncognitx_logo.jpeg",
    title: "Software Engineer (Internship)",
    duration: "May 2025 - Jun 2025",
    location: "Casablanca, Morocco",
    description:
      "I worked on a distributed real-time data processing system for financial market analysis, handling massive data streams with minimal latency requirements. The system processes thousands of financial records per second while performing anomaly detection and maintaining high availability.",
    bullets: [

        "Designed microservices architecture with Kafka for scalable, low-latency data ingestion",
        "Implemented distributed task processing using Redis and Celery for real-time workloads",
        "Integrated Elasticsearch for fast indexing and retrieval of financial records",
        "Developed FastAPI endpoints for anomaly detection and automated report generation",
        "Automated report delivery via email for large datasets",
        "Containerized the system with Docker and Docker Compose for easy deployment and scaling",
        "Reduced processing latency and improved reliability for real-time financial analysis",

    ],

    technologies: [
      "Docker",
      "Apache Kafka",
      "Distributed Systems",
      "Redis",
      "Celery Workers",
      "FastAPI",
      "Python",
      "Docker Compose",
      "Networking",
    ],
    type: "work",
    // companyLogo: "/images/companies/leyton-cognitx.png",
  },
];
