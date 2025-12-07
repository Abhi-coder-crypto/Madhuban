import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Leaf, Droplets, UtensilsCrossed, Star, Clock, Users } from "lucide-react";
import Footer from "@/components/Footer";

import restaurantInterior1 from '@assets/stock_images/restaurant_interior__fde384fa.jpg';
import restaurantInterior2 from '@assets/stock_images/restaurant_interior__614a4651.jpg';
import restaurantInterior3 from '@assets/stock_images/restaurant_interior__270627ae.jpg';
import indianFood1 from '@assets/stock_images/indian_food_platter__4302e642.jpg';
import aquarium1 from '@assets/stock_images/fish_aquarium_restau_3c1118a7.jpg';
import aquarium2 from '@assets/stock_images/fish_aquarium_restau_a361cd98.jpg';

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
    name: "Aniket Sawant",
    initials: "AS",
    role: "Verified Guest",
    text: "Eating veg Spicy food with quality Hygiene and natural ambient atmosphere. Totally satisfying",
    rating: 5
  },
  {
    name: "Nilesh Kadam",
    initials: "NK",
    role: "Verified Guest",
    text: "Must try this place - veg and non veg both are delicious. Staff is courteous.",
    rating: 5
  },
  {
    name: "Sushant Saka",
    initials: "SS",
    role: "Verified Guest",
    text: "Everything was good - food, service and staff. Highly recommend Madhuban Green!",
    rating: 5
  }
];

const galleryItems = [
  { 
    title: "Aquarium Dining Hall", 
    description: "Floor-to-ceiling tanks with exotic fish",
    image: aquarium1
  },
  { 
    title: "Botanical Garden", 
    description: "Lush tropical plants throughout",
    image: restaurantInterior1
  },
  { 
    title: "Private Cabanas", 
    description: "Intimate spaces for special occasions",
    image: restaurantInterior2
  },
  { 
    title: "Signature Cuisine", 
    description: "Authentic Indian flavors",
    image: indianFood1
  },
  { 
    title: "Outdoor Terrace", 
    description: "Al fresco dining experience",
    image: restaurantInterior3
  },
  { 
    title: "Exotic Fish Collection", 
    description: "Beautiful aquatic companions",
    image: aquarium2
  }
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={restaurantInterior1} 
            alt="Madhuban Restaurant Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
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
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
