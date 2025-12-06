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
      className: "bg-card border-primary/20 text-foreground",
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      <div className="min-h-screen pt-36 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 text-muted-foreground mb-4"
              >
                <span className="w-8 h-px bg-primary/40" />
                <span className="font-ui text-sm tracking-[0.3em] uppercase">Contact</span>
              </motion.div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Make a Reservation
              </h1>
              <p className="font-ui text-muted-foreground">
                Reserve your table in our green sanctuary.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">Location</h3>
                  <p className="font-ui text-sm text-muted-foreground">123 Garden Grove Lane<br/>Nature District, New Delhi</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">Phone</h3>
                  <p className="font-ui text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">Email</h3>
                  <p className="font-ui text-sm text-muted-foreground">info@madhuban.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 md:p-12 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
            <div className="absolute top-6 right-6">
              <Leaf className="w-5 h-5 text-primary/30" />
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="font-ui text-sm text-muted-foreground">Your Name</label>
                <Input 
                  {...register("name", { required: true })}
                  placeholder="Enter your name" 
                  className="bg-background/40 border-primary/20 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/40 h-12 rounded-xl"
                  data-testid="input-name"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="font-ui text-sm text-muted-foreground">Date</label>
                  <Input 
                    {...register("date", { required: true })}
                    type="date"
                    className="bg-background/40 border-primary/20 text-foreground focus:border-primary/40 h-12 rounded-xl"
                    data-testid="input-date"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-ui text-sm text-muted-foreground">Guests</label>
                  <Input 
                    {...register("guests", { required: true, min: 1 })}
                    type="number"
                    placeholder="2"
                    min="1"
                    className="bg-background/40 border-primary/20 text-foreground focus:border-primary/40 h-12 rounded-xl"
                    data-testid="input-guests"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-ui text-sm text-muted-foreground">Special Requests</label>
                <Textarea 
                  {...register("message")}
                  placeholder="Any dietary restrictions or special occasions..." 
                  className="bg-background/40 border-primary/20 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/40 min-h-[100px] rounded-xl"
                  data-testid="textarea-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 font-display text-lg tracking-wider rounded-xl transition-all duration-300"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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
