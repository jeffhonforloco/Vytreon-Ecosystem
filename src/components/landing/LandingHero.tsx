
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LandingHero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      <div className="absolute inset-0 hex-grid z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/8e349754-a378-4d24-aa39-58005d777cc5.png" 
              alt="Vytreon Logo" 
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6">
            <span className="text-white">Vytreon</span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Connecting digital experiences across payments, travel, content, and business solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 rounded-lg flex items-center gap-2 group text-lg">
              Explore Our Ecosystem
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
