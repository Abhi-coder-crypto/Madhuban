import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import type { InsertReservation } from "@shared/schema";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const { toast } = useToast();

  const createReservation = useMutation({
    mutationFn: async (data: InsertReservation) => {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create reservation");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Transmission Received",
        description: "The ecosystem awaits your arrival. We'll confirm your reservation soon.",
        className: "bg-card border-primary text-foreground",
      });
      reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Connection Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    createReservation.mutate({
      name: data.name,
      date: data.date,
      guests: parseInt(data.guests),
      message: data.message || null,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <h1 className="font-display text-5xl md:text-6xl text-primary text-glow mb-6">
              Establish Connection
            </h1>
            <p className="font-ui text-xl text-muted-foreground">
              Reserve your pod in the underwater forest.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Coordinates</h3>
                <p className="font-ui text-muted-foreground">Sector 7, Deep Water Bay<br/>Neo-Mumbai, India</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Frequency</h3>
                <p className="font-ui text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Signal</h3>
                <p className="font-ui text-muted-foreground">reserve@madhuban.void</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Liquid effect background overlay */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="font-ui text-sm uppercase tracking-widest text-primary">Identity</label>
              <Input 
                {...register("name", { required: true })}
                placeholder="Enter Name" 
                className="bg-background/30 border-primary/30 text-foreground placeholder:text-muted-foreground/50 focus:border-primary h-12"
                data-testid="input-name"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-ui text-sm uppercase tracking-widest text-primary">Date</label>
                <Input 
                  {...register("date", { required: true })}
                  type="date"
                  className="bg-background/30 border-primary/30 text-foreground focus:border-primary h-12"
                  data-testid="input-date"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-ui text-sm uppercase tracking-widest text-primary">Guests</label>
                <Input 
                  {...register("guests", { required: true, min: 1 })}
                  type="number"
                  placeholder="2"
                  min="1"
                  className="bg-background/30 border-primary/30 text-foreground focus:border-primary h-12"
                  data-testid="input-guests"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-ui text-sm uppercase tracking-widest text-primary">Transmission</label>
              <Textarea 
                {...register("message")}
                placeholder="Special requests or dietary restrictions..." 
                className="bg-background/30 border-primary/30 text-foreground placeholder:text-muted-foreground/50 focus:border-primary min-h-[150px]"
                data-testid="textarea-message"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground h-14 font-display text-xl tracking-wider"
              disabled={isSubmitting || createReservation.isPending}
              data-testid="button-submit"
            >
              {createReservation.isPending ? "TRANSMITTING..." : "INITIALIZE RESERVATION"}
            </Button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
