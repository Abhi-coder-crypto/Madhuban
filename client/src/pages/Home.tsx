import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Leaf, Droplets, UtensilsCrossed, Star, Clock, Users } from "lucide-react";
import Footer from "@/components/Footer";

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
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="z-10 text-center max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex items-center justify-center gap-4 text-muted-foreground"
            >
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <span className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground/80">
                Nature's Sanctuary
              </span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </motion.div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-medium tracking-widest gradient-text text-depth leading-tight">
              MADHUBAN
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="font-heading text-xl md:text-2xl text-muted-foreground/90 max-w-xl mx-auto leading-relaxed italic"
            >
              Where lush greenery embraces the tranquil beauty of water
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex items-center justify-center gap-10 text-sm text-muted-foreground/60 pt-4"
            >
              <span className="flex items-center gap-2.5">
                <Leaf className="w-4 h-4 text-primary/60" />
                <span className="font-body tracking-wide">Tropical Garden</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-primary/30" />
              <span className="flex items-center gap-2.5">
                <Droplets className="w-4 h-4 text-secondary/60" />
                <span className="font-body tracking-wide">Aquarium Dining</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link href="/menu">
              <Button 
                size="lg" 
                className="btn-glass text-primary text-sm px-10 py-7 rounded-2xl uppercase tracking-[0.2em] font-body font-medium hover:scale-[1.02] transition-transform duration-500"
                data-testid="button-explore-menu"
              >
                Explore Menu
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="btn-glass text-muted-foreground hover:text-foreground text-sm px-10 py-7 rounded-2xl uppercase tracking-[0.2em] font-body font-medium hover:scale-[1.02] transition-all duration-500"
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
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary/25"
          >
            <Droplets className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-36 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary/50 mb-5">The Experience</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-6">
              A Sanctuary for the Senses
            </h2>
            <p className="text-muted-foreground/80 max-w-xl mx-auto font-body leading-relaxed">
              Step into a world where nature embraces you at every turn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-8 rounded-2xl text-center group"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-primary/80" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-muted-foreground/70 leading-relaxed font-body">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-36 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <p className="font-body text-sm tracking-[0.25em] uppercase text-primary/50 mb-5">Our Philosophy</p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-6">
                  A Culinary Journey
                </h2>
              </div>
              <p className="text-muted-foreground/80 leading-relaxed font-body">
                At Madhuban, we believe dining is an art form. Our chefs craft each dish with 
                passion, blending traditional recipes with contemporary elegance. Surrounded 
                by cascading greenery and the gentle presence of aquatic life, every meal becomes 
                a celebration of nature and flavor.
              </p>
              <div className="flex flex-wrap gap-10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5 text-primary/80" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground tracking-wide">50+</p>
                    <p className="text-xs text-muted-foreground/60 font-body">Signature Dishes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/8 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary/80" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground tracking-wide">15+</p>
                    <p className="text-xs text-muted-foreground/60 font-body">Years of Excellence</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  className="mt-6 border-primary/20 text-primary/80 hover:bg-primary/8 rounded-xl font-body tracking-wide transition-all duration-500"
                  data-testid="button-learn-more"
                >
                  Learn Our Story
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 rounded-2xl"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-primary/80" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground tracking-wide">Fresh Ingredients</h3>
                    <p className="text-sm text-muted-foreground/60 font-body">Locally sourced, organic produce</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/8 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-secondary/80" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground tracking-wide">Unique Ambiance</h3>
                    <p className="text-sm text-muted-foreground/60 font-body">Nature-immersive dining spaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/8 flex items-center justify-center">
                    <Star className="w-5 h-5 text-gold/80" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground tracking-wide">Award Winning</h3>
                    <p className="text-sm text-muted-foreground/60 font-body">Recognized for culinary excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-36 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary/50 mb-5">Our Spaces</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-6">
              Explore the Restaurant
            </h2>
            <p className="text-muted-foreground/80 max-w-xl mx-auto font-body leading-relaxed">
              Discover the unique environments that make Madhuban unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                data-testid={`gallery-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/6 via-secondary/4 to-primary/8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(90,160,130,0.06),transparent_70%)]" />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <item.icon className="w-14 h-14 text-primary/30 group-hover:text-primary/45 transition-colors duration-500" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary/90 transition-colors duration-500 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-muted-foreground/60 font-body">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-36 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary/50 mb-5">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-6">
              Guest Experiences
            </h2>
            <p className="text-muted-foreground/80 max-w-xl mx-auto font-body leading-relaxed">
              What our guests say about dining at Madhuban
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-8 rounded-2xl"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold/60 text-gold/60" />
                  ))}
                </div>
                <p className="text-muted-foreground/80 mb-8 leading-relaxed font-heading italic text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/15">
                    <span className="font-display text-sm text-foreground/90">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-display text-foreground tracking-wide">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground/50 font-body">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-36 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center glass-card p-16 rounded-3xl"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-muted-foreground/80 mb-12 max-w-lg mx-auto font-body leading-relaxed">
            Reserve your table and immerse yourself in the enchanting world of Madhuban
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-primary/90 hover:bg-primary text-primary-foreground px-14 py-7 rounded-2xl uppercase tracking-[0.2em] text-sm font-body font-medium transition-all duration-500 hover:scale-[1.02]"
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
