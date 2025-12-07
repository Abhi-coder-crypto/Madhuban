import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Reserve", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-5 md:px-8 md:py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass-panel rounded-2xl px-7 py-4">
        <Link href="/" className="font-display text-xl md:text-2xl font-medium tracking-[0.15em] text-foreground hover:text-primary/90 transition-colors duration-500 cursor-pointer">
          <span className="text-primary/90">M</span>ADHUBAN
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={cn(
                "font-body text-sm font-medium tracking-wider px-5 py-2.5 rounded-xl transition-all duration-500",
                location === item.path
                  ? "nav-pill-active text-primary/90"
                  : "text-muted-foreground/70 hover:text-foreground hover:bg-white/3"
              )}
              data-testid={`nav-link-${item.name.toLowerCase()}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-foreground hover:text-primary/90 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="mobile-menu-toggle"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex items-center justify-center md:hidden animate-in fade-in duration-500">
          <div className="flex flex-col items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-display text-2xl tracking-widest transition-all duration-500",
                  location === item.path
                    ? "text-primary/90"
                    : "text-muted-foreground/60 hover:text-foreground"
                )}
                data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
