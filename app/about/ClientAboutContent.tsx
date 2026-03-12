"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Rocket, 
  Heart, 
  Users, 
  Zap, 
  Globe 
} from "lucide-react";

const values = [
  {
    title: "ENGINEERING EXCELLENCE",
    description: "We don't settle for 'good enough'. We build robust, elegant code that stands the test of time.",
    icon: Zap,
  },
  {
    title: "RADICAL TRANSPARENCY",
    description: "Open communication and honest feedback are at the core of every client partnership.",
    icon: ShieldCheck,
  },
  {
    title: "INNOVATION FIRST",
    description: "We stay at the bleeding edge so you don't have to, bringing the latest tech to your business.",
    icon: Rocket,
  },
  {
    title: "HUMAN-CENTRIC",
    description: "Technology should serve people. We prioritize accessibility and intuitive user experiences.",
    icon: Users,
  },
  {
    title: "GLOBAL IMPACT",
    description: "We build solutions that transcend borders and solve real-world problems on a global scale.",
    icon: Globe,
  },
  {
    title: "CLIENT OBSESSION",
    description: "Your success is our success. We are deeply committed to achieving your business objectives.",
    icon: Heart,
  },
];

export default function ClientAboutContent() {
  return (
    <>
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
                Core Values
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]"
              >
                DRIVEN BY <br />
                <span className="text-foreground italic">PRINCIPLES.</span>
              </motion.h2>
            </div>
            <div className="flex flex-col gap-4 max-w-sm mb-2">
              <p className="text-muted-foreground text-xl font-medium leading-relaxed">
                These principles guide every decision we make and every line of code we write.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="mb-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <value.icon size={28} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors uppercase">
                  {value.title}
                </h3>
                <p className="text-muted-foreground/80 leading-relaxed font-medium">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-32 bg-background border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Engineers", value: "80+" },
              { label: "Countries Served", value: "25+" },
              { label: "Satisfied Clients", value: "200+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-6xl md:text-8xl font-black text-primary mb-4 tracking-tighter group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.3em] font-black text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
