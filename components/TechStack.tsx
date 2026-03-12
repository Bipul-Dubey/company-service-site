"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const technologies = [
  { name: "React", category: "FRONTEND" },
  { name: "Next.js", category: "FULLSTACK" },
  { name: "Node.js", category: "BACKEND" },
  { name: "Go", category: "BACKEND" },
  { name: "AWS", category: "CLOUD" },
  { name: "Docker", category: "DEVOPS" },
  { name: "Kubernetes", category: "DEVOPS" },
  { name: "Python", category: "AI/DATA" },
  { name: "OpenAI", category: "AI" },
  { name: "PostgreSQL", category: "DATABASE" },
  { name: "TypeScript", category: "LANGUAGE" },
];

export function TechStack() {
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
              Our Stack
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]"
            >
              MODERN <br />
              <span className="text-primary italic">TECHNOLOGIES.</span>
            </motion.h2>
          </div>
          <div className="flex flex-col gap-4 max-w-sm mb-2">
            <p className="text-muted-foreground text-xl font-medium leading-relaxed">
              We leverage industry-leading technologies to build robust, scalable, 
              and high-performance applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 rounded-[2rem] border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all cursor-default text-center group shadow-sm hover:shadow-xl"
            >
              <div className="font-black text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors tracking-tighter">
                {tech.name}
              </div>
              <div className="text-[10px] text-primary font-black uppercase tracking-widest opacity-70">
                {tech.category}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[3rem] p-12 md:p-20 bg-muted/30 border border-border/50 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] group-hover:bg-primary/10 transition-colors" />
          
          <div className="max-w-3xl relative z-10">
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">CUSTOM STACK?</h3>
            <p className="text-muted-foreground text-xl font-medium mb-12 leading-relaxed">
              While these are our core focuses, we are polyglot engineers who adapt to the best tool for the job. 
              Let's talk about your specific requirements.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-lg font-black text-primary-foreground shadow-2xl hover:bg-primary/90 transition-all gap-2"
              >
                Consult Our Experts <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
