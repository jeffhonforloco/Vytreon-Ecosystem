
import React from 'react';
import { Card } from '@/components/ui/card';
import { Building2, Users, Globe, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-vytreon-dark-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Tomorrow's Digital Infrastructure
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Vytreon is the technology company powering the next generation of connected digital experiences. 
            Our mission is to build products that help people and businesses thrive in an interconnected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-vytreon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-vytreon-cyan" />
            </div>
            <h3 className="text-white font-bold mb-2">15+ Products</h3>
            <p className="text-gray-400 text-sm">Integrated solutions across industries</p>
          </Card>

          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-vytreon-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-vytreon-blue" />
            </div>
            <h3 className="text-white font-bold mb-2">500K+ Users</h3>
            <p className="text-gray-400 text-sm">Trust our ecosystem daily</p>
          </Card>

          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-vytreon-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-vytreon-purple" />
            </div>
            <h3 className="text-white font-bold mb-2">50+ Countries</h3>
            <p className="text-gray-400 text-sm">Global reach and impact</p>
          </Card>

          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-vytreon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-vytreon-cyan" />
            </div>
            <h3 className="text-white font-bold mb-2">Innovation First</h3>
            <p className="text-gray-400 text-sm">Leading technology advancement</p>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-vytreon-cyan/10 to-vytreon-blue/10 border border-vytreon-cyan/20 rounded-xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              "We believe the future belongs to connected experiences. By building products that seamlessly 
              integrate with each other, we're creating a digital ecosystem where your data, preferences, 
              and workflows move with you across every aspect of your digital life."
            </p>
            <p className="text-vytreon-cyan mt-4 font-bold">— Vytreon Leadership Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
