
import React from 'react';
import { Card } from '@/components/ui/card';
import { Building2, Users, Zap, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Building2 size={40} className="text-vytreon-cyan" />,
      title: "Integrated Ecosystem",
      description: "All our products work seamlessly together, sharing data and features to provide a unified experience."
    },
    {
      icon: <Users size={40} className="text-vytreon-cyan" />,
      title: "User-Centric Design",
      description: "Every product is designed with the user in mind, ensuring intuitive interfaces and smooth workflows."
    },
    {
      icon: <Zap size={40} className="text-vytreon-cyan" />,
      title: "Innovation First",
      description: "We leverage cutting-edge technology including AI and blockchain to stay ahead of the curve."
    },
    {
      icon: <Shield size={40} className="text-vytreon-cyan" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance across all our platforms to protect your data and transactions."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading font-extrabold mb-6">What Makes Vytreon Different</h2>
          <p className="text-gray-300 text-lg font-medium">
            We're not just another tech company. We're building an ecosystem where every product 
            enhances the others, creating more value for our users than the sum of its parts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="glass-card neon-border p-6 text-center hover:scale-105 transition-transform">
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 font-medium">{value.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-xl p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                To simplify digital life by creating interconnected solutions that work better together. 
                Whether you're an individual user or a large enterprise, our integrated ecosystem grows with your needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-vytreon-cyan/10 text-vytreon-cyan px-4 py-2 rounded-full text-sm font-medium">Simplicity</span>
                <span className="bg-vytreon-blue/10 text-vytreon-blue px-4 py-2 rounded-full text-sm font-medium">Integration</span>
                <span className="bg-vytreon-purple/10 text-vytreon-purple px-4 py-2 rounded-full text-sm font-medium">Scalability</span>
                <span className="bg-vytreon-cyan/10 text-vytreon-cyan px-4 py-2 rounded-full text-sm font-medium">Innovation</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/20074475-c6f9-44c7-bcea-f548fa112e57.png" 
                alt="Vytreon Ecosystem" 
                className="w-full max-w-md mx-auto opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-radial from-vytreon-cyan/20 to-transparent blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
