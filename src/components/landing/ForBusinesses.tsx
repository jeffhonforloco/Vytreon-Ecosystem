
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building, Users2, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const ForBusinesses = () => {
  const businessFeatures = [
    {
      icon: <Building size={32} className="text-vytreon-cyan" />,
      title: "Enterprise Ready",
      description: "SOC 2 compliance, SSO integration, and advanced admin controls for enterprise deployments."
    },
    {
      icon: <Users2 size={32} className="text-vytreon-blue" />,
      title: "Team Collaboration",
      description: "Built-in team features across all products with real-time collaboration and project management."
    },
    {
      icon: <TrendingUp size={32} className="text-vytreon-purple" />,
      title: "Scalable Growth",
      description: "From 5 to 50,000 users, Vytreon scales with your business needs and growth trajectory."
    },
    {
      icon: <Shield size={32} className="text-vytreon-cyan" />,
      title: "Security First",
      description: "End-to-end encryption, audit logs, and compliance tools to keep your data secure."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-heading text-left mb-6">Built for Modern Businesses</h2>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Whether you're a startup looking to move fast or an enterprise 
              needing robust security and compliance, Vytreon adapts to your 
              business requirements.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 bg-vytreon-cyan rounded-full mt-3"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Unified Billing</h4>
                  <p className="text-gray-400">One invoice for all products with flexible pricing plans</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 bg-vytreon-blue rounded-full mt-3"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">API-First Design</h4>
                  <p className="text-gray-400">Integrate with your existing tools and workflows</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 bg-vytreon-purple rounded-full mt-3"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">24/7 Support</h4>
                  <p className="text-gray-400">Dedicated support team for business customers</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 rounded-lg flex items-center gap-2 group">
              Start Free Trial
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {businessFeatures.map((feature, index) => (
              <Card key={index} className="glass-card neon-border p-6 hover:scale-105 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-vytreon-cyan/10 to-vytreon-blue/10 border border-vytreon-cyan/20 rounded-xl p-8">
          <div className="text-center">
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              Trusted by Growing Companies
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have streamlined their operations 
              with Vytreon's integrated ecosystem.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <p className="text-gray-400">Enterprise Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <p className="text-gray-400">Uptime SLA</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <p className="text-gray-400">Integrated Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
