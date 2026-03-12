import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <TechStack />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
