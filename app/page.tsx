import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Shine from '@/components/Shine';

import Thinking from '@/components/Thinking';

import BlogSection from '@/components/Blogs';


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-page">
      <div className="relative flex min-h-screen w-full flex-col items-center gap-[44px] overflow-hidden bg-cream px-[16px] py-[8px] tablet:gap-[56px] tablet:px-[40px] desktop:gap-[64px] desktop:px-[60px]">
        <div className="pointer-events-none absolute left-[737px] top-[182px] hidden h-[62px] w-[61px] text-slate tablet:block desktop:hidden">
          <Shine />
        </div>
        <Navbar />
        <div className="-mt-[60px]">
          <Hero />
        </div>
         <AboutSection />
        <ProjectsSection />
        <SkillsSection />
       
        <Thinking/>
       
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
