import { motion } from "framer-motion";
import { menuData } from "@/lib/menuData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <header className="text-center mb-16 space-y-4">
          <h1 className="font-display text-5xl md:text-7xl text-primary text-glow">
            Culinary Holograms
          </h1>
          <p className="font-ui text-xl text-muted-foreground tracking-widest">
            SENSORY DINING INTERFACE
          </p>
        </header>

        <Tabs defaultValue={menuData[0].title} className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="bg-transparent border-b border-primary/20 h-auto p-0 space-x-8">
              {menuData.map((category) => (
                <TabsTrigger
                  key={category.title}
                  value={category.title}
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground font-display text-lg uppercase tracking-wider rounded-none px-4 py-2 transition-all hover:text-primary"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuData.map((category) => (
            <TabsContent key={category.title} value={category.title} className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.name}
                    className="glass-card p-6 rounded-xl group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-ui text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="font-ui text-sm text-muted-foreground mt-2 line-clamp-2 group-hover:text-foreground/80 transition-colors">
                            {item.description}
                          </p>
                        )}
                        {item.tag && (
                          <span className="inline-block mt-3 text-xs font-mono text-secondary border border-secondary/30 px-2 py-1 rounded">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-display text-xl text-primary text-glow whitespace-nowrap">
                          {item.price}
                        </span>
                        <div className="w-8 h-8 mt-2 rounded-full border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        </div>
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
  );
}
