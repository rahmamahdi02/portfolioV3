import { experiences } from "./experienceData";
import { ExperienceCard } from "./ExperienceCard";
import Underline from "./Underline";


const Experience = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold font-mono text-center mb-8">Professional Experience</h2>
      <p className="text-muted-foreground max-w-2xl pb-10 text-center text-lg">
      My recent work includes <Underline>shipping UI features to 100+ million plus users at Playstation </Underline>(Sony Interactive Entertainment), delivering performance-optimized and accessible UI redesigns for Google’s Tech Equity Collective, and building scalable curriculum tools for <Underline>open-source education initiatives used by 600+ developers.</Underline>
        </p>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            duration={exp.duration}
            description={exp.description}
            technologies={exp.technologies}
            type={exp.type}
            companyLogo={exp.companyLogo}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
