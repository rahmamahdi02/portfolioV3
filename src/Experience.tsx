import { experiences } from "./experienceData";
import { ExperienceCard } from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
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
