
import React from 'react';
import { Building2, Users, Rocket, Target } from 'lucide-react';

const AboutVytreon = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Building the Future of Digital Interaction</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Just as Meta connects people through Facebook, Instagram, and WhatsApp, 
              Vytreon connects your entire digital workflow through our integrated ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="font-heading text-3xl font-bold text-white mb-6">
                One Account. All Solutions.
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Sign in once and access communication tools, AI assistants, content creation platforms, 
                business analytics, and more. Your data flows seamlessly between applications, 
                creating unprecedented efficiency and insight.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From startups to enterprises, Vytreon scales with your needs while maintaining 
                the simplicity of a unified experience.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/b4d5b24d-df73-4dd8-a6a9-2ec42b8d226d.png" 
                alt="Vytreon Ecosystem" 
                className="w-full max-w-md mx-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-radial from-vytreon-cyan/20 to-transparent blur-xl -z-10"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-vytreon-cyan/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-vytreon-cyan" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">15+ Products</h4>
              <p className="text-gray-400">Integrated solutions for every business need</p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-vytreon-blue/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-vytreon-blue" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">50K+ Users</h4>
              <p className="text-gray-400">Growing community worldwide</p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-vytreon-purple/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-vytreon-purple" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">99.9% Uptime</h4>
              <p className="text-gray-400">Enterprise-grade reliability</p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-vytreon-cyan/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-vytreon-cyan" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">24/7 Support</h4>
              <p className="text-gray-400">Always here when you need us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVytreon;
