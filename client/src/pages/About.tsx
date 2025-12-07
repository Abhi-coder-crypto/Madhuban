import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import Footer from "@/components/Footer";

import aquariumImg from '@assets/aqa_1765083959184.png';
import jungleInteriorImg from '@assets/image_1765083469747.png';
import awardWinningImg from '@assets/stock_images/gold_award_trophy_ex_922e8285.jpg';

export default function About() {
  const features = [
    { image: aquariumImg, title: "Immersive", desc: "360° nature experience" },
    { image: jungleInteriorImg, title: "Organic", desc: "Living green architecture" },
    { image: awardWinningImg, title: "Premium", desc: "Exceptional quality" },
  ];

  return (
    <div className="relative">
      <div className="min-h-screen pt-40 pb-28 px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full space-y-28">
          
          <section className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center gap-4 text-muted-foreground mb-6"
            >
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <span className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground/80">Our Story</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl text-foreground tracking-wide"
            >
              The Journey
            </motion.h1>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              <h2 className="font-display text-2xl text-foreground tracking-wide">
                A Vision of Nature
              </h2>
              <p className="text-muted-foreground/80 leading-relaxed font-body">
                Madhuban began as a dream to bring the serenity of nature into urban dining. 
                Inspired by lush rainforests and the tranquil beauty of underwater worlds, 
                we created a space where diners can escape into a verdant paradise.
              </p>
              <p className="text-muted-foreground/80 leading-relaxed font-body">
                Every corner blooms with life. Tropical plants cascade from living walls, 
                while our elegant aquariums bring the gentle magic of aquatic life to your table.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square glass-card rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0e2a24]" />
              
              <div className="absolute inset-6 rounded-xl border border-primary/8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#102e28] to-[#0a201a]" />
                
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a201a]/80 to-transparent" />
                
                <motion.div 
                  className="absolute bottom-4 left-8 w-16 h-8"
                  animate={{ x: [0, 20, 0], y: [0, -3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-full h-full bg-primary/15 rounded-full blur-sm" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-12 right-12 w-12 h-6"
                  animate={{ x: [0, -15, 0], y: [0, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <div className="w-full h-full bg-secondary/12 rounded-full blur-sm" />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/3 left-1/4 w-10 h-5"
                  animate={{ x: [0, 25, 0], y: [0, -4, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-full h-full bg-primary/10 rounded-full blur-sm" />
                </motion.div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1/4 flex justify-around items-end px-4 pb-2">
                  <motion.div 
                    className="w-4 h-16 bg-gradient-to-t from-primary/20 to-transparent rounded-t-full"
                    animate={{ scaleY: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="w-3 h-12 bg-gradient-to-t from-secondary/15 to-transparent rounded-t-full"
                    animate={{ scaleY: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.div 
                    className="w-5 h-20 bg-gradient-to-t from-primary/18 to-transparent rounded-t-full"
                    animate={{ scaleY: [1, 1.08, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.div 
                    className="w-3 h-10 bg-gradient-to-t from-secondary/12 to-transparent rounded-t-full"
                    animate={{ scaleY: [1, 1.12, 1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Droplets className="w-10 h-10 text-primary/20 mx-auto mb-3" />
                    <p className="font-display text-lg text-foreground/25 tracking-widest">AQUARIUM</p>
                    <p className="font-body text-xs text-muted-foreground/30 mt-1">Dining Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-xs text-muted-foreground/25 font-body tracking-[0.3em]">EST. 2010</p>
              </div>
            </motion.div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card text-center rounded-2xl group overflow-hidden"
                data-testid={`about-feature-${feature.title.toLowerCase()}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl text-foreground mb-3 tracking-wide">{feature.title}</h3>
                  <p className="font-body text-muted-foreground/60 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-6 py-16"
          >
            <p className="font-heading text-2xl md:text-3xl text-muted-foreground/80 italic leading-relaxed">
              "Dining here is not just eating—<br/>
              <span className="text-primary/80">it's becoming one with nature."</span>
            </p>
            <p className="font-body text-xs text-muted-foreground/40 tracking-[0.3em] uppercase">
              — The Founders
            </p>
          </motion.section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
