
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Globe, Layers } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // Offset for the navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      <div className="absolute inset-0 hex-grid z-0"></div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-gradient animate-background-shine">
                Transforming Digital Ecosystems
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl font-medium">
              Vytreon Inc. is building a decentralized ecosystem that spans mobility, finance, 
              energy, digital payments, content creation, and metaverse infrastructure with 
              immersive experiences and AI-powered personalization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('ecosystem')}
                className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-6 py-6 rounded-lg flex items-center gap-2 group"
              >
                Explore Ecosystem
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('governance')}
                variant="outline" 
                className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-6 py-6 rounded-lg font-bold"
              >
                View Roadmap
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="flex flex-col items-center text-center p-3">
                <div className="h-12 w-12 rounded-full bg-vytreon-cyan/10 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-vytreon-cyan" />
                </div>
                <h3 className="font-bold text-white">Security</h3>
              </div>
              <div className="flex flex-col items-center text-center p-3">
                <div className="h-12 w-12 rounded-full bg-vytreon-cyan/10 flex items-center justify-center mb-3">
                  <Globe className="h-6 w-6 text-vytreon-cyan" />
                </div>
                <h3 className="font-medium text-white">Decentralization</h3>
              </div>
              <div className="flex flex-col items-center text-center p-3">
                <div className="h-12 w-12 rounded-full bg-vytreon-cyan/10 flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6 text-vytreon-cyan" />
                </div>
                <h3 className="font-medium text-white">Scalability</h3>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative animate-float">
              <img 
                src="/lovable-uploads/20074475-c6f9-44c7-bcea-f548fa112e57.png" 
                alt="Vytreon Logo" 
                className="w-full max-w-md mx-auto animate-pulse-glow"
              />
              <div className="absolute inset-0 bg-gradient-radial from-vytreon-cyan/30 to-transparent blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
