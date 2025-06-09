
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      <div className="absolute inset-0 hex-grid z-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-white">Ready to Experience the </span>
            <span className="text-gradient animate-background-shine">Vytreon Difference?</span>
          </h2>
          
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users and hundreds of enterprises who've simplified their digital life 
            with our integrated ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-10 py-6 rounded-lg flex items-center gap-3 group text-lg">
              <Users size={24} />
              Get Started Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-10 py-6 rounded-lg font-bold text-lg flex items-center gap-3"
            >
              <Zap size={24} />
              See It In Action
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-vytreon-dark-blue/30 border border-vytreon-cyan/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white text-lg mb-2">For Individuals</h3>
              <p className="text-gray-400 mb-4">Start with any product and gradually expand your digital ecosystem as your needs grow.</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Free to start</li>
                <li>• No long-term contracts</li>
                <li>• Seamless product integration</li>
              </ul>
            </div>
            
            <div className="bg-vytreon-dark-blue/30 border border-vytreon-cyan/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white text-lg mb-2">For Enterprise</h3>
              <p className="text-gray-400 mb-4">Custom solutions with dedicated support to transform your entire organization.</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Custom pricing</li>
                <li>• Dedicated account manager</li>
                <li>• Priority support & SLA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
