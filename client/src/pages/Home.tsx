import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="font-ui text-xl md:text-2xl text-secondary tracking-[0.5em] uppercase animate-pulse">
            Welcome to the Sanctuary
          </h2>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-primary to-primary/20 text-glow drop-shadow-2xl">
            MADHUBAN
          </h1>
          <p className="font-ui text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Where nature and water dine together. <br />
            <span className="text-primary/80">Bioluminescent Jungle</span> • <span className="text-secondary/80">Underwater Dining</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="pt-8"
        >
          <Link href="/menu">
            <Button 
              size="lg" 
              className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 hover:border-primary text-lg px-12 py-8 rounded-none uppercase tracking-widest backdrop-blur-md transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enter the Experience <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="font-mono text-xs text-primary/40 vertical-text tracking-widest">
          COORDINATES: 28.6139° N, 77.2090° E
        </p>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="w-32 h-1 bg-primary/20 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-primary animate-float-delayed" />
        </div>
        <p className="font-mono text-xs text-primary/40 mt-2 text-right">
          SYSTEM STATUS: ONLINE
        </p>
      </div>
    </div>
  );
}
