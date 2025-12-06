import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-16">
        
        <section className="text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-secondary text-glow-purple"
          >
            The Story
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-1 bg-secondary mx-auto"
          />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-ui text-3xl font-bold text-primary uppercase tracking-widest">
              Origins of Bioluminescence
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Madhuban isn't just a restaurant; it's a simulation of a world that could have been. 
              Inspired by the deepest trenches of the Mariana and the densest canopies of the Amazon, 
              we merged aquatic fluidity with terrestrial flora.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Every table is an ecosystem. Every light is a living organism. 
              Our chefs don't just cook; they synthesize flavors from the ether.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square glass-panel rounded-2xl overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
            <div className="font-display text-9xl text-white/10">M</div>
            {/* Placeholder for a visual if needed */}
          </motion.div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Immersive", desc: "360° sensory overload" },
             { title: "Organic", desc: "Living, breathing architecture" },
             { title: "Ethereal", desc: "Dining beyond reality" }
           ].map((feature, i) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="glass-card p-8 text-center rounded-xl border-t-2 border-primary/20"
             >
               <h3 className="font-display text-2xl text-foreground mb-2">{feature.title}</h3>
               <p className="font-ui text-primary/60 uppercase tracking-widest text-sm">{feature.desc}</p>
             </motion.div>
           ))}
        </section>

      </div>
    </div>
  );
}
