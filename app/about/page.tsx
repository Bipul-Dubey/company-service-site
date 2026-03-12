import { Leadership } from "@/components/Leadership";
import { CallToAction } from "@/components/CallToAction";
import { 
  Target, 
  Lightbulb, 
  Users, 
  ShieldCheck, 
  Rocket, 
  Heart 
} from "lucide-react";
import ClientAboutContent from "./ClientAboutContent";

export const metadata = {
  title: "About Us - NexIO Technologies",
  description: "Learn more about our mission, vision, and the team driving digital innovation at NexIO.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* Intro Hero Section */}
      <section className="pt-24 pb-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl">
            <div className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6">About Us</div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
              PIONEERING THE <br />
              <span className="text-primary italic">DIGITAL FUTURE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed mb-12 font-medium">
              NexIO was founded on the principle that technology should be an accelerator, not a bottleneck. 
              We combine elite engineering talent with strategic vision to solve the most complex digital challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[3.5rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 text-primary opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={160} />
              </div>
              <h2 className="text-4xl font-black mb-8 tracking-tight uppercase">Our Mission</h2>
              <p className="text-xl text-muted-foreground/90 leading-relaxed relative z-10 font-medium">
                To empower organizations with transformative digital solutions that are scalable, secure, and driven by the latest advancements in AI and cloud computing. We strive to be the bridge between visionary ideas and technical reality.
              </p>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-primary text-primary-foreground shadow-[0_0_50px_rgba(255,107,53,0.3)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 text-white opacity-10 group-hover:opacity-20 transition-opacity">
                <Lightbulb size={160} />
              </div>
              <h2 className="text-4xl font-black mb-8 tracking-tight uppercase">Our Vision</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed relative z-10 font-medium">
                To become the global leader in high-end IT services, recognized for our ability to simplify complexity and deliver software that sets new standards for performance, user experience, and meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client-side animations for Values and Leadership */}
      <ClientAboutContent />
      
      <Leadership />
      
      <CallToAction />
    </div>
  );
}
