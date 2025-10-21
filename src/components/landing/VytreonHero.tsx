import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,_225,_206,_0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(111,_168,_220,_0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Technology that powers innovation
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Vytreon is building the next generation of AI-powered tools across creative platforms, 
            communication, travel, and digital services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToSireIQ}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base font-medium rounded-lg h-auto group transition-all"
            >
              Explore SireIQ
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToEcosystem}
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-lg h-auto border-2 hover:bg-secondary/50 transition-all"
            >
              View all products
            </Button>
          </div>
          
          {/* Clean stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">5</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">Global</div>
              <div className="text-sm text-muted-foreground">Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VytreonHero;
