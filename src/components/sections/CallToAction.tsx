
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-vytreon-cyan/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-6">Join the Vytreon Revolution</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Be part of a transformative digital ecosystem that puts users first, 
            with cutting-edge technology and a community-driven approach to innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white px-8 py-6 rounded-lg flex items-center gap-2 group">
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-6 rounded-lg">
              Read Documentation
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <p className="text-gray-400">Integrated Services</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <p className="text-gray-400">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">18K+</div>
              <p className="text-gray-400">Community Members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
