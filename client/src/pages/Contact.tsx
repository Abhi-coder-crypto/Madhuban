import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Leaf, TreePine, Sparkles } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import { Fireflies, FallingLeaves } from "@/components/NatureAnimations";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Your Escape Awaits",
      description: "Thank you for choosing Madhuban. We're preparing your forest sanctuary.",
      className: "bg-card border-primary/15 text-foreground",
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      <Fireflies count={20} />
      <FallingLeaves count={6} />
      
      <div className="min-h-screen pt-40 pb-28 px-6 flex items-center justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-14"
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex items-center gap-4 text-muted-foreground mb-6"
              >
                <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#6FBF5B]/40" />
                <Leaf className="w-4 h-4 text-[#6FBF5B]/60" />
                <span className="font-body text-sm tracking-[0.35em] uppercase text-[#E8C46A]/80">Reservations</span>
              </motion.div>
              
              <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-5"
                  style={{ textShadow: '0 0 30px rgba(232, 196, 106, 0.2)' }}>
                Book Your Escape
              </h1>
              
              <p className="font-body text-muted-foreground/80 text-lg leading-relaxed">
                Dine in nature. Let the forest embrace you.
              </p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-heading text-base text-[#6FBF5B]/60 italic mt-4"
              >
                "Where every meal is a journey into the wild"
              </motion.p>
            </div>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6FBF5B]/15 to-[#0B3D2E]/20 flex items-center justify-center text-[#6FBF5B]/80 group-hover:from-[#6FBF5B]/25 group-hover:to-[#0B3D2E]/30 transition-all duration-500 border border-[#6FBF5B]/10 group-hover:border-[#6FBF5B]/25">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2 tracking-wide group-hover:text-[#E8C46A] transition-colors duration-500">Our Sanctuary</h3>
                  <p className="font-body text-sm text-muted-foreground/60 leading-relaxed">123 Garden Grove Lane<br/>Nature District, New Delhi</p>
                  <p className="font-heading text-xs text-[#6FBF5B]/50 italic mt-2">Nestled where the city meets the wild</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6FBF5B]/15 to-[#0B3D2E]/20 flex items-center justify-center text-[#6FBF5B]/80 group-hover:from-[#6FBF5B]/25 group-hover:to-[#0B3D2E]/30 transition-all duration-500 border border-[#6FBF5B]/10 group-hover:border-[#6FBF5B]/25">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2 tracking-wide group-hover:text-[#E8C46A] transition-colors duration-500">Call the Forest</h3>
                  <p className="font-body text-sm text-muted-foreground/60">+91 98765 43210</p>
                  <p className="font-heading text-xs text-[#6FBF5B]/50 italic mt-2">We're here to guide your journey</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6FBF5B]/15 to-[#0B3D2E]/20 flex items-center justify-center text-[#6FBF5B]/80 group-hover:from-[#6FBF5B]/25 group-hover:to-[#0B3D2E]/30 transition-all duration-500 border border-[#6FBF5B]/10 group-hover:border-[#6FBF5B]/25">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2 tracking-wide group-hover:text-[#E8C46A] transition-colors duration-500">Write to Us</h3>
                  <p className="font-body text-sm text-muted-foreground/60">info@madhuban.com</p>
                  <p className="font-heading text-xs text-[#6FBF5B]/50 italic mt-2">Let your wishes take flight</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="nature-frame p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6FBF5B]/5 to-[#E8C46A]/5 pointer-events-none" />
            
            <div className="absolute top-6 right-6 opacity-30">
              <TreePine className="w-8 h-8 text-[#6FBF5B]" />
            </div>
            <div className="absolute bottom-6 left-6 opacity-20">
              <Leaf className="w-6 h-6 text-[#6FBF5B]" />
            </div>
            
            <div className="text-center mb-8">
              <h2 className="font-display text-xl text-[#E8C46A] tracking-wide mb-2">Reserve Your Table</h2>
              <p className="font-body text-sm text-muted-foreground/60">Begin your forest dining experience</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 relative z-10">
              <div className="space-y-3">
                <label className="font-body text-sm text-muted-foreground/70 flex items-center gap-2">
                  <Leaf className="w-3 h-3 text-[#6FBF5B]/50" />
                  Your Name
                </label>
                <Input 
                  {...register("name", { required: true })}
                  placeholder="Enter your name" 
                  className="glass-input bg-background/30 border-[#6FBF5B]/15 text-foreground placeholder:text-muted-foreground/30 focus:border-[#6FBF5B]/40 h-14 rounded-2xl font-body"
                  data-testid="input-name"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <label className="font-body text-sm text-muted-foreground/70 flex items-center gap-2">
                    <Leaf className="w-3 h-3 text-[#6FBF5B]/50" />
                    Date
                  </label>
                  <Input 
                    {...register("date", { required: true })}
                    type="date"
                    className="glass-input bg-background/30 border-[#6FBF5B]/15 text-foreground focus:border-[#6FBF5B]/40 h-14 rounded-2xl font-body"
                    data-testid="input-date"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-body text-sm text-muted-foreground/70 flex items-center gap-2">
                    <Leaf className="w-3 h-3 text-[#6FBF5B]/50" />
                    Guests
                  </label>
                  <Input 
                    {...register("guests", { required: true, min: 1 })}
                    type="number"
                    placeholder="2"
                    min="1"
                    className="glass-input bg-background/30 border-[#6FBF5B]/15 text-foreground focus:border-[#6FBF5B]/40 h-14 rounded-2xl font-body"
                    data-testid="input-guests"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-body text-sm text-muted-foreground/70 flex items-center gap-2">
                  <Leaf className="w-3 h-3 text-[#6FBF5B]/50" />
                  Special Wishes
                </label>
                <Textarea 
                  {...register("message")}
                  placeholder="Tell us about dietary needs or special occasions..." 
                  className="glass-input bg-background/30 border-[#6FBF5B]/15 text-foreground placeholder:text-muted-foreground/30 focus:border-[#6FBF5B]/40 min-h-[120px] rounded-2xl font-body resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-reserve-glow h-16 font-display text-base tracking-[0.2em] rounded-2xl"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-[#F4F1E9]/25 border-t-[#F4F1E9] rounded-full animate-spin" />
                    Preparing Your Table...
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    Reserve Your Escape
                    <Sparkles className="w-5 h-5" />
                  </span>
                )}
              </Button>
              
              <p className="text-center font-heading text-xs text-[#6FBF5B]/50 italic pt-2">
                Let nature be your host tonight
              </p>
            </form>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
