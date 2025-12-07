import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Leaf } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Reservation Received",
      description: "Thank you for choosing Madhuban. We'll confirm your reservation shortly.",
      className: "bg-card border-primary/15 text-foreground",
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="relative">
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
                <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
                <span className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground/80">Contact</span>
              </motion.div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-5">
                Make a Reservation
              </h1>
              <p className="font-body text-muted-foreground/80">
                Reserve your table in our green sanctuary.
              </p>
            </div>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary/80 group-hover:bg-primary/12 transition-colors duration-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2 tracking-wide">Location</h3>
                  <p className="font-body text-sm text-muted-foreground/60 leading-relaxed">123 Garden Grove Lane<br/>Nature District, New Delhi</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary/80 group-hover:bg-primary/12 transition-colors duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2 tracking-wide">Phone</h3>
                  <p className="font-body text-sm text-muted-foreground/60">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary/80 group-hover:bg-primary/12 transition-colors duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2 tracking-wide">Email</h3>
                  <p className="font-body text-sm text-muted-foreground/60">info@madhuban.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card p-10 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-secondary/3 pointer-events-none" />
            <div className="absolute top-8 right-8">
              <Leaf className="w-5 h-5 text-primary/20" />
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 relative z-10">
              <div className="space-y-3">
                <label className="font-body text-sm text-muted-foreground/70">Your Name</label>
                <Input 
                  {...register("name", { required: true })}
                  placeholder="Enter your name" 
                  className="glass-input bg-background/30 border-primary/15 text-foreground placeholder:text-muted-foreground/30 focus:border-primary/30 h-14 rounded-2xl font-body"
                  data-testid="input-name"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <label className="font-body text-sm text-muted-foreground/70">Date</label>
                  <Input 
                    {...register("date", { required: true })}
                    type="date"
                    className="glass-input bg-background/30 border-primary/15 text-foreground focus:border-primary/30 h-14 rounded-2xl font-body"
                    data-testid="input-date"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-body text-sm text-muted-foreground/70">Guests</label>
                  <Input 
                    {...register("guests", { required: true, min: 1 })}
                    type="number"
                    placeholder="2"
                    min="1"
                    className="glass-input bg-background/30 border-primary/15 text-foreground focus:border-primary/30 h-14 rounded-2xl font-body"
                    data-testid="input-guests"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-body text-sm text-muted-foreground/70">Special Requests</label>
                <Textarea 
                  {...register("message")}
                  placeholder="Any dietary restrictions or special occasions..." 
                  className="glass-input bg-background/30 border-primary/15 text-foreground placeholder:text-muted-foreground/30 focus:border-primary/30 min-h-[120px] rounded-2xl font-body resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary/85 hover:bg-primary text-primary-foreground h-14 font-display text-base tracking-[0.15em] rounded-2xl transition-all duration-500 hover:scale-[1.01]"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-primary-foreground/25 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Reserve Table"
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
