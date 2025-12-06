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
      <div className="min-h-screen pt-36 pb-24 px-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <header className="text-center mb-16 space-y-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-3 text-muted-foreground mb-4"
            >
              <span className="w-12 h-px bg-primary/40" />
              <span className="font-ui text-sm tracking-[0.3em] uppercase">Culinary</span>
              <span className="w-12 h-px bg-primary/40" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-foreground"
            >
              Our Menu
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-ui text-muted-foreground"
            >
              Fresh flavors crafted with care
            </motion.p>
          </header>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <ScrollArea className="w-full whitespace-nowrap pb-6">
              <TabsList className="bg-transparent border-b border-primary/10 h-auto p-0 inline-flex gap-1 md:gap-2">
                {menuData.map((category) => (
                  <TabsTrigger
                    key={category.title}
                    value={category.title}
                    className="bg-transparent data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-muted-foreground font-ui text-sm tracking-wide rounded-lg px-4 py-2.5 transition-all duration-300 hover:text-foreground whitespace-nowrap"
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
                className="mt-10 animate-in fade-in duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.items.map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      key={item.name}
                      className="glass-card p-6 rounded-2xl group"
                      data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="font-ui text-sm text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                          {item.tag && (
                            <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-ui text-primary/70 bg-primary/8 px-2.5 py-1 rounded-md">
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
                          <span className="font-display text-lg text-primary">
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
