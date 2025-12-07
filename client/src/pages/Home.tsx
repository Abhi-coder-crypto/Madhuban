import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Leaf, Droplets, UtensilsCrossed, Star, Clock, Sparkles, Heart, Award, ChefHat } from "lucide-react";
import Footer from "@/components/Footer";

import restaurantInterior1 from '@assets/stock_images/restaurant_interior__fde384fa.jpg';
import restaurantInterior2 from '@assets/stock_images/restaurant_interior__614a4651.jpg';
import restaurantInterior3 from '@assets/stock_images/restaurant_interior__270627ae.jpg';
import indianFood1 from '@assets/stock_images/indian_food_platter__4302e642.jpg';
import aquarium1 from '@assets/stock_images/fish_aquarium_restau_3c1118a7.jpg';
import aquarium2 from '@assets/stock_images/fish_aquarium_restau_a361cd98.jpg';
import freshIngredientsImg from '@assets/stock_images/fresh_organic_vegeta_7b6b8c18.jpg';
import uniqueAmbianceImg from '@assets/stock_images/tropical_plants_rest_576923c6.jpg';
import awardWinningImg from '@assets/stock_images/gold_award_trophy_ex_922e8285.jpg';
import aquariumTablesImg from '@assets/image_1765083417100.png';
import jungleInteriorImg from '@assets/image_1765083469747.png';
import livingGreeneryImg from '@assets/stock_images/tropical_green_plant_1c878711.jpg';
import aquariumViewsImg from '@assets/stock_images/colorful_tropical_fi_4df7ed6f.jpg';
import authenticCuisineImg from '@assets/stock_images/indian_food_curry_di_4ec246e1.jpg';
import privateEventsImg from '@assets/stock_images/private_dining_celeb_b0fe9d09.jpg';
import foodImg from '@assets/food_1765083959183.png';
import drinkImg from '@assets/drink_1765083959183.png';
import aquariumImg from '@assets/aqa_1765083959184.png';

const features = [
  {
    image: livingGreeneryImg,
    title: "Living Greenery",
    description: "Dine among lush tropical plants and cascading botanical wonders",
    icon: Leaf
  },
  {
    image: aquariumViewsImg,
    title: "Aquarium Views",
    description: "Elegant aquariums with graceful fish gliding past your table",
    icon: Droplets
  },
  {
    image: authenticCuisineImg,
    title: "Authentic Cuisine",
    description: "Traditional recipes crafted with the freshest seasonal ingredients",
    icon: ChefHat
  },
  {
    image: privateEventsImg,
    title: "Private Events",
    description: "Host memorable celebrations in our enchanting atmosphere",
    icon: Heart
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
    image: aquariumTablesImg
  },
  { 
    title: "Botanical Garden", 
    description: "Lush tropical plants throughout",
    image: jungleInteriorImg
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

const showcaseItems = [
  {
    image: foodImg,
    title: "Signature Appetizers",
    description: "Crispy golden delights served with artisanal chutneys"
  },
  {
    image: drinkImg,
    title: "Refreshing Beverages",
    description: "Handcrafted drinks to complement your meal"
  },
  {
    image: aquariumImg,
    title: "Living Aquariums",
    description: "Exotic fish swimming in crystal-clear waters"
  }
];

export default function Home() {
  return (
    <div className="relative overflow-hidden water-ripple-bg">
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={restaurantInterior1} 
            alt="Madhuban Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>

        <div className="z-10 text-center max-w-5xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center justify-center gap-4"
            >
              <span className="w-20 h-px bg-gradient-to-r from-transparent via-primary/60 to-primary/20" />
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-body text-sm tracking-[0.4em] uppercase text-primary/80">
                Experience Excellence
              </span>
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="w-20 h-px bg-gradient-to-l from-transparent via-primary/60 to-primary/20" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-widest gradient-text text-depth leading-relaxed"
            >
              MADHUBAN
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="relative"
            >
              <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-2xl mx-auto leading-relaxed italic">
                Where culinary artistry meets{" "}
                <span className="text-primary">nature's embrace</span>
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="flex items-center justify-center gap-8 md:gap-12 text-sm text-muted-foreground pt-4 flex-wrap"
            >
              <span className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Leaf className="w-5 h-5 text-primary/80" />
                </div>
                <span className="font-body tracking-wide">Tropical Garden</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <Droplets className="w-5 h-5 text-secondary/80" />
                </div>
                <span className="font-body tracking-wide">Aquarium Dining</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary/80" />
                </div>
                <span className="font-body tracking-wide">Award Winning</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link href="/menu">
              <Button 
                size="lg" 
                className="btn-primary-glow text-sm px-12 py-7 rounded-2xl uppercase tracking-[0.25em] font-body font-semibold"
                data-testid="button-explore-menu"
              >
                <UtensilsCrossed className="w-4 h-4 mr-3" />
                Explore Menu
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="btn-glass text-foreground text-sm px-12 py-7 rounded-2xl uppercase tracking-[0.25em] font-body font-medium"
                data-testid="button-reserve"
              >
                <Heart className="w-4 h-4 mr-3" />
                Reserve a Table
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/50">Scroll to Explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
              <motion.div 
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary/60"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary/70 mb-4">Featured</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-4">
              A Taste of <span className="gradient-text">Madhuban</span>
            </h2>
            <p className="text-muted-foreground/70 max-w-lg mx-auto font-body">
              Discover what makes our dining experience truly unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="glass-card rounded-3xl overflow-hidden group"
              >
                <div className="aspect-[4/3] relative overflow-hidden image-shine">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl text-foreground mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-sm text-muted-foreground/80 font-body">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary/70 mb-5">The Experience</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-6">
              A Sanctuary for the <span className="gradient-text">Senses</span>
            </h2>
            <p className="text-muted-foreground/80 max-w-xl mx-auto font-body leading-relaxed">
              Step into a world where nature embraces you at every turn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card p-8 rounded-2xl text-center group premium-glow"
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-all duration-500 relative">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-primary/60" />
                    <h3 className="font-display text-lg text-foreground tracking-wide">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed font-body">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative z-10">
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
                <p className="font-body text-sm tracking-[0.3em] uppercase text-primary/70 mb-5">Our Philosophy</p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-6">
                  A Culinary <span className="gradient-text">Journey</span>
                </h2>
              </div>
              <p className="text-muted-foreground/80 leading-relaxed font-body text-lg">
                At Madhuban, we believe dining is an art form. Our chefs craft each dish with 
                passion, blending traditional recipes with contemporary elegance. Surrounded 
                by cascading greenery and the gentle presence of aquatic life, every meal becomes 
                a celebration of nature and flavor.
              </p>
              <div className="flex flex-wrap gap-10 pt-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <UtensilsCrossed className="w-6 h-6 text-primary/80" />
                  </div>
                  <div>
                    <p className="font-display text-3xl text-foreground tracking-wide">50+</p>
                    <p className="text-xs text-muted-foreground/60 font-body">Signature Dishes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-secondary/80" />
                  </div>
                  <div>
                    <p className="font-display text-3xl text-foreground tracking-wide">15+</p>
                    <p className="text-xs text-muted-foreground/60 font-body">Years of Excellence</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  className="mt-6 border-primary/30 text-primary hover:bg-primary/10 rounded-xl font-body tracking-wide transition-all duration-500 px-8"
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
              className="glass-card p-10 rounded-3xl luxury-border"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-primary/20 flex-shrink-0 image-shine">
                    <img src={freshIngredientsImg} alt="Fresh Ingredients" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground tracking-wide">Fresh Ingredients</h3>
                    <p className="text-sm text-muted-foreground/60 font-body">Locally sourced, organic produce</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-secondary/20 flex-shrink-0 image-shine">
                    <img src={uniqueAmbianceImg} alt="Unique Ambiance" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground tracking-wide">Unique Ambiance</h3>
                    <p className="text-sm text-muted-foreground/60 font-body">Nature-immersive dining spaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-primary/20 flex-shrink-0 image-shine">
                    <img src={awardWinningImg} alt="Award Winning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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

      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary/70 mb-5">Our Spaces</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-6">
              Explore the <span className="gradient-text">Restaurant</span>
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
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer premium-glow"
                data-testid={`gallery-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden image-shine">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-500 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-muted-foreground/60 font-body">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary/70 mb-5">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-6">
              Guest <span className="gradient-text">Experiences</span>
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
                className="glass-card p-8 rounded-2xl premium-glow"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground/90 mb-8 leading-relaxed font-heading italic text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border border-primary/20">
                    <span className="font-display text-sm text-foreground">{testimonial.initials}</span>
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

      <section className="py-32 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center glass-card p-16 md:p-20 rounded-3xl luxury-border golden-glow"
        >
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-8 animate-pulse" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-6">
            Ready for an <span className="gradient-text">Unforgettable</span> Experience?
          </h2>
          <p className="text-muted-foreground/80 mb-12 max-w-lg mx-auto font-body leading-relaxed text-lg">
            Reserve your table and immerse yourself in the enchanting world of Madhuban
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="btn-primary-glow px-16 py-7 rounded-2xl uppercase tracking-[0.25em] text-sm font-body font-semibold"
              data-testid="button-reserve-cta"
            >
              <Heart className="w-4 h-4 mr-3" />
              Make a Reservation
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
