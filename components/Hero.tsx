"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out group-hover:scale-110"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")' }}
        />
        {/* Light overlay with theme-conscious gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 z-10" />
      </div>

      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-40" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] opacity-20" 
        />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 z-30">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-10"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span className="uppercase tracking-widest text-[10px] md:text-xs">Next-Gen Digital Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] md:leading-[1.0] text-foreground"
          >
            BUILDING THE <br />
            <span className="text-primary italic">FUTURE</span> OF IT.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We specialize in high-performance software, AI-driven automation, 
            and cloud-native infrastructure for the modern digital era.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="h-16 px-10 rounded-full text-lg font-black group shadow-2xl shadow-primary/30" render={<Link href="/contact" />} nativeButton={false}>
                Start a Project
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-full text-lg font-bold border-border/50 hover:bg-muted/50 backdrop-blur-sm shadow-xl" render={<Link href="/services" />} nativeButton={false}>
                Browse Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
