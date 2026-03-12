'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-xl transition-transform group-hover:rotate-12">
                <Rocket size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">NexIO</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 bg-muted/30 px-6 py-2 rounded-full border border-border/50 backdrop-blur-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all hover:text-primary relative group",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all group-hover:w-full opacity-50" />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="default" className="rounded-full px-6 font-bold shadow-lg shadow-primary/20" render={<Link href="/contact" />} nativeButton={false}>
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-10 w-10")} nativeButton={true}>
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Access pages within the website.
                  </SheetDescription>
                  <div className="flex flex-col gap-8 mt-8">
                    <Link href="/" className="flex items-center gap-2">
                      <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                        <Rocket size={20} />
                      </div>
                      <span className="text-xl font-bold tracking-tight">NexIO</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "text-lg font-bold transition-all hover:pl-2 hover:text-primary border-l-2 border-transparent hover:border-primary",
                            pathname === item.href
                              ? "text-primary border-primary pl-2"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                    <Button className="w-full mt-4 rounded-full font-bold" render={<Link href="/contact" />} nativeButton={false}>
                      Get Started
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
