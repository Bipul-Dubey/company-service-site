"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto rounded-[3.5rem] bg-primary p-12 md:p-24 text-center text-primary-foreground shadow-[0_0_50px_rgba(255,107,53,0.2)] overflow-hidden relative group">
          {/* Intense animated background detail */}
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-full h-full bg-white/20 rounded-full blur-[150px]" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
              READY TO <br />
              <span className="text-white italic">THRIVE?</span>
            </h2>
            <p className="text-primary-foreground/90 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the elite businesses scaling with our high-end 
              digital solutions and AI engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="h-16 px-12 rounded-full text-xl font-black group shadow-2xl" render={<Link href="/contact" />} nativeButton={false}>
                  Get Started
                  <Send className="ml-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={24} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="h-16 px-12 rounded-full text-xl font-black bg-transparent border-white/40 text-white hover:bg-white/10 transition-all shadow-xl" render={<Link href="/about" />} nativeButton={false}>
                  Our Story
                  <ArrowRight className="ml-2" size={24} />
                </Button>
              </motion.div>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
              <div className="space-y-1">
                <p className="text-4xl font-black">150+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black">98%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Success</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black">20+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Awards</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black">24/7</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
