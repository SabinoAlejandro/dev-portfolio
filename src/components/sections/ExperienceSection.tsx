import ExperienceCard from '../ExperienceCard';
import HeaderSection from './HeaderSection';
import Section from './Section';

const ExperienceSection = () => {
  const experiences = [
    {
      rangeDate: 'from ',
      name: 'Name',
      description: 'Description',
      techList: [],
    },
    {
      rangeDate: 'from ',
      name: 'Name2',
      description: 'Description2',
      techList: [],
    },
  ];

  return (
    <Section headerName='Experience'>
      <ol>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.name} {...experience} />
        ))}
      </ol>
    </Section>
  );
};

export default ExperienceSection;
