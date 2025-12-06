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
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel rounded-full px-8 py-3">
        <Link href="/" className="font-display text-2xl md:text-3xl font-bold text-primary tracking-wider text-glow hover:scale-105 transition-transform cursor-pointer">
            MADHUBAN
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={cn(
                "font-ui text-lg tracking-widest uppercase transition-all duration-300 hover:text-primary hover:text-glow",
                location === item.path
                  ? "text-primary text-glow border-b-2 border-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden animate-in fade-in slide-in-from-top-10">
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-display text-3xl tracking-widest uppercase transition-all duration-300",
                  location === item.path
                    ? "text-primary text-glow"
                    : "text-muted-foreground hover:text-foreground"
                )}
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
