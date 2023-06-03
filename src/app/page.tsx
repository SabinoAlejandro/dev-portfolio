import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProfileSummarySection from '@/components/sections/ProfileSummarySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-inter md:px-12 md:py-20 lg:px-24 lg:py-20'>
        <ProfileSummarySection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
