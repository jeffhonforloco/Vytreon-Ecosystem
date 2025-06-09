
import React from 'react';
import { Link } from 'react-router-dom';
import { Fingerprint, Users, Globe, Lock, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const VisionSection = () => {
  const visionCards = [
    {
      icon: <Fingerprint size={32} className="text-vytreon-cyan" />,
      title: "Self-Sovereign Identity",
      description: "Empowering users with complete ownership and control over their digital identities and personal data.",
      link: "/governance"
    },
    {
      icon: <Users size={32} className="text-vytreon-cyan" />,
      title: "Community Governance", 
      description: "Decentralized decision-making through DAO structures, ensuring transparent and equitable system evolution.",
      link: "/governance"
    },
    {
      icon: <Globe size={32} className="text-vytreon-cyan" />,
      title: "Cross-Platform Innovation",
      description: "Seamless experiences across mobility, finance, energy, and digital content creation platforms.",
      link: "/ecosystem"
    },
    {
      icon: <Lock size={32} className="text-vytreon-cyan" />,
      title: "Zero-Trust Security",
      description: "End-to-end encryption and advanced security protocols to safeguard user data and transactions.",
      link: "/ecosystem"
    },
    {
      icon: <Zap size={32} className="text-vytreon-cyan" />,
      title: "Immersive Experiences",
      description: "Next-generation interfaces combining AR/VR with AI personalization for deeply engaging interactions.",
      link: "/ecosystem"
    }
  ];

  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-50 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading font-extrabold">Our Vision</h2>
          <p className="text-gray-300 text-lg font-medium">
            Vytreon is reimagining digital interactions through a decentralized ecosystem that prioritizes 
            user sovereignty, security, and immersive experiences across all platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {visionCards.map((card, index) => (
            <Link to={card.link} key={index}>
              <Card className="glass-card neon-border p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-vytreon-cyan/20 cursor-pointer group">
                <div className="mb-4 transition-transform group-hover:scale-110">{card.icon}</div>
                <h3 className="text-xl font-heading font-extrabold text-white mb-2 group-hover:text-vytreon-cyan transition-colors">{card.title}</h3>
                <p className="text-gray-400 font-medium">{card.description}</p>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-2xl font-extrabold text-white mb-3">Core Values</h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="bg-vytreon-cyan/10 text-vytreon-cyan px-4 py-1 rounded-full text-sm">Security</span>
                <span className="bg-vytreon-blue/10 text-vytreon-blue px-4 py-1 rounded-full text-sm">Transparency</span>
                <span className="bg-vytreon-purple/10 text-vytreon-purple px-4 py-1 rounded-full text-sm">Scalability</span>
                <span className="bg-vytreon-cyan/10 text-vytreon-cyan px-4 py-1 rounded-full text-sm">Innovation</span>
                <span className="bg-vytreon-blue/10 text-vytreon-blue px-4 py-1 rounded-full text-sm">Community</span>
              </div>
            </div>
            <div className="flex-1 border-l border-vytreon-cyan/20 pl-8">
              <p className="text-gray-300 italic font-medium">
                "We're building more than technology; we're creating a new paradigm of digital interaction where 
                users have true ownership of their digital lives, enhanced by immersive experiences and protected 
                by cutting-edge security."
              </p>
              <p className="text-vytreon-cyan mt-3 font-bold">Vytreon Leadership Council</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
