
import React from 'react';
import { Card } from '@/components/ui/card';
import { Workflow, Database, Zap, Shield } from 'lucide-react';

const IntegrationSection = () => {
  const integrationFeatures = [
    {
      icon: <Workflow size={48} className="text-vytreon-cyan" />,
      title: "Seamless Workflows",
      description: "Data flows between all our products automatically. Book travel with Escazo, pay with Oowo, share content via iXhare - all in one unified experience."
    },
    {
      icon: <Database size={48} className="text-vytreon-cyan" />,
      title: "Unified Data",
      description: "One profile, one dashboard, one source of truth. Your data works across all platforms while maintaining complete privacy and security."
    },
    {
      icon: <Zap size={48} className="text-vytreon-cyan" />,
      title: "Smart Automation",
      description: "AI-powered features learn from your usage patterns across all products to provide intelligent suggestions and automated workflows."
    },
    {
      icon: <Shield size={48} className="text-vytreon-cyan" />,
      title: "Enterprise Ready",
      description: "Built for scale with enterprise-grade security, compliance, and administration tools that work across the entire ecosystem."
    }
  ];

  return (
    <section id="integration" className="py-24 relative">
      <div className="absolute inset-0 hex-grid opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading font-extrabold mb-6">
            Like Facebook's Connected Ecosystem, But Better
          </h2>
          <p className="text-gray-300 text-lg font-medium">
            Just as Facebook connects Instagram, WhatsApp, and Messenger, Vytreon creates a seamless 
            experience across all our digital solutions - with enhanced privacy and user control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {integrationFeatures.map((feature, index) => (
            <Card key={index} className="glass-card neon-border p-8 hover:scale-105 transition-transform">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-vytreon-dark-blue/50 to-vytreon-dark/50 border border-vytreon-cyan/20 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              Real Integration Examples
            </h3>
            <p className="text-gray-300 text-lg">See how our products work together in real scenarios</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-vytreon-dark/50 p-6 rounded-lg border border-vytreon-blue/20">
              <h4 className="font-bold text-white mb-3">Travel → Payment → Content</h4>
              <p className="text-gray-400 text-sm">
                Book a trip on Escazo → Pay seamlessly with Oowo → Share your travel content on Didit360 
                → Get analytics with SireIQ
              </p>
            </div>
            
            <div className="bg-vytreon-dark/50 p-6 rounded-lg border border-vytreon-blue/20">
              <h4 className="font-bold text-white mb-3">Business → Communication → Analytics</h4>
              <p className="text-gray-400 text-sm">
                Optimize SEO with SEOAgentPro → Collaborate via Chattrer → Analyze performance with SireIQ 
                → Share reports through iXhare
              </p>
            </div>
            
            <div className="bg-vytreon-dark/50 p-6 rounded-lg border border-vytreon-blue/20">
              <h4 className="font-bold text-white mb-3">Media → Feedback → Enhancement</h4>
              <p className="text-gray-400 text-sm">
                Create content on Didit360 → Gather feedback via WhisApp → Enhance with AI insights 
                → Distribute across platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
