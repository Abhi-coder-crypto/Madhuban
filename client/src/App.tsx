import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";

import Navigation from "@/components/Navigation";
import Scene from "@/components/Scene";
import NotFound from "@/pages/not-found";

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/Home"));
const Menu = lazy(() => import("@/pages/Menu"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden selection:bg-primary selection:text-black">
          
          {/* Global 3D Background */}
          <Scene />
          
          {/* Global Navigation */}
          <Navigation />

          {/* Page Content */}
          <main className="relative z-10">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-primary font-display animate-pulse">LOADING ECOSYSTEM...</div>}>
              <Router />
            </Suspense>
          </main>
          
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
