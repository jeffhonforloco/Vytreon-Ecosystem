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

  const scrollToFycra = () => {
    const element = document.getElementById('fycra');
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
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,_163,_127,_0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(111,_168,_220,_0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Building the foundation for the <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">intelligent future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Vytreon is a global technology group developing next-generation systems in AI, energy, and mobility — an ecosystem of innovation designed to shape the technologies of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToSireIQ}
              size="lg"
              className="relative bg-accent hover:bg-accent/90 text-white px-10 py-7 text-lg font-semibold rounded-xl h-auto group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore SireIQ
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <Button 
              onClick={scrollToEcosystem}
              variant="outline" 
              size="lg"
              className="px-10 py-7 text-lg font-semibold rounded-xl h-auto glass-strong hover:glass transition-all duration-300 hover:scale-105 border-white/20"
            >
              View all products
            </Button>
          </div>
          
          {/* Clean stats with glass effect */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12">
            <div className="text-center glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-1">5</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
            <div className="text-center glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-1">Global</div>
              <div className="text-sm text-muted-foreground">Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VytreonHero;
