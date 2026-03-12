import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TechStack } from "@/components/TechStack";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: "Our Services - NexIO Technologies",
  description: "Explore our range of high-end IT services, from web and mobile development to cloud-native solutions and AI.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* Services Hero */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-40 bg-background relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
              Expert Solutions for <br /> <span className="text-primary">Every Stage</span> of Growth.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide comprehensive engineering services designed to help modern businesses innovate, scale, and maintain a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesSection />

      {/* Why NexIO for Services */}
      <WhyChooseUs />

      {/* Tech Stack used for services */}
      <TechStack />

      <CallToAction />
    </div>
  );
}
