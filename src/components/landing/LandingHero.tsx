
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      <div className="absolute inset-0 hex-grid z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/8e349754-a378-4d24-aa39-58005d777cc5.png" 
              alt="Vytreon Logo" 
              className="w-24 h-24 mx-auto mb-6"
            />
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6">
            <span className="text-white">Vytreon</span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-medium">
            The technology company behind your favorite digital products
          </p>
          
          <p className="text-gray-400 text-lg mb-12 max-w-4xl mx-auto">
            Just like Meta connects Facebook, Instagram, and WhatsApp, Vytreon powers an integrated ecosystem 
            of payments, travel, content creation, and business tools that work better together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 rounded-lg flex items-center gap-2 group text-lg"
            >
              Explore Our Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('integration')}
              variant="outline" 
              className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-6 rounded-lg font-bold text-lg"
            >
              See How They Connect
            </Button>
          </div>

          {/* Product logos preview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto opacity-60">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-vytreon-cyan/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-vytreon-cyan font-bold text-sm">O</span>
              </div>
              <span className="text-gray-400 text-sm">Oowo</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-vytreon-blue/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-vytreon-blue font-bold text-sm">E</span>
              </div>
              <span className="text-gray-400 text-sm">Escazo</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-vytreon-purple/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-vytreon-purple font-bold text-sm">D</span>
              </div>
              <span className="text-gray-400 text-sm">Didit360</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-vytreon-cyan/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-vytreon-cyan font-bold text-sm">F</span>
              </div>
              <span className="text-gray-400 text-sm">Fycra</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-vytreon-blue/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-vytreon-blue font-bold text-sm">S</span>
              </div>
              <span className="text-gray-400 text-sm">SireIQ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
