import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function WorksPage() {
  return (
    <main className="min-h-screen w-full bg-page">
      <div className="mx-auto flex w-[390px] max-w-full flex-col items-center gap-[160px] overflow-hidden px-[20px] py-[160px] tablet:w-[810px] desktop:w-[1200px]">
        <Navbar />
        <ProjectsSection title="Selected Projects" subtitle="Data-Driven Designs" limit={10} />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
