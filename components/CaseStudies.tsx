"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "Fintech Revolution",
    category: "BANKING TECH",
    description: "A secure, scalable banking dashboard with real-time analytics and AI-driven fraud detection.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "AWS"],
    href: "/services",
  },
  {
    title: "HealthConnect",
    category: "TELEMEDICINE",
    description: "Telemedicine platform connecting patients with specialists via encrypted video and health tracking.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Go"],
    href: "/services",
  },
  {
    title: "SupplyChain AI",
    category: "LOGISTICS AI",
    description: "Optimizing global logistics using predictive modeling and cloud-native microservices.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "Kubernetes", "OpenAI"],
    href: "/services",
  },
];

export function CaseStudies() {
  return (
    <section className="py-32 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6"
            >
              Recent Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]"
            >
              SELECTED <br />
              <span className="text-foreground italic">SUCCESS STORIES.</span>
            </motion.h2>
          </div>
          <div className="flex flex-col gap-6 items-start md:items-end">
            <p className="text-muted-foreground text-xl font-medium leading-relaxed max-w-sm text-left md:text-right">
              Strategic solutions delivered to forward-thinking companies worldwide.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
              >
                View All Projects <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] mb-8 border border-border/50 shadow-2xl bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <ArrowRight className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute top-8 left-8">
                  <Badge className="bg-primary text-primary-foreground font-black text-[10px] tracking-[0.2em] px-4 py-1.5 rounded-full border-none shadow-lg">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4 px-2">
                <h3 className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
