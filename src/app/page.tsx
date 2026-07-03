import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { OurClientsSection } from '@/components/sections/OurClientsSection';
import { AboutSection } from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <WhyChooseUsSection />
      <OurClientsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
}
