"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Process } from "@/components/Process";

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  techs: string[];
  image: string;
}

export function ServiceDetail({
  title,
  subtitle,
  description,
  capabilities,
  techs,
  image
}: ServiceDetailProps) {
  return (
    <div className="flex flex-col gap-0">
      {/* Detail Hero Section */}
      <section className="pt-24 pb-32 bg-background relative overflow-hidden">
        {/* Animated Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" 
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-10"
              >
                <Sparkles size={16} className="animate-pulse" />
                <span className="uppercase tracking-widest text-xs">{subtitle}</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? "text-primary italic" : ""}>{word} </span>
                ))}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed mb-12 font-medium max-w-xl">
                {description}
              </p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="h-16 px-12 rounded-full text-xl font-black shadow-2xl shadow-primary/30" render={<Link href="/contact" />} nativeButton={false}>
                  Get a Free Audit
                  <ArrowRight className="ml-2" size={24} />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={image} 
                alt={title} 
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Overlap (Optional but feels premium) */}
      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.slice(0, 4).map((tech, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              key={tech}
              className="p-6 rounded-3xl bg-card border border-border/50 shadow-xl text-center backdrop-blur-md"
            >
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Standard</p>
              <p className="text-xl font-black tracking-tighter">{tech}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Capabilities & Detailed Breakdown */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
                CORE <br />
                <span className="text-primary italic">CAPABILITIES.</span>
              </h2>
              <div className="space-y-6">
                {capabilities.map((cap, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={cap} 
                    className="flex items-center gap-5 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <CheckCircle2 className="text-primary group-hover:text-white" size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground/90">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <h2 className="text-3xl font-black mb-10 tracking-tight uppercase">Tech Excellence</h2>
              <div className="flex flex-wrap gap-4">
                {techs.map((tech) => (
                  <span key={tech} className="px-6 py-3 rounded-2xl bg-white/5 border border-border/50 text-sm font-black tracking-widest shadow-sm hover:border-primary/50 transition-colors uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Process Section (Reused and Styled in Process.tsx) */}
      <Process />

      {/* Specialized Action Block */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] bg-primary text-primary-foreground text-center relative overflow-hidden group shadow-[0_0_60px_rgba(255,107,53,0.3)]">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/4 w-full h-full bg-white/10 rounded-full blur-[120px]" 
            />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
                LET&apos;S SCALE <br />
                <span className="text-white italic">TOGETHER.</span>
              </h2>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                Schedule a priority call with our senior architects to architect 
                your path to digital dominance.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="h-20 px-16 rounded-full text-2xl font-black shadow-2xl" render={<Link href="/contact" />} nativeButton={false}>
                  Book Strategy Call
                  <ArrowRight className="ml-3" size={32} />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
