import { motion } from "framer-motion";
import { menuData } from "@/lib/menuData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Leaf, Drumstick, Sparkles, Star } from "lucide-react";
import Footer from "@/components/Footer";
import { FallingLeaves, Fireflies } from "@/components/NatureAnimations";

function VineSeparator() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#6FBF5B]/30 to-transparent" />
      <svg width="40" height="24" viewBox="0 0 40 24" className="opacity-40">
        <path 
          d="M0 12 Q10 6, 20 12 Q30 18, 40 12" 
          stroke="#6FBF5B" 
          strokeWidth="1.5" 
          fill="none"
        />
        <ellipse cx="12" cy="9" rx="4" ry="3" fill="#4A9F3F" opacity="0.6" transform="rotate(-15 12 9)" />
        <ellipse cx="28" cy="15" rx="4" ry="3" fill="#4A9F3F" opacity="0.6" transform="rotate(15 28 15)" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#6FBF5B]/30 to-transparent" />
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);

  return (
    <div className="relative">
      <FallingLeaves count={8} />
      <Fireflies count={15} />
      
      <div className="min-h-screen pt-40 pb-28 px-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <header className="text-center mb-20 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center gap-4 text-muted-foreground mb-6"
            >
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#6FBF5B]/40" />
              <Leaf className="w-4 h-4 text-[#6FBF5B]/60" />
              <span className="font-body text-sm tracking-[0.35em] uppercase text-[#E8C46A]/80">Culinary Garden</span>
              <Leaf className="w-4 h-4 text-[#6FBF5B]/60" />
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#6FBF5B]/40" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl text-foreground tracking-wide"
              style={{ textShadow: '0 0 30px rgba(232, 196, 106, 0.3)' }}
            >
              Our Menu
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-body text-muted-foreground/80 max-w-md mx-auto"
            >
              Each dish is a journey through nature's finest flavors, crafted with love and served in our enchanted sanctuary
            </motion.p>
          </header>

          <VineSeparator />

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <ScrollArea className="w-full whitespace-nowrap pb-8">
              <TabsList className="bg-transparent border-b border-[#6FBF5B]/10 h-auto p-0 inline-flex gap-1 md:gap-3">
                {menuData.map((category) => (
                  <TabsTrigger
                    key={category.title}
                    value={category.title}
                    className="bg-transparent data-[state=active]:bg-[#6FBF5B]/10 data-[state=active]:text-[#E8C46A] data-[state=active]:shadow-[0_0_15px_rgba(111,191,91,0.2)] text-muted-foreground/60 font-body text-sm tracking-wide rounded-xl px-5 py-3 transition-all duration-500 hover:text-[#E8C46A]/80 hover:bg-[#6FBF5B]/5 whitespace-nowrap"
                    data-testid={`tab-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" className="invisible" />
            </ScrollArea>

            {menuData.map((category) => (
              <TabsContent 
                key={category.title} 
                value={category.title} 
                className="mt-10 animate-in fade-in duration-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.items.map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.5 }}
                      key={item.name}
                      className="menu-card-nature glass-card p-6 rounded-2xl group relative overflow-hidden"
                      data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#6FBF5B]/0 to-[#6FBF5B]/0 group-hover:from-[#6FBF5B]/5 group-hover:to-[#E8C46A]/5 transition-all duration-700 pointer-events-none" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6FBF5B]/0 group-hover:via-[#6FBF5B]/30 to-transparent transition-all duration-700" />
                      
                      <div className="flex justify-between items-start gap-4 relative z-10">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-display text-base text-foreground group-hover:text-[#E8C46A] transition-colors duration-500 truncate tracking-wide">
                              {item.name}
                            </h3>
                            {item.isChefSpecial && (
                              <span className="flex items-center gap-1 text-[#E8C46A]" title="Chef's Recommendation">
                                <Sparkles className="w-3.5 h-3.5" />
                              </span>
                            )}
                            {item.isSignature && (
                              <span className="flex items-center gap-1 text-[#E8C46A]" title="Signature Dish">
                                <Star className="w-3.5 h-3.5 fill-[#E8C46A]" />
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="font-body text-sm text-muted-foreground/60 mt-2 line-clamp-2 leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-500">
                              {item.description}
                            </p>
                          )}
                          {item.tag && (
                            <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-body text-[#6FBF5B]/80 bg-[#6FBF5B]/8 px-3 py-1.5 rounded-lg">
                              {item.tag.toLowerCase().includes('veg') ? (
                                <Leaf className="w-3 h-3" />
                              ) : item.tag.toLowerCase().includes('full') ? (
                                <Drumstick className="w-3 h-3" />
                              ) : item.tag.toLowerCase().includes("chef") ? (
                                <Sparkles className="w-3 h-3" />
                              ) : null}
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <div className="shrink-0">
                          <span className="font-display text-lg text-[#E8C46A]/80 tracking-wide group-hover:text-[#E8C46A] transition-colors duration-500">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <VineSeparator />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mt-16 space-y-4"
          >
            <p className="font-body text-sm text-muted-foreground/50 italic">
              All ingredients are sourced from organic farms and local gardens
            </p>
            <div className="flex items-center justify-center gap-2 text-[#6FBF5B]/40">
              <Leaf className="w-4 h-4" />
              <span className="text-xs tracking-widest uppercase">Farm to Table</span>
              <Leaf className="w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
