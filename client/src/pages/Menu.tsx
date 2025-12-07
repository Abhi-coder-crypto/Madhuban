import { motion } from "framer-motion";
import { menuData } from "@/lib/menuData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Leaf, Drumstick } from "lucide-react";
import Footer from "@/components/Footer";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);

  return (
    <div className="relative">
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
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <span className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground/80">Culinary</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl text-foreground tracking-wide"
            >
              Our Menu
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-body text-muted-foreground/80"
            >
              Fresh flavors crafted with care
            </motion.p>
          </header>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <ScrollArea className="w-full whitespace-nowrap pb-8">
              <TabsList className="bg-transparent border-b border-primary/8 h-auto p-0 inline-flex gap-1 md:gap-3">
                {menuData.map((category) => (
                  <TabsTrigger
                    key={category.title}
                    value={category.title}
                    className="bg-transparent data-[state=active]:bg-primary/8 data-[state=active]:text-primary/90 text-muted-foreground/60 font-body text-sm tracking-wide rounded-xl px-5 py-3 transition-all duration-500 hover:text-foreground/80 whitespace-nowrap"
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
                      className="glass-card p-6 rounded-2xl group"
                      data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-base text-foreground group-hover:text-primary/90 transition-colors duration-500 truncate tracking-wide">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="font-body text-sm text-muted-foreground/60 mt-2 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                          {item.tag && (
                            <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-body text-primary/60 bg-primary/6 px-3 py-1.5 rounded-lg">
                              {item.tag.toLowerCase().includes('veg') ? (
                                <Leaf className="w-3 h-3" />
                              ) : item.tag.toLowerCase().includes('full') ? (
                                <Drumstick className="w-3 h-3" />
                              ) : null}
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <div className="shrink-0">
                          <span className="font-display text-lg text-primary/80 tracking-wide">
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
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
