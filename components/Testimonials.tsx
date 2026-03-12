"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CTO AT FINEDGE",
    quote: "NexIO transformed our legacy systems into a high-performance cloud architecture. Their expertise in AI integration gave us a significant competitive edge.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "PRODUCT MANAGER AT HEALTHSYNC",
    quote: "The mobile app NexIO built for us is world-class. User engagement increased by 40% within the first three months of launch.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Marcus Miller",
    role: "CEO AT LOGISMART",
    quote: "Working with NexIO felt like having an in-house elite engineering team. Their structured process and fast delivery are unmatched in the industry.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
];

export function Testimonials() {
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
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]"
            >
              TRUSTED BY <br />
              <span className="text-foreground italic">VISIONARY LEADERS.</span>
            </motion.h2>
          </div>
          <div className="flex flex-col gap-4 max-w-sm">
            <p className="text-muted-foreground text-xl font-medium leading-relaxed">
              Don't just take our word for it. Hear from those building the future with us.
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] border border-border/50 bg-card/40 backdrop-blur-sm relative group hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="absolute top-8 right-10 text-primary w-12 h-12 opacity-10 group-hover:opacity-30 transition-opacity" />
              
              <div className="flex flex-col h-full">
                <p className="text-xl leading-relaxed mb-10 relative z-10 font-medium text-foreground/90 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto flex items-center gap-5">
                  <Avatar className="h-14 w-14 border-2 border-primary/20 shadow-xl">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-black text-lg leading-tight tracking-tight">{testimonial.name}</h4>
                    <p className="text-xs text-primary font-black uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
