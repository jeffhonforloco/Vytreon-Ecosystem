import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const VytreonHero = () => {
  const scrollToSireIQ = () => {
    const element = document.getElementById('sireiq');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToEcosystem = () => {
    const element = document.getElementById('ecosystem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh-gradient"></div>
      <div className="absolute inset-0 hex-grid opacity-30"></div>
      <div className="absolute inset-0 bg-hero-glow"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float-gentle"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float-gentle delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float-gentle delay-500"></div>
      
      <div className="container mx-auto px-6 z-10 py-20">
        <div className="text-center max-w-7xl mx-auto">
          {/* Company Badge */}
          <div className="inline-flex items-center gap-3 glass-card-premium rounded-full px-6 py-3 mb-12 animate-slide-up">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <Sparkles size={18} className="text-accent animate-pulse" />
              <span className="text-sm font-semibold text-foreground tracking-wide">Vytreon</span>
            </div>
          </div>
          
          <h1 className="font-heading mb-12 animate-slide-up delay-100">
            <span className="text-hero text-gradient block mb-4">
              The Future of
            </span>
            <span className="text-hero text-foreground block">
              Innovation
            </span>
          </h1>
          
          <p className="text-body-lg text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
            Vytreon is a global innovation group crafting the next generation of AI, energy, mobility, 
            and digital experiences. From SireIQ to groundbreaking solutions across industries, 
            we're building tomorrow's technology today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-300">
            <Button 
              onClick={scrollToSireIQ}
              size="lg"
              className="btn-premium text-lg px-10 py-6 h-auto group shadow-premium rounded-xl font-semibold"
            >
              Discover SireIQ
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              onClick={scrollToEcosystem}
              variant="outline" 
              size="lg"
              className="text-lg px-10 py-6 h-auto border-2 border-border hover:border-accent/50 transition-all duration-300 rounded-xl font-semibold glass-card"
            >
              Explore Ecosystem
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 max-w-2xl mx-auto animate-slide-up delay-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">5</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VytreonHero;