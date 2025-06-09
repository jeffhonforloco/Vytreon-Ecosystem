
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const LandingHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      <div className="absolute inset-0 hex-grid z-0"></div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/8e349754-a378-4d24-aa39-58005d777cc5.png" 
              alt="Vytreon Logo" 
              className="w-24 h-24 mx-auto mb-6 animate-pulse-glow"
            />
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-white">We are </span>
            <span className="text-gradient animate-background-shine">Vytreon</span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            A parent company that brings together innovative digital solutions for 
            payments, travel, media, business tools, and communication platforms
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 rounded-lg flex items-center gap-2 group text-lg"
            >
              Explore Our Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('enterprise')}
              variant="outline" 
              className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-6 rounded-lg font-bold text-lg"
            >
              <Play size={20} className="mr-2" />
              For Enterprise
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-vytreon-cyan mb-2">15+</div>
              <div className="text-gray-400">Integrated Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vytreon-cyan mb-2">100K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-vytreon-cyan mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
