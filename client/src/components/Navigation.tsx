import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Reserve", path: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "px-4 py-3 md:px-6 md:py-4" : "px-4 py-5 md:px-8 md:py-6"
    )}>
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-7 py-4 transition-all duration-500",
          scrolled ? "glass-panel golden-glow" : "glass-panel"
        )}
      >
        <Link href="/" className="group flex items-center gap-3 cursor-pointer">
          <Sparkles className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
          <span className="font-display text-xl md:text-2xl font-medium tracking-[0.15em] text-foreground group-hover:text-primary transition-colors duration-500">
            <span className="text-primary">M</span>ADHUBAN
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <Link 
                href={item.path}
                className={cn(
                  "relative font-body text-sm font-medium tracking-wider px-5 py-2.5 rounded-xl transition-all duration-500 overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:bg-primary/10",
                  location === item.path
                    ? "nav-pill-active text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                )}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="mobile-menu-toggle"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="font-display text-3xl tracking-[0.2em] gradient-text">MADHUBAN</span>
              </div>
              
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
                >
                  <Link 
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-display text-2xl tracking-widest transition-all duration-500 relative group",
                      location === item.path
                        ? "text-primary"
                        : "text-muted-foreground/60 hover:text-foreground"
                    )}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                    <span className={cn(
                      "absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-500",
                      location === item.path ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
