"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Layers, 
  Code2, 
  TestTube2, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

const steps = [
  {
    title: "DISCOVERY",
    description: "We deep dive into your business goals, target audience, and project requirements to set a clear roadmap.",
    icon: Search,
  },
  {
    title: "ARCHITECTURE",
    description: "Designing a scalable and robust technical foundation tailored to your specific performance needs.",
    icon: Layers,
  },
  {
    title: "DEVELOPMENT",
    description: "Our expert engineers build your solution using modern tech stacks and agile methodologies.",
    icon: Code2,
  },
  {
    title: "TESTING",
    description: "Rigorous quality assurance and automated testing to ensure a bug-free and polished product.",
    icon: TestTube2,
  },
  {
    title: "DEPLOYMENT",
    description: "Strategic rollout with CI/CD pipelines to ensure a smooth transition to production.",
    icon: Rocket,
  },
  {
    title: "SCALING",
    description: "Continuous monitoring and optimization to support your growth and evolving business needs.",
    icon: TrendingUp,
  },
];

export function Process() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 px-1"
            >
              How We Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]"
            >
              A PROVEN <br />
              <span className="text-primary italic">WORKFLOW.</span>
            </motion.h2>
          </div>
          <div className="flex flex-col gap-4 max-w-sm mb-2">
            <p className="text-muted-foreground text-xl font-medium leading-relaxed">
              Transparent, repeatable, and results-driven approach to bringing 
              your complex visions to digital life.
            </p>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] border border-border/50 bg-muted/30 hover:border-primary/50 hover:bg-card transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity">
                  0{index + 1}
                </span>
              </div>
              
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500"
              >
                <step.icon size={28} className="text-primary group-hover:text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors uppercase">
                {step.title}
              </h3>
              <p className="text-muted-foreground/80 leading-relaxed font-medium">
                {step.description}
              </p>

              {/* Decorative line for next step connection (except last on row/mobile) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:via-primary/50 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
