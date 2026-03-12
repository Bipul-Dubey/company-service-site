import Link from "next/link";
import { Rocket, Twitter, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-development" },
    { name: "Cloud & DevOps", href: "/services/cloud-deployment" },
    { name: "AI Solutions", href: "/services/ai-development" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/about#careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-4 xl:gap-20">
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Rocket size={24} />
              </div>
              <span className="text-3xl font-black tracking-tighter">NEXIO</span>
            </Link>
            <p className="text-lg font-medium text-muted-foreground leading-relaxed max-w-xs">
              Next-generation IT services architecting 
              the future of digital disruption.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" }
              ].map(({ Icon, href }, i) => (
                <Link 
                  key={i} 
                  href={href} 
                  className="h-12 w-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 px-1">Services</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-lg font-bold text-muted-foreground hover:text-foreground transition-all flex items-center group">
                    {link.name}
                    <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 px-1">Explore</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-lg font-bold text-muted-foreground hover:text-foreground transition-all flex items-center group">
                    {link.name}
                    <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 px-1">Connect</h3>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Office</p>
                <address className="not-italic text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  123 Innovation Drive,<br />
                  SF, CA 94107
                </address>
              </div>
              <div className="group cursor-pointer">
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Inquiry</p>
                <a href="mailto:hello@nexio.dev" className="text-lg font-bold hover:text-primary transition-colors flex items-center gap-2">
                  <Mail size={18} className="text-primary" />
                  hello@nexio.dev
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground opacity-60">
            &copy; {new Date().getFullYear()} NEXIO TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <ul className="flex gap-8 text-xs font-black uppercase tracking-widest text-muted-foreground/60">
            {footerLinks.legal.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
