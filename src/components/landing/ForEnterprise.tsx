
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building, Shield, BarChart, Headphones } from 'lucide-react';

const ForEnterprise = () => {
  const enterpriseFeatures = [
    {
      icon: <Building size={24} className="text-vytreon-cyan" />,
      title: "Enterprise Integration",
      description: "Connect all Vytreon products to your existing business systems with enterprise-grade APIs and SSO."
    },
    {
      icon: <Shield size={24} className="text-vytreon-blue" />,
      title: "Advanced Security",
      description: "SOC 2 compliance, advanced encryption, and audit trails across all integrated platforms."
    },
    {
      icon: <BarChart size={24} className="text-vytreon-purple" />,
      title: "Unified Analytics",
      description: "Get insights across all platforms - from payment data to content performance in one dashboard."
    },
    {
      icon: <Headphones size={24} className="text-vytreon-cyan" />,
      title: "Dedicated Support",
      description: "24/7 enterprise support with dedicated account managers and technical specialists."
    }
  ];

  return (
    <section id="enterprise" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-gray-300 text-lg">
            Scale your business with integrated solutions that grow with you. Get the power 
            of the entire Vytreon ecosystem with enterprise-grade security and support.
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
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 rounded-lg text-lg">
            Contact Enterprise Sales
          </Button>
          <p className="text-gray-400 mt-4">
            Custom pricing and features available for enterprise clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForEnterprise;
