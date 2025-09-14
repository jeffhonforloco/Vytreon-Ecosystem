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
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury Background System */}
      <div className="absolute inset-0 bg-mesh-gradient"></div>
      <div className="absolute inset-0 hex-grid opacity-20"></div>
      <div className="absolute inset-0 bg-hero-glow"></div>
      
      {/* Floating luxury elements */}
      <div className="absolute top-32 left-32 w-32 h-32 bg-accent/8 rounded-full blur-4xl animate-float-luxury"></div>
      <div className="absolute bottom-40 right-40 w-40 h-40 bg-accent-secondary/8 rounded-full blur-5xl animate-float-luxury delay-1000"></div>
      <div className="absolute top-1/2 right-24 w-24 h-24 bg-accent-tertiary/8 rounded-full blur-4xl animate-float-luxury delay-500"></div>
      
      <div className="container mx-auto px-8 z-10 py-32">
        <div className="text-center max-w-8xl mx-auto">
          {/* Luxury Company Badge */}
          <div className="inline-flex items-center gap-4 glass-card-premium rounded-full px-8 py-4 mb-16 animate-slide-up-luxury shadow-luxury">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-hero animate-pulse-luxury shadow-glow"></div>
              <Sparkles size={20} className="text-accent animate-shimmer-luxury" />
              <span className="text-sm font-semibold text-foreground tracking-widest uppercase">Vytreon</span>
            </div>
          </div>
          
          <h1 className="font-serif mb-16 animate-slide-up-luxury delay-150">
            <span className="text-hero text-gradient block mb-6 leading-none">
              The Future of
            </span>
            <span className="text-hero text-foreground block leading-none">
              Innovation
            </span>
          </h1>
          
          <p className="text-body-xl text-muted-foreground mb-20 max-w-5xl mx-auto leading-relaxed animate-slide-up-luxury delay-300 font-light">
            Vytreon is a global innovation collective crafting the next generation of AI, energy, mobility, 
            and digital experiences. From SireIQ to groundbreaking solutions across industries, 
            we're orchestrating tomorrow's technological symphony today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-slide-up-luxury delay-450">
            <Button 
              onClick={scrollToSireIQ}
              size="lg"
              className="btn-premium text-lg px-12 py-8 h-auto group shadow-luxury rounded-2xl font-semibold text-white hover-lift-strong"
            >
              Discover SireIQ
              <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>
            <Button 
              onClick={scrollToEcosystem}
              variant="outline" 
              size="lg"
              className="text-lg px-12 py-8 h-auto border-2 border-border hover:border-accent/60 transition-all duration-500 rounded-2xl font-semibold glass-card hover-lift bg-transparent backdrop-blur-xl"
            >
              Explore Ecosystem
            </Button>
          </div>
          
          {/* Luxury Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-32 max-w-3xl mx-auto animate-slide-up-luxury delay-600">
            <div className="text-center glass-card-premium p-8 rounded-2xl hover-lift">
              <div className="text-4xl font-bold text-gradient-primary mb-3">10+</div>
              <div className="text-sm text-muted-foreground tracking-widest uppercase font-medium">Products</div>
            </div>
            <div className="text-center glass-card-premium p-8 rounded-2xl hover-lift">
              <div className="text-4xl font-bold text-gradient-primary mb-3">5</div>
              <div className="text-sm text-muted-foreground tracking-widest uppercase font-medium">Industries</div>
            </div>
            <div className="text-center glass-card-premium p-8 rounded-2xl hover-lift">
              <div className="text-4xl font-bold text-gradient-primary mb-3">∞</div>
              <div className="text-sm text-muted-foreground tracking-widest uppercase font-medium">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VytreonHero;