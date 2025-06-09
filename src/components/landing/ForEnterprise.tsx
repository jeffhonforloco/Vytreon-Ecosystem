
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building, Shield, BarChart, Headphones, Users, Globe } from 'lucide-react';

const ForEnterprise = () => {
  const enterpriseFeatures = [
    {
      icon: <Building size={24} className="text-vytreon-cyan" />,
      title: "Enterprise Integration",
      description: "Connect the entire Vytreon ecosystem to your existing business systems with enterprise-grade APIs, SSO, and custom integrations."
    },
    {
      icon: <Shield size={24} className="text-vytreon-blue" />,
      title: "Advanced Security",
      description: "SOC 2 compliance, enterprise encryption, audit trails, and advanced security features across all integrated platforms."
    },
    {
      icon: <BarChart size={24} className="text-vytreon-purple" />,
      title: "Unified Analytics",
      description: "Get comprehensive insights across all platforms - from payment data to content performance - in one executive dashboard."
    },
    {
      icon: <Headphones size={24} className="text-vytreon-cyan" />,
      title: "Dedicated Support",
      description: "24/7 enterprise support with dedicated account managers, technical specialists, and priority response times."
    }
  ];

  const enterpriseClients = [
    { type: "Fortune 500", count: "50+", description: "companies trust our ecosystem" },
    { type: "Startups", count: "500+", description: "scaling with our integrated solutions" },
    { type: "Developers", count: "10K+", description: "building on our platform" }
  ];

  return (
    <section id="enterprise" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for Enterprise Scale
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            From startups to Fortune 500 companies, organizations worldwide trust Vytreon's integrated 
            ecosystem to power their digital transformation. Get enterprise-grade reliability, security, 
            and support across all our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vytreon-dark-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-vytreon-cyan/10 to-vytreon-blue/10 border border-vytreon-cyan/20 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">Trusted by Organizations Worldwide</h3>
            <p className="text-gray-300">Join thousands of companies already using the Vytreon ecosystem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseClients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-vytreon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {client.type === "Fortune 500" && <Building className="w-8 h-8 text-vytreon-cyan" />}
                  {client.type === "Startups" && <Users className="w-8 h-8 text-vytreon-blue" />}
                  {client.type === "Developers" && <Globe className="w-8 h-8 text-vytreon-purple" />}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{client.count}</div>
                <div className="text-sm font-medium text-vytreon-cyan mb-1">{client.type}</div>
                <p className="text-gray-400 text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 rounded-lg text-lg mr-4">
            Contact Enterprise Sales
          </Button>
          <Button variant="outline" className="border-vytreon-cyan text-white hover:bg-vytreon-cyan/10 px-8 py-6 rounded-lg text-lg">
            View Enterprise Documentation
          </Button>
          <p className="text-gray-400 mt-4">
            Custom pricing, dedicated infrastructure, and specialized features available for enterprise clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForEnterprise;
