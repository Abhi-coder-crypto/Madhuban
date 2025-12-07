import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Leaf, Calendar } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

function HeaderPetals() {
  const petalsData = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: 8 + Math.random() * 6,
      startX: Math.random() * 100,
      duration: 12 + Math.random() * 8,
      delay: Math.random() * 6,
      rotation: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.2,
      type: Math.random() > 0.5 ? 'petal' : 'leaf',
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petalsData.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: `${petal.startX}%`, top: '-20px' }}
          animate={{
            y: ['0px', '80px'],
            x: [0, petal.type === 'leaf' ? 30 : -20, petal.type === 'leaf' ? -20 : 30, 0],
            rotate: [petal.rotation, petal.rotation + (petal.type === 'leaf' ? 180 : -180)],
            opacity: [0, petal.opacity, petal.opacity, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "easeInOut",
          }}
        >
          {petal.type === 'leaf' ? (
            <svg width={petal.size} height={petal.size * 1.4} viewBox="0 0 16 22" fill="none">
              <path 
                d="M8 0 C12 5, 14 10, 8 22 C2 10, 4 5, 8 0" 
                fill="#6FBF5B"
                opacity="0.8"
              />
              <path d="M8 3 L8 18" stroke="#4A9F3F" strokeWidth="0.5" opacity="0.6" />
            </svg>
          ) : (
            <svg width={petal.size} height={petal.size} viewBox="0 0 16 16" fill="none">
              <ellipse cx="8" cy="8" rx="6" ry="8" fill="#E8C46A" opacity="0.6" />
              <ellipse cx="8" cy="10" rx="3" ry="4" fill="#D4A85A" opacity="0.4" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function BreezeEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(111, 191, 91, 0.03) 20%, rgba(232, 196, 106, 0.02) 50%, rgba(111, 191, 91, 0.03) 80%, transparent 100%)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(232, 196, 106, 0.02) 30%, rgba(111, 191, 91, 0.02) 70%, transparent 100%)',
        }}
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
    </div>
  );
}

function VineDecoration({ side }: { side: 'left' | 'right' }) {
  return (
    <motion.div 
      className={cn(
        "absolute top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block",
        side === 'left' ? 'left-2' : 'right-2'
      )}
      animate={{
        rotate: side === 'left' ? [-2, 2, -2] : [2, -2, 2],
        y: ['-50%', 'calc(-50% + 2px)', '-50%'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg 
        width="24" 
        height="40" 
        viewBox="0 0 24 40" 
        fill="none" 
        style={{ 
          opacity: 0.4,
          transform: side === 'right' ? 'scaleX(-1)' : 'none'
        }}
      >
        <path 
          d="M12 0 Q8 10, 12 20 Q16 30, 10 40" 
          stroke="#6FBF5B" 
          strokeWidth="1.5" 
          fill="none"
        />
        <ellipse cx="6" cy="12" rx="5" ry="3" fill="#4A9F3F" opacity="0.7" transform="rotate(-30 6 12)" />
        <ellipse cx="16" cy="24" rx="4" ry="2.5" fill="#6FBF5B" opacity="0.6" transform="rotate(25 16 24)" />
        <ellipse cx="8" cy="32" rx="4" ry="2.5" fill="#4A9F3F" opacity="0.5" transform="rotate(-20 8 32)" />
      </svg>
    </motion.div>
  );
}

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
      scrolled ? "px-4 py-3 md:px-6 md:py-4" : "px-4 py-5 md:px-8 md:py-6"
    )}>
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-7 py-4 transition-all duration-500 relative overflow-hidden",
          scrolled ? "nature-header nature-header-scrolled" : "nature-header"
        )}
      >
        <BreezeEffect />
        <HeaderPetals />
        <VineDecoration side="left" />
        <VineDecoration side="right" />
        
        <Link href="/" className="group flex items-center gap-3 cursor-pointer relative z-10">
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Leaf className="w-5 h-5 text-[#6FBF5B] group-hover:text-[#E8C46A] transition-colors duration-500" aria-hidden="true" />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(111, 191, 91, 0.4) 0%, transparent 70%)',
                filter: 'blur(4px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <span className="font-display text-xl md:text-2xl font-medium tracking-[0.15em] logo-text-glow">
            <span className="text-[#E8C46A] golden-text-glow">M</span>ADHUBAN
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 relative z-10">
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
                  "relative font-body text-sm font-medium tracking-wider px-5 py-2.5 rounded-xl transition-all duration-500 overflow-hidden group nav-item-glow",
                  location === item.path
                    ? "nav-item-active text-[#E8C46A]"
                    : "text-[#F4F1E9]/80 hover:text-[#E8C46A]"
                )}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.name}
                </span>
                <motion.span
                  className="absolute inset-0 nav-hover-shimmer"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {location === item.path && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E8C46A]"
                    style={{
                      boxShadow: '0 0 8px 2px rgba(232, 196, 106, 0.6)',
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="ml-4"
          >
            <Link href="/contact">
              <Button 
                size="sm"
                className="reserve-cta-btn font-body text-sm font-medium tracking-wider px-6 py-2.5 rounded-xl border-0"
                data-testid="nav-reserve-btn"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Reserve Table
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden w-10 h-10 rounded-xl bg-[#6FBF5B]/10 hover:bg-[#6FBF5B]/20 flex items-center justify-center text-[#F4F1E9] hover:text-[#E8C46A] transition-all duration-300 relative z-10"
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
            className="fixed inset-0 bg-[#0B3D2E]/98 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
          >
            <HeaderPetals />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <Leaf className="w-6 h-6 text-[#6FBF5B]" />
                <span className="font-display text-3xl tracking-[0.2em] golden-text-glow text-[#E8C46A]">MADHUBAN</span>
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
                        ? "text-[#E8C46A] golden-text-glow"
                        : "text-[#F4F1E9]/60 hover:text-[#E8C46A]"
                    )}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                    <span className={cn(
                      "absolute -bottom-2 left-0 h-0.5 bg-[#E8C46A] transition-all duration-500",
                      location === item.path ? "w-full" : "w-0 group-hover:w-full"
                    )} 
                    style={{ boxShadow: '0 0 8px rgba(232, 196, 106, 0.5)' }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button 
                    size="lg"
                    className="reserve-cta-btn font-body text-base font-medium tracking-wider px-10 py-6 rounded-xl border-0"
                  >
                    <Calendar className="w-5 h-5 mr-3" />
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
