"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const leaders = [
  {
    name: "David Sterling",
    role: "Founding Partner & CTO",
    bio: "Former lead architect at major tech giants with 15+ years experience in distributed systems and AI.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Elena Rodriguez",
    role: "Head of AI Engineering",
    bio: "Ph.D. in Machine Learning with a focus on natural language processing and computer vision applications.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Michael Chang",
    role: "VP of Product Strategy",
    bio: "Product visionary who has scaled three SaaS startups from seed to Series C and beyond.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Jenkins",
    role: "Director of Cloud Operations",
    bio: "DevOps expert specializing in multi-cloud infrastructure, automation, and high-availability systems.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

export function Leadership() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6"
            >
              The Architects
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]"
            >
              MEET OUR <br />
              <span className="text-foreground italic">LEADERSHIP.</span>
            </motion.h2>
          </div>
          <div className="flex flex-col gap-4 max-w-sm mb-2">
            <p className="text-muted-foreground text-xl font-medium leading-relaxed">
              The visionary minds driving our mission to bridge the gap between 
              complex technology and business success.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="h-full"
            >
              <Card className="h-full border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden group rounded-[2.5rem] hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-10 gap-6">
                    {leader.social.linkedin && (
                      <Link href={leader.social.linkedin} className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary flex items-center justify-center transition-all">
                        <Linkedin size={20} />
                      </Link>
                    )}
                    {leader.social.twitter && (
                      <Link href={leader.social.twitter} className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary flex items-center justify-center transition-all">
                        <Twitter size={20} />
                      </Link>
                    )}
                    {leader.social.github && (
                      <Link href={leader.social.github} className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary flex items-center justify-center transition-all">
                        <Github size={20} />
                      </Link>
                    )}
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{leader.name}</h3>
                      <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mt-1">{leader.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed font-medium">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
