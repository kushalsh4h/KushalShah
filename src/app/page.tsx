import { ParallaxComponent } from '@/components/ui/parallax-scrolling';
import { BottomNavBar } from '@/components/ui/bottom-nav-bar';
import Timeline_02 from '@/components/ui/timeline-02';
import ProjectsSection from '@/components/ui/projects-section';
import AboutSection from '@/components/ui/about-section';
import ContactSection from '@/components/ui/contact-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#131313] relative">
      <BottomNavBar stickyBottom={true} />
      <ParallaxComponent />
      <div className="mx-auto h-[3px] w-[94%] bg-white/15 rounded-full" />
      <Timeline_02 />
      <div className="mx-auto h-[3px] w-[94%] bg-white/15 rounded-full" />
      <ProjectsSection />
      <div className="mx-auto h-[3px] w-[94%] bg-white/15 rounded-full" />
      <AboutSection />
      <div className="mx-auto h-[3px] w-[94%] bg-white/15 rounded-full" />
      <ContactSection />
    </main>
  );
}