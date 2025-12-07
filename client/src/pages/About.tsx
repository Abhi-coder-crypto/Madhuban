import { motion } from "framer-motion";
import { Droplets, Leaf, TreePine, Wind } from "lucide-react";
import Footer from "@/components/Footer";
import { Butterflies, Fireflies, FallingLeaves } from "@/components/NatureAnimations";

import aquariumImg from '@assets/aqa_1765083959184.png';
import jungleInteriorImg from '@assets/image_1765083469747.png';
import awardWinningImg from '@assets/stock_images/gold_award_trophy_ex_922e8285.jpg';
import restaurantExteriorImg from '@assets/image_1765114651153.png';

export default function About() {
  const features = [
    { 
      image: aquariumImg, 
      title: "Immersive", 
      desc: "360° nature experience",
      poetic: "Where water and light dance together"
    },
    { 
      image: jungleInteriorImg, 
      title: "Organic", 
      desc: "Living green architecture",
      poetic: "Vines that whisper ancient secrets"
    },
    { 
      image: awardWinningImg, 
      title: "Premium", 
      desc: "Exceptional quality",
      poetic: "Crafted with love, served with pride"
    },
  ];

  return (
    <div className="relative">
      <FallingLeaves count={10} />
      <Butterflies count={6} />
      <Fireflies count={18} />
      
      <div className="min-h-screen pt-40 pb-28 px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full space-y-28">
          
          <section className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex items-center justify-center gap-4 text-muted-foreground mb-6"
            >
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#6FBF5B]/40" />
              <Leaf className="w-4 h-4 text-[#6FBF5B]/60" />
              <span className="font-body text-sm tracking-[0.35em] uppercase text-[#E8C46A]/80">Our Story</span>
              <Leaf className="w-4 h-4 text-[#6FBF5B]/60" />
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#6FBF5B]/40" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl text-foreground tracking-wide"
              style={{ textShadow: '0 0 40px rgba(232, 196, 106, 0.25)' }}
            >
              The Journey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-heading text-xl md:text-2xl text-[#E8C46A]/70 italic max-w-2xl mx-auto leading-relaxed"
            >
              Step through our doors and leave the city behind—
              <br />
              <span className="text-[#6FBF5B]/80">you're entering an enchanted forest</span>
            </motion.p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative py-12 px-8 rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(11, 61, 46, 0.3), rgba(122, 82, 48, 0.2))' }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 opacity-20">
                <TreePine className="w-16 h-16 text-[#6FBF5B]" />
              </div>
              <div className="absolute bottom-4 right-4 opacity-20">
                <Wind className="w-12 h-12 text-[#E8C46A]" />
              </div>
            </div>
            
            <div className="relative z-10 text-center space-y-6">
              <h3 className="font-display text-lg text-[#E8C46A] tracking-widest uppercase">The Senses Awaken</h3>
              <p className="font-body text-muted-foreground/80 leading-loose max-w-2xl mx-auto">
                Feel the cool mist on your skin. Breathe in the fragrance of fresh herbs and blooming jasmine. 
                Hear the gentle trickle of water cascading over moss-covered stones. 
                This is not just a meal—it's an awakening of every sense.
              </p>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-[#6FBF5B]/50 to-transparent" />
                <Leaf className="w-5 h-5 text-[#6FBF5B]/60" />
              </div>
              
              <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wide leading-relaxed">
                A Vision Born of 
                <span className="text-[#E8C46A]"> Wild Dreams</span>
              </h2>
              
              <p className="text-muted-foreground/80 leading-loose font-body text-lg">
                Madhuban began as a dream to bring the serenity of ancient forests into the heart of the city. 
                Inspired by lush rainforests where sunlight filters through emerald canopies, 
                we created a sanctuary where every meal becomes a journey into nature's embrace.
              </p>
              
              <p className="text-muted-foreground/80 leading-loose font-body">
                Every corner blooms with life. Tropical plants cascade from living walls like green waterfalls. 
                Warm amber lights glow like fireflies at dusk. 
                The air carries whispers of earth, rain, and the promise of something magical.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="pt-4"
              >
                <p className="font-heading text-lg text-[#6FBF5B]/70 italic border-l-2 border-[#6FBF5B]/30 pl-6">
                  "Where the forest floor becomes your dining table, 
                  and the canopy becomes your ceiling"
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square glass-card rounded-2xl overflow-hidden group"
            >
              <img 
                src={restaurantExteriorImg} 
                alt="Madhuban Greens Restaurant Exterior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/95 via-[#0B3D2E]/40 to-transparent" />
              <div className="absolute inset-0 border border-[#6FBF5B]/20 rounded-2xl" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <Droplets className="w-10 h-10 text-[#6FBF5B]/60 mx-auto mb-3" />
                <p className="font-display text-xl text-[#F4F1E9] tracking-widest">MADHUBAN</p>
                <p className="font-body text-sm text-[#E8C46A]/80 mt-1">Where Nature Dines</p>
                <p className="text-xs text-[#6FBF5B]/50 font-body tracking-[0.3em] mt-4">EST. 2010</p>
              </div>
            </motion.div>
          </div>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-4 py-8"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-20 h-px bg-gradient-to-r from-transparent via-[#6FBF5B]/30 to-transparent" />
              <Leaf className="w-5 h-5 text-[#6FBF5B]/40" />
              <span className="w-20 h-px bg-gradient-to-r from-transparent via-[#6FBF5B]/30 to-transparent" />
            </div>
            <h3 className="font-display text-xl text-[#E8C46A]/80 tracking-widest uppercase">Experience the Magic</h3>
          </motion.section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="glass-card text-center rounded-2xl group overflow-hidden"
                data-testid={`about-feature-${feature.title.toLowerCase()}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                </div>
                <div className="p-8 space-y-3">
                  <h3 className="font-display text-xl text-foreground tracking-wide group-hover:text-[#E8C46A] transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground/70 text-sm">{feature.desc}</p>
                  <p className="font-heading text-xs text-[#6FBF5B]/60 italic pt-2">{feature.poetic}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center space-y-8 py-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B3D2E]/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <p className="font-heading text-2xl md:text-3xl text-muted-foreground/80 italic leading-relaxed">
                "Dining here is not just eating—<br/>
                <span className="text-[#E8C46A]">it's becoming one with nature.</span>
              </p>
              <p className="font-heading text-xl text-[#6FBF5B]/60 italic mt-4">
                It's feeling the warmth of earth beneath your feet,
                <br />
                the breath of the forest on your skin."
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-2 pt-6">
              <Leaf className="w-4 h-4 text-[#6FBF5B]/40" />
              <p className="font-body text-xs text-muted-foreground/40 tracking-[0.3em] uppercase">
                — The Founders
              </p>
              <Leaf className="w-4 h-4 text-[#6FBF5B]/40" />
            </div>
          </motion.section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
