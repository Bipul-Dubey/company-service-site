"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Users2, 
  Globe2, 
  Cpu,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business, ensuring performance at any scale.",
    icon: Zap,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Modern Tech Stack",
    description: "Utilizing the latest and most stable technologies for future-proof development.",
    icon: Cpu,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Cloud-Native",
    description: "Expertly crafted for AWS, Azure, and Google Cloud with auto-scaling.",
    icon: Globe2,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "AI-First",
    description: "Integrating intelligent features to automate workflows and enhance UX.",
    icon: BarChart3,
    color: "from-purple-500/20 to-pink-500/20",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 px-1"
            >
              Why Choose Us
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              ELITE <br />
              <span className="text-primary italic">ENGINEERING.</span>
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl mb-12 leading-relaxed font-medium">
              We don't just build software; we engineer resilient solutions that 
              drive massive business outcomes for modern startups.
            </p>
            <div className="space-y-6">
              {[
                "Direct senior architect collaboration",
                "99.9% Up-time cloud guarantee",
                "AI-optimized development flow",
                "Scalable microservices architecture"
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  key={i} 
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <span className="text-lg font-bold tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className={`p-4 rounded-2xl w-fit bg-gradient-to-br ${benefit.color} border border-white/5 mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <benefit.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground/80 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
