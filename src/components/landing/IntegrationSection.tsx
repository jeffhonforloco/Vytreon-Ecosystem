
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, Database, Sync, Users } from 'lucide-react';

const IntegrationSection = () => {
  const integrationFeatures = [
    {
      icon: <Database size={32} className="text-vytreon-cyan" />,
      title: "Shared Data",
      description: "Your profile, preferences, and history work across all Vytreon products. Set it once, use it everywhere."
    },
    {
      icon: <Sync size={32} className="text-vytreon-blue" />,
      title: "Seamless Sync",
      description: "Switch between apps without losing context. Your work flows with you from payments to content creation."
    },
    {
      icon: <Users size={32} className="text-vytreon-purple" />,
      title: "Connected Communities",
      description: "Your connections and content span across platforms, creating richer experiences and deeper relationships."
    }
  ];

  return (
    <section id="integration" className="py-24 bg-vytreon-dark-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Better Together
          </h2>
          <p className="text-gray-300 text-lg">
            Just like how you can share content from Instagram to Facebook, or use WhatsApp 
            Business with Facebook ads, Vytreon products share data and features to make 
            your digital life simpler and more powerful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {integrationFeatures.map((feature, index) => (
            <Card key={index} className="glass-card p-8 text-center">
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-vytreon-cyan/10 to-vytreon-blue/10 border border-vytreon-cyan/20 rounded-xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Real Integration Examples</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-vytreon-cyan" />
                  Use Oowo payments directly in Escazo for seamless travel booking
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-vytreon-cyan" />
                  Share content from Didit360 to your business analytics in SireIQ
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-vytreon-cyan" />
                  Customer feedback from WhisApp automatically updates your SEO strategy
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-vytreon-cyan" />
                  Content created in Fycera works seamlessly with Fycra for YouTube optimization
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-gray-400">Connected Products</p>
              <div className="text-4xl font-bold text-white mb-2 mt-4">1</div>
              <p className="text-gray-400">Unified Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
