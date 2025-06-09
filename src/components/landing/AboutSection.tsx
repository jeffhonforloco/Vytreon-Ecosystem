
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Globe, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-vytreon-dark-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            One Ecosystem, Endless Possibilities
          </h2>
          <p className="text-gray-300 text-lg">
            Like how Meta connects Facebook, WhatsApp, and Instagram, Vytreon creates seamless experiences 
            across all your digital needs. Our integrated platform lets you move effortlessly between 
            payments, travel, content creation, and business tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-vytreon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-vytreon-cyan" />
            </div>
            <h3 className="text-white font-bold mb-2">Instant Connection</h3>
            <p className="text-gray-400 text-sm">Switch between apps with your data following you</p>
          </Card>

          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-vytreon-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-vytreon-blue" />
            </div>
            <h3 className="text-white font-bold mb-2">Global Reach</h3>
            <p className="text-gray-400 text-sm">Works everywhere, connects everyone</p>
          </Card>

          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-vytreon-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-vytreon-purple" />
            </div>
            <h3 className="text-white font-bold mb-2">Secure by Design</h3>
            <p className="text-gray-400 text-sm">Your data is protected across all platforms</p>
          </Card>

          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-vytreon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-vytreon-cyan" />
            </div>
            <h3 className="text-white font-bold mb-2">Community First</h3>
            <p className="text-gray-400 text-sm">Built for people, by people</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
