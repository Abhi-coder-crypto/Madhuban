import { motion } from "framer-motion";
import { Leaf, Droplets, Star } from "lucide-react";
import Footer from "@/components/Footer";

export default function About() {
  const features = [
    { icon: Droplets, title: "Immersive", desc: "360° nature experience" },
    { icon: Leaf, title: "Organic", desc: "Living green architecture" },
    { icon: Star, title: "Premium", desc: "Exceptional quality" },
  ];

  return (
    <div className="relative">
      <div className="min-h-screen pt-36 pb-24 px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full space-y-24">
          
          <section className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-3 text-muted-foreground mb-4"
            >
              <span className="w-12 h-px bg-primary/40" />
              <span className="font-ui text-sm tracking-[0.3em] uppercase">Our Story</span>
              <span className="w-12 h-px bg-primary/40" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-foreground"
            >
              The Journey
            </motion.h1>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl text-foreground">
                A Vision of Nature
              </h2>
              <p className="text-muted-foreground leading-relaxed font-ui">
                Madhuban began as a dream to bring the serenity of nature into urban dining. 
                Inspired by lush rainforests and the tranquil beauty of underwater worlds, 
                we created a space where diners can escape into a verdant paradise.
              </p>
              <p className="text-muted-foreground leading-relaxed font-ui">
                Every corner blooms with life. Tropical plants cascade from living walls, 
                while our elegant aquariums bring the gentle magic of aquatic life to your table.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square glass-card rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="font-display text-[10rem] text-foreground/5 select-none">M</div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-28 h-28 rounded-full border border-primary/15" />
                  </motion.div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-xs text-muted-foreground/40 font-ui tracking-widest">EST. 2010</p>
              </div>
            </motion.div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 text-center rounded-2xl group"
                data-testid={`about-feature-${feature.title.toLowerCase()}`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="font-ui text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </section>

          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-6 py-12"
          >
            <p className="font-accent text-2xl md:text-3xl text-muted-foreground italic leading-relaxed">
              "Dining here is not just eating—<br/>
              <span className="text-primary">it's becoming one with nature."</span>
            </p>
            <p className="font-ui text-xs text-muted-foreground/50 tracking-widest uppercase">
              — The Founders
            </p>
          </motion.section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
