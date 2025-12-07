import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Leaf, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "px-4 py-2 md:px-6 md:py-3" : "px-4 py-4 md:px-8 md:py-5"
    )}>
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "max-w-5xl mx-auto flex items-center justify-between transition-all duration-500 relative",
          scrolled 
            ? "rounded-full px-6 py-2.5 elegant-header-scrolled" 
            : "rounded-full px-8 py-3 elegant-header"
        )}
      >
        <Link href="/" className="group flex items-center gap-2.5 cursor-pointer relative z-10">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Leaf className="w-5 h-5 text-[#6FBF5B] group-hover:text-[#E8C46A] transition-colors duration-300" aria-hidden="true" />
          </motion.div>
          <span className="font-display text-lg md:text-xl font-medium tracking-[0.12em] text-[#F4F1E9]">
            <span className="text-[#E8C46A]">M</span>ADHUBAN
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 relative z-10">
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
                  "relative font-body text-sm font-medium tracking-wide py-1.5 transition-all duration-300",
                  location === item.path
                    ? "text-[#E8C46A]"
                    : "text-[#F4F1E9]/70 hover:text-[#F4F1E9]"
                )}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
                {location === item.path && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#E8C46A] rounded-full"
                    style={{
                      boxShadow: '0 0 6px rgba(232, 196, 106, 0.5)',
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="hidden md:block"
        >
          <Link href="/contact">
            <Button 
              size="sm"
              className="nav-reserve-btn font-body text-xs font-semibold tracking-wider px-5 py-2 rounded-full border-0"
              data-testid="nav-reserve-btn"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Reserve
            </Button>
          </Link>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden w-9 h-9 rounded-full bg-[#6FBF5B]/10 hover:bg-[#6FBF5B]/20 flex items-center justify-center text-[#F4F1E9] hover:text-[#E8C46A] transition-all duration-300 relative z-10"
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
                <X size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={18} />
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
            className="fixed inset-0 bg-[#0B3D2E]/98 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <Leaf className="w-6 h-6 text-[#6FBF5B]" />
                <span className="font-display text-2xl tracking-[0.15em] text-[#E8C46A]">MADHUBAN</span>
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
                      "font-display text-xl tracking-widest transition-all duration-300 relative group",
                      location === item.path
                        ? "text-[#E8C46A]"
                        : "text-[#F4F1E9]/60 hover:text-[#E8C46A]"
                    )}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-[#E8C46A] transition-all duration-300 rounded-full",
                      location === item.path ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button 
                    size="lg"
                    className="nav-reserve-btn font-body text-sm font-semibold tracking-wider px-8 py-5 rounded-full border-0"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Reserve Table
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
