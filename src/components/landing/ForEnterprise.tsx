
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building2, Users, BarChart3, Shield, Headphones, Settings } from 'lucide-react';

const ForEnterprise = () => {
  const enterpriseFeatures = [
    {
      icon: <Building2 size={32} className="text-vytreon-cyan" />,
      title: "Custom Branding",
      description: "White-label solutions with your company branding across all platforms"
    },
    {
      icon: <Users size={32} className="text-vytreon-cyan" />,
      title: "Team Management",
      description: "Centralized user management, roles, and permissions across all products"
    },
    {
      icon: <BarChart3 size={32} className="text-vytreon-cyan" />,
      title: "Advanced Analytics",
      description: "Enterprise-grade reporting and insights across your entire digital ecosystem"
    },
    {
      icon: <Shield size={32} className="text-vytreon-cyan" />,
      title: "Enterprise Security",
      description: "SSO, compliance features, and advanced security controls"
    },
    {
      icon: <Headphones size={32} className="text-vytreon-cyan" />,
      title: "Dedicated Support",
      description: "24/7 priority support with dedicated account management"
    },
    {
      icon: <Settings size={32} className="text-vytreon-cyan" />,
      title: "Custom Integrations",
      description: "API access and custom integrations with your existing systems"
    }
  ];

  return (
    <section id="enterprise" className="py-24 bg-vytreon-dark-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading font-extrabold mb-6">Enterprise Solutions</h2>
          <p className="text-gray-300 text-lg font-medium">
            Scale our integrated ecosystem to meet your organization's needs with enterprise-grade 
            features, security, and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="glass-card neon-border p-6 text-center hover:scale-105 transition-transform">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 font-medium">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-vytreon-cyan/10 to-vytreon-blue/10 border border-vytreon-cyan/20 rounded-2xl p-8 text-center">
          <h3 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join leading companies that trust Vytreon's integrated ecosystem to power their digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-4 rounded-lg text-lg">
              Schedule Demo
            </Button>
            <Button 
              variant="outline" 
              className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-4 rounded-lg font-bold text-lg"
            >
              Contact Sales
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-vytreon-cyan/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-vytreon-cyan mb-2">500+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-vytreon-cyan mb-2">99.9%</div>
              <div className="text-gray-400">SLA Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-vytreon-cyan mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEnterprise;
