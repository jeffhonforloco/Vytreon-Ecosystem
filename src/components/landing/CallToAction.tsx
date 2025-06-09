
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Zap } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-vytreon-cyan/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Connected Future
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Experience the power of integrated digital solutions. Start with any Vytreon product 
            and discover how they all work better together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white px-8 py-6 rounded-lg flex items-center gap-2 group text-lg">
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-6 rounded-lg text-lg">
              View All Products
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vytreon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-vytreon-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500K+</div>
              <p className="text-gray-400">Connected Users</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vytreon-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-vytreon-blue" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vytreon-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-vytreon-purple" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <p className="text-gray-400">Uptime Across All Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
