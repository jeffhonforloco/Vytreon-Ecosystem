
import React from 'react';
import { Card } from '@/components/ui/card';
import { Cloud, Lock, Zap, Globe, Database, Cpu } from 'lucide-react';

const TechnologyStack = () => {
  const techFeatures = [
    {
      icon: <Cloud size={32} className="text-vytreon-cyan" />,
      title: "Cloud Native",
      description: "Built on modern cloud infrastructure for global scale and reliability",
      details: ["Multi-region deployment", "Auto-scaling", "99.9% uptime SLA"]
    },
    {
      icon: <Lock size={32} className="text-vytreon-blue" />,
      title: "Security First",
      description: "Enterprise-grade security with end-to-end encryption",
      details: ["Zero-trust architecture", "SOC 2 compliance", "Data residency options"]
    },
    {
      icon: <Zap size={32} className="text-vytreon-purple" />,
      title: "Lightning Fast",
      description: "Optimized for speed with edge computing and smart caching",
      details: ["Sub-second response times", "Global CDN", "Real-time sync"]
    },
    {
      icon: <Globe size={32} className="text-vytreon-cyan" />,
      title: "Global Reach",
      description: "Available worldwide with localization and compliance",
      details: ["150+ countries", "Multi-language support", "Local compliance"]
    },
    {
      icon: <Database size={32} className="text-vytreon-blue" />,
      title: "Smart Data",
      description: "AI-powered insights and intelligent data management",
      details: ["Predictive analytics", "Auto-categorization", "Smart suggestions"]
    },
    {
      icon: <Cpu size={32} className="text-vytreon-purple" />,
      title: "AI Integration",
      description: "Built-in AI capabilities across all products",
      details: ["Natural language processing", "Computer vision", "Machine learning"]
    }
  ];

  return (
    <section className="py-24 bg-vytreon-dark-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="section-heading">Powered by Advanced Technology</h2>
          <p className="text-gray-300 text-xl">
            Vytreon leverages cutting-edge technology to deliver a seamless, 
            secure, and intelligent experience across all products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => (
            <Card key={index} className="glass-card neon-border p-6 group hover:scale-105 transition-all duration-300">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="h-1.5 w-1.5 bg-vytreon-cyan rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-vytreon-dark-blue/50 to-vytreon-dark/50 border border-vytreon-cyan/20 rounded-xl p-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Always Evolving
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our technology stack is continuously updated with the latest innovations. 
              Regular updates and new features are deployed seamlessly without disrupting your workflow.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-vytreon-cyan/10 border border-vytreon-cyan/20 text-vytreon-cyan px-4 py-2 rounded-full text-sm">
                Continuous Deployment
              </span>
              <span className="bg-vytreon-blue/10 border border-vytreon-blue/20 text-vytreon-blue px-4 py-2 rounded-full text-sm">
                Zero Downtime Updates
              </span>
              <span className="bg-vytreon-purple/10 border border-vytreon-purple/20 text-vytreon-purple px-4 py-2 rounded-full text-sm">
                Backward Compatibility
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
