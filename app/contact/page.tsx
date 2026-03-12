"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Building,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden min-h-screen bg-background">
      {/* Contact Hero Section */}
      <section className="pt-24 pb-32 bg-background relative overflow-hidden">
        {/* Animated Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-primary/5 rounded-full blur-[120px]" 
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-black mb-10 mx-auto uppercase tracking-widest"
            >
              <Sparkles size={16} className="animate-pulse" />
              Contact Us
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.9]"
            >
              LET&apos;S START A <br />
              <span className="text-primary italic text-[0.9em]">CONVERSATION.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              Have a project in mind or just want to learn more? Our team is 
              architecting the next generation of digital excellence.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-40 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-10 md:gap-20">
            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-8 md:space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-10 tracking-tight uppercase">Get in Touch</h2>
                <div className="space-y-8 md:space-y-10">
                  <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 md:gap-6 group">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-1 md:mb-2">Email Us</p>
                      <a href="mailto:hello@nexio.dev" className="text-xl md:text-2xl font-black tracking-tighter hover:text-primary transition-colors text-foreground">
                        hello@nexio.dev
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 md:gap-6 group">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-1 md:mb-2">Call Us</p>
                      <a href="tel:+15551234567" className="text-xl md:text-2xl font-black tracking-tighter hover:text-primary transition-colors text-foreground">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 md:gap-6 group">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-1 md:mb-2">Our Office</p>
                      <address className="not-italic text-xl md:text-2xl font-black tracking-tighter leading-tight text-foreground">
                        123 Innovation Drive,<br />
                        San Francisco, CA 94107
                      </address>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-muted/50 border border-border/70 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-primary opacity-5 group-hover:opacity-10 transition-opacity">
                  <Sparkles size={80} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase text-foreground">Strategy Call</h3>
                <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
                  Book a 30-minute discovery session with our senior architects.
                </p>
                <Button className="w-full h-14 rounded-full text-lg font-black gap-2 transition-transform active:scale-95">
                  Schedule Now <Send size={20} />
                </Button>
              </div>
            </motion.div>

            {/* Premium Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <Card className="p-6 md:p-12 border-border shadow-xl bg-card rounded-3xl md:rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
                <CardContent className="p-0 relative z-10">
                  <form className="grid gap-6 md:gap-10">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-4">
                        <Label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-1 ml-1">Full Name</Label>
                        <div className="relative group">
                          <MessageSquare className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-primary transition-colors" size={20} />
                          <Input id="name" placeholder="John Doe" className="pl-14 h-14 md:h-16 rounded-xl border-border/70 bg-muted/30 focus:bg-background focus:border-primary transition-all font-bold text-base md:text-lg" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-1 ml-1">Email Address</Label>
                        <div className="relative group">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-primary transition-colors" size={20} />
                          <Input id="email" type="email" placeholder="john@company.com" className="pl-14 h-14 md:h-16 rounded-xl border-border/70 bg-muted/30 focus:bg-background focus:border-primary transition-all font-bold text-base md:text-lg" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-4">
                        <Label htmlFor="company" className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-1 ml-1">Company</Label>
                        <div className="relative group">
                          <Building className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-primary transition-colors" size={20} />
                          <Input id="company" placeholder="Tech Corp" className="pl-14 h-14 md:h-16 rounded-xl border-border/70 bg-muted/30 focus:bg-background focus:border-primary transition-all font-bold text-base md:text-lg" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="service" className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-1 ml-1">Interested In</Label>
                        <div className="relative">
                          <select 
                            id="service" 
                            className="w-full h-14 md:h-16 px-6 rounded-xl border border-border/70 bg-muted/30 text-base md:text-lg font-bold ring-offset-background cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all appearance-none"
                          >
                            <option value="" className="bg-background">Select a service</option>
                            <option value="web" className="bg-background font-bold">Web Development</option>
                            <option value="mobile" className="bg-background font-bold">Mobile Apps</option>
                            <option value="cloud" className="bg-background font-bold">Cloud & DevOps</option>
                            <option value="ai" className="bg-background font-bold">AI Solutions</option>
                            <option value="other" className="bg-background font-bold">Other</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                            <Sparkles size={16} className="text-primary/50" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-1 ml-1">Your Vision</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about the disruption you want to build..." 
                        className="min-h-[150px] md:min-h-[200px] rounded-2xl p-6 md:p-8 border-border/70 bg-muted/30 focus:bg-background focus:border-primary transition-all font-bold text-base md:text-lg leading-relaxed" 
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full h-16 md:h-20 rounded-full text-xl md:text-2xl font-black group shadow-2xl shadow-primary/30">
                        Send Message
                        <Send className="ml-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300" size={24} />
                      </Button>
                    </motion.div>
                    
                    <p className="text-center text-xs font-black uppercase tracking-widest text-muted-foreground opacity-50">
                      SECURE & CONFIDENTIAL TRANSACTION
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
