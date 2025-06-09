
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-vytreon-cyan/10 to-transparent"></div>
      <div className="absolute inset-0 hex-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-full px-4 py-2 mb-8">
            <Sparkles size={16} className="text-vytreon-cyan" />
            <span className="text-white font-medium">Start your free trial today</span>
          </div>
          
          <h2 className="section-heading mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using Vytreon to streamline their operations, 
            enhance collaboration, and accelerate growth through our integrated ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 text-lg rounded-lg flex items-center gap-3 group">
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-6 text-lg rounded-lg font-bold"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">✓ Free 30-day trial</div>
              <p className="text-gray-400">No credit card required</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">✓ Full ecosystem access</div>
              <p className="text-gray-400">All products included</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">✓ 24/7 support</div>
              <p className="text-gray-400">Expert help when you need it</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-vytreon-dark-blue/30 border border-vytreon-cyan/20 rounded-xl">
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              "Vytreon has revolutionized how we work. The seamless integration 
              between products has increased our productivity by 40%."
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-10 w-10 bg-vytreon-cyan/20 rounded-full flex items-center justify-center">
                <span className="text-vytreon-cyan font-bold">SM</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Sarah Mitchell</p>
                <p className="text-gray-400 text-sm">CEO, TechFlow Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
