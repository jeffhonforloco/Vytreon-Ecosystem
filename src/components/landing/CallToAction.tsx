
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Zap, Star } from 'lucide-react';

const CallToAction = () => {
  const stats = [
    { icon: Users, value: "500K+", label: "Connected Users", color: "text-vytreon-cyan" },
    { icon: Globe, value: "50+", label: "Countries Served", color: "text-vytreon-blue" },
    { icon: Zap, value: "99.9%", label: "Uptime Across Products", color: "text-vytreon-purple" },
    { icon: Star, value: "4.8/5", label: "Average User Rating", color: "text-vytreon-cyan" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-vytreon-cyan/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Connected Future
          </h2>
          <p className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed">
            Experience the power of truly integrated digital solutions. Start with any Vytreon product 
            and discover how they all work better together.
          </p>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Like Meta's family of apps, our ecosystem gets more powerful as you use more products. 
            Your data, preferences, and workflows follow you everywhere.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white px-8 py-6 rounded-lg flex items-center gap-2 group text-lg">
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-6 rounded-lg text-lg">
              Explore All Products
            </Button>
            <Button variant="outline" className="border-vytreon-blue text-white hover:bg-vytreon-blue/10 px-8 py-6 rounded-lg text-lg">
              Enterprise Solutions
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-vytreon-dark-blue/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-vytreon-cyan/20">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-vytreon-dark-blue/30 border border-vytreon-cyan/20 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 italic leading-relaxed">
              "Building the connected digital experiences of tomorrow, where every product works seamlessly 
              together to create something greater than the sum of its parts."
            </p>
            <p className="text-vytreon-cyan mt-3 font-bold">— The Vytreon Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
