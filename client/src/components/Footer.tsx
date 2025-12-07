import { Link } from "wouter";
import { Leaf, Phone, MapPin, Clock, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-primary/8 bg-background/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <Leaf className="w-5 h-5 text-primary/70" />
              <span className="font-display text-xl text-foreground tracking-widest">MADHUBAN</span>
            </div>
            <p className="text-muted-foreground/70 text-sm leading-relaxed font-body">
              An immersive dining experience where lush greenery meets aquatic wonder. 
              Dine surrounded by nature's finest elements.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <a href="#" className="text-muted-foreground/50 hover:text-primary/70 transition-colors duration-500" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground/50 hover:text-primary/70 transition-colors duration-500" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:info@madhuban.com" className="text-muted-foreground/50 hover:text-primary/70 transition-colors duration-500" data-testid="link-email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-base text-foreground tracking-wide">Navigation</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-muted-foreground/60 hover:text-primary/70 transition-colors duration-500 text-sm font-body" data-testid="footer-link-home">
                Home
              </Link>
              <Link href="/menu" className="text-muted-foreground/60 hover:text-primary/70 transition-colors duration-500 text-sm font-body" data-testid="footer-link-menu">
                Our Menu
              </Link>
              <Link href="/about" className="text-muted-foreground/60 hover:text-primary/70 transition-colors duration-500 text-sm font-body" data-testid="footer-link-about">
                About Us
              </Link>
              <Link href="/contact" className="text-muted-foreground/60 hover:text-primary/70 transition-colors duration-500 text-sm font-body" data-testid="footer-link-contact">
                Reservations
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-base text-foreground tracking-wide">Hours</h3>
            <div className="space-y-4 text-sm text-muted-foreground/60 font-body">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary/40" />
                <span>Mon - Thu: 11 AM - 10 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary/40" />
                <span>Fri - Sat: 11 AM - 11 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary/40" />
                <span>Sunday: 12 PM - 9 PM</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-base text-foreground tracking-wide">Contact</h3>
            <div className="space-y-4 text-sm text-muted-foreground/60 font-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" />
                <span>123 Garden Grove Lane, Nature District, New Delhi</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary/40" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary/40" />
                <span>info@madhuban.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/40 font-body">
            © 2025 Madhuban Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground/40 font-body">
            <span className="hover:text-muted-foreground/60 cursor-pointer transition-colors duration-500">Privacy Policy</span>
            <span className="hover:text-muted-foreground/60 cursor-pointer transition-colors duration-500">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
