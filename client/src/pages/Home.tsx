import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Leaf, Droplets, UtensilsCrossed, Star, Clock, Users } from "lucide-react";
import Footer from "@/components/Footer";

function ScrollTriggeredFish({ yPosition = "20%", direction = 1, scrollOffset = 0 }: { yPosition?: string; direction?: number; scrollOffset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const xPosition = useTransform(
    scrollYProgress,
    [0, 1],
    direction > 0 ? ["-100px", "calc(100vw + 100px)"] : ["calc(100vw + 100px)", "-100px"]
  );
  
  const yFloat = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -15, 0, 15, 0]
  );

  return (
    <motion.div
      ref={ref}
      className="fixed pointer-events-none z-0"
      style={{ 
        top: yPosition, 
        x: xPosition,
        y: yFloat,
      }}
    >
      <motion.svg
        width="60"
        height="30"
        viewBox="0 0 60 30"
        className="opacity-20"
        style={{ transform: direction < 0 ? "scaleX(-1)" : "none" }}
        animate={{ rotate: [0, 3, 0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="25" cy="15" rx="20" ry="10" fill="hsl(158 50% 42%)" />
        <polygon points="45,15 60,5 60,25" fill="hsl(158 50% 42%)" />
        <circle cx="12" cy="12" r="2" fill="hsl(185 45% 6%)" />
      </motion.svg>
    </motion.div>
  );
}

function ScrollTriggeredLeaf({ startX = "10%", size = 24, scrollMultiplier = 1 }: { startX?: string; size?: number; scrollMultiplier?: number }) {
  const { scrollYProgress } = useScroll();
  
  const yPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50px", `${100 * scrollMultiplier}vh`]
  );
  
  const rotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360 * scrollMultiplier]
  );
  
  const xFloat = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 20, -10, 30, -15, 0]
  );

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{ 
        left: startX, 
        top: 0,
        y: yPosition,
        x: xFloat,
        rotate: rotation,
      }}
    >
      <Leaf className="text-primary/25" style={{ width: size, height: size }} />
    </motion.div>
  );
}

const features = [
  {
    icon: Leaf,
    title: "Living Greenery",
    description: "Dine among lush tropical plants and cascading botanical wonders"
  },
  {
    icon: Droplets,
    title: "Aquarium Views",
    description: "Elegant aquariums with graceful fish gliding past your table"
  },
  {
    icon: UtensilsCrossed,
    title: "Authentic Cuisine",
    description: "Traditional recipes crafted with the freshest seasonal ingredients"
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Host memorable celebrations in our enchanting atmosphere"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "Food Critic",
    text: "The most serene dining experience. The aquariums and plants create such a peaceful, luxurious atmosphere.",
    rating: 5
  },
  {
    name: "Raj Malhotra",
    initials: "RM",
    role: "Regular Guest",
    text: "Exquisite food, impeccable service, and the ambiance is truly one of a kind. A hidden gem.",
    rating: 5
  },
  {
    name: "Anita Desai",
    initials: "AD",
    role: "Event Host",
    text: "We celebrated our anniversary here. The fish swimming by our table made it magical.",
    rating: 5
  }
];

const galleryItems = [
  { 
    title: "Aquarium Dining Hall", 
    description: "Floor-to-ceiling tanks with exotic fish",
    icon: Droplets
  },
  { 
    title: "Botanical Garden", 
    description: "Lush tropical plants throughout",
    icon: Leaf
  },
  { 
    title: "Private Cabanas", 
    description: "Intimate spaces for special occasions",
    icon: Users
  },
  { 
    title: "Chef's Table", 
    description: "Watch our masters at work",
    icon: UtensilsCrossed
  },
  { 
    title: "Koi Pond Terrace", 
    description: "Outdoor seating by the water",
    icon: Droplets
  },
  { 
    title: "Zen Lounge", 
    description: "Relax with nature sounds",
    icon: Leaf
  }
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <ScrollTriggeredFish yPosition="15%" direction={1} />
      <ScrollTriggeredFish yPosition="40%" direction={-1} />
      <ScrollTriggeredFish yPosition="65%" direction={1} />
      <ScrollTriggeredFish yPosition="85%" direction={-1} />
      
      <ScrollTriggeredLeaf startX="5%" size={20} scrollMultiplier={1.2} />
      <ScrollTriggeredLeaf startX="25%" size={28} scrollMultiplier={0.8} />
      <ScrollTriggeredLeaf startX="45%" size={22} scrollMultiplier={1.5} />
      <ScrollTriggeredLeaf startX="70%" size={26} scrollMultiplier={1.0} />
      <ScrollTriggeredLeaf startX="90%" size={24} scrollMultiplier={1.3} />
      
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="z-10 text-center max-w-4xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center justify-center gap-3 text-muted-foreground"
            >
              <span className="w-12 h-px bg-primary/40" />
              <span className="font-ui text-sm tracking-[0.3em] uppercase">
                Nature's Sanctuary
              </span>
              <span className="w-12 h-px bg-primary/40" />
            </motion.div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-wide gradient-text text-depth leading-tight">
              MADHUBAN
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-accent text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto leading-relaxed italic"
            >
              Where lush greenery embraces the tranquil beauty of water
            </motion.p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground/70 pt-2">
              <span className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary/50" />
                <span className="font-ui">Tropical Garden</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              <span className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-secondary/50" />
                <span className="font-ui">Aquarium Dining</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link href="/menu">
              <Button 
                size="lg" 
                className="btn-glass text-primary text-base px-10 py-7 rounded-xl uppercase tracking-widest group"
                data-testid="button-explore-menu"
              >
                <span className="flex items-center gap-3">
                  Explore Menu 
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="ghost"
                className="text-muted-foreground hover:text-foreground text-base px-8 py-7 uppercase tracking-widest transition-all duration-300"
                data-testid="button-reserve"
              >
                Reserve a Table
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary/30"
          >
            <Droplets className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="font-ui text-sm tracking-[0.2em] uppercase text-primary/60 mb-4">The Experience</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              A Sanctuary for the Senses
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-ui">
              Step into a world where nature embraces you at every turn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center group"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="font-ui text-sm tracking-[0.2em] uppercase text-primary/60 mb-4">Our Philosophy</p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
                  A Culinary Journey
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed font-ui">
                At Madhuban, we believe dining is an art form. Our chefs craft each dish with 
                passion, blending traditional recipes with contemporary elegance. Surrounded 
                by cascading greenery and the gentle presence of aquatic life, every meal becomes 
                a celebration of nature and flavor.
              </p>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">50+</p>
                    <p className="text-xs text-muted-foreground font-ui">Signature Dishes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">15+</p>
                    <p className="text-xs text-muted-foreground font-ui">Years of Excellence</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  className="mt-4 border-primary/25 text-primary hover:bg-primary/10 rounded-xl"
                  data-testid="button-learn-more"
                >
                  Learn Our Story <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-2xl"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground">Fresh Ingredients</h3>
                    <p className="text-sm text-muted-foreground">Locally sourced, organic produce</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground">Unique Ambiance</h3>
                    <p className="text-sm text-muted-foreground">Nature-immersive dining spaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground">Award Winning</h3>
                    <p className="text-sm text-muted-foreground">Recognized for culinary excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-ui text-sm tracking-[0.2em] uppercase text-primary/60 mb-4">Our Spaces</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              Explore the Restaurant
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-ui">
              Discover the unique environments that make Madhuban unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.04, y: -5 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                data-testid={`gallery-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/15 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(90,183,149,0.1),transparent_70%)]" />
                  <motion.div
                    animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <item.icon className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors duration-300" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-ui text-sm tracking-[0.2em] uppercase text-primary/60 mb-4">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              Guest Experiences
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-ui">
              What our guests say about dining at Madhuban
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold/80 text-gold/80" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed font-accent italic text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border border-primary/20">
                    <span className="font-display text-sm text-foreground">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-display text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-card p-16 rounded-3xl"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto font-ui">
            Reserve your table and immerse yourself in the enchanting world of Madhuban
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 rounded-xl uppercase tracking-widest text-base"
              data-testid="button-reserve-cta"
            >
              Make a Reservation
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
