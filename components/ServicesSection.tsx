"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Smartphone, Cloud, Bot, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "WEB APPS",
    description: "High-performance web applications built with React, Next.js, and modern architectural patterns.",
    icon: Code2,
    href: "/services/web-development",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "MOBILE APPS",
    description: "Native and cross-platform mobile experiences that engage users and deliver seamless performance.",
    icon: Smartphone,
    href: "/services/mobile-development",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "CLOUD & DEVOPS",
    description: "Scalable cloud infrastructure and automated deployment pipelines for maximum reliability.",
    icon: Cloud,
    href: "/services/cloud-deployment",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "AI SOLUTIONS",
    description: "Integrating powerful artificial intelligence and machine learning into your business workflows.",
    icon: Bot,
    href: "/services/ai-development",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={cardRef}
      className="group perspective-1000"
    >
      <Link href={service.href}>
        <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(255,107,53,0.1)] rounded-[2.5rem] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <CardHeader className="pt-10 pl-10 pr-10">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} border border-white/5 flex items-center justify-center mb-8 shadow-inner`}
            >
              <service.icon className="text-primary" size={32} />
            </motion.div>
            <CardTitle className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-10 pr-10 pb-10">
            <p className="text-muted-foreground/80 leading-relaxed mb-8 font-medium">
              {service.description}
            </p>
            <div className="flex items-center text-primary font-black gap-2 text-xs uppercase tracking-widest group/btn">
              Explore Now 
              <ArrowRight className="transition-transform group-hover/btn:translate-x-2" size={16} />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 px-1"
            >
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]"
            >
              CRAFTING <br />
              <span className="text-primary italic">DIGITAL PRODUCTS.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-sm mb-2"
          >
            <p className="text-muted-foreground text-xl font-medium leading-relaxed">
              Resilient systems that grow with your business, 
              ensuring you stay ahead of the technology curve.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
