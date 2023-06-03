import { GITHUB_URL, GMAIL_URL, LINKEDIN_URL } from '@/utils/constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import GmailIcon from '@/components/svg/gmail';
import Section from './Section';

const iconClasses = 'h-6 w-6 hover:text-teal-500 hover:scale-125 duration-300';

const ProfileSummarySection = () => (
  <Section>
    <div className='mb-8'>
      <h1 className='font-bold tracking-tight sm:text-5xl'>Sabino Alejandro</h1>
      <h1 className='font-bold tracking-tight sm:text-5xl'>
        Arambula Rodriguez
      </h1>
      <h2 className='mt-2'>Passionate heart Software Engineer</h2>
      <p className='mt-5'>
        I am a highly motivated and experienced Full Stack Developer with a
        passion for creating innovative and efficient solutions. With a solid
        foundation in software development and a strong focus on user
        experience, I strive to deliver high-quality applications that meet both
        client requirements and industry standards. I am constantly seeking new
        challenges and opportunities to expand my skill set and stay up-to-date
        with the latest technologies.
      </p>
    </div>
    <div className='mb-11'>
      <ul arial-label='Social media list' className='flex'>
        <li arial-label='Github' className='mr-5'>
          <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className={iconClasses} icon={faGithub} />
          </a>
        </li>
        <li arial-label='Linkedin' className='mr-5'>
          <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className={iconClasses} icon={faLinkedin} />
          </a>
        </li>
        <li arial-label='Gmail' className='mr-5'>
          <a href={GMAIL_URL} target='_blank' rel='noopener noreferrer'>
            <GmailIcon className={iconClasses} />
          </a>
        </li>
      </ul>
    </div>
  </Section>
);

export default ProfileSummarySection;
