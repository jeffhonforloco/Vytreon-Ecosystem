
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

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

  const handleStartTrial = () => {
    window.open('https://app.vytreon.com/signup', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      <div className="absolute inset-0 hex-grid z-0"></div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="text-gradient animate-background-shine">
              One Ecosystem.
            </span>
            <br />
            <span className="text-white">
              Infinite Possibilities.
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Vytreon unifies communication, AI, content creation, and business tools 
            into a single, powerful ecosystem. Connect your digital world like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 text-lg rounded-lg flex items-center gap-3 group"
            >
              Explore Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('how-it-works')}
              variant="outline" 
              className="border-2 border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-6 text-lg rounded-lg font-bold"
            >
              See How It Works
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 glass-card">
              <div className="h-16 w-16 rounded-full bg-vytreon-cyan/10 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-vytreon-cyan" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Universal Integration</h3>
              <p className="text-gray-400">All tools work seamlessly together in one unified platform</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 glass-card">
              <div className="h-16 w-16 rounded-full bg-vytreon-blue/10 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-vytreon-blue" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Enterprise Security</h3>
              <p className="text-gray-400">Bank-level security with end-to-end encryption</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 glass-card">
              <div className="h-16 w-16 rounded-full bg-vytreon-purple/10 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-vytreon-purple" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">AI-Powered</h3>
              <p className="text-gray-400">Intelligent automation across all your workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
