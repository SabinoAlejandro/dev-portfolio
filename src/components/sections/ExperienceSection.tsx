import ExperienceCard from '../ExperienceCard';
import HeaderSection from './HeaderSection';

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
    <>
      <HeaderSection>
        <h2 className='uppercase'>Experience</h2>
      </HeaderSection>

      <ol>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.name} {...experience} />
        ))}
      </ol>
    </>
  );
};

export default ExperienceSection;
