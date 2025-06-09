
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, Database, RefreshCw, Users, Zap } from 'lucide-react';

const IntegrationSection = () => {
  const integrationFeatures = [
    {
      icon: <Database size={32} className="text-vytreon-cyan" />,
      title: "Unified Data",
      description: "Your profile, preferences, and history sync across all Vytreon products. Set up once, use everywhere."
    },
    {
      icon: <RefreshCw size={32} className="text-vytreon-blue" />,
      title: "Seamless Flow",
      description: "Switch between apps without losing context. Your work and data flow seamlessly from one product to another."
    },
    {
      icon: <Users size={32} className="text-vytreon-purple" />,
      title: "Connected Communities",
      description: "Your connections and content span across platforms, creating richer experiences and deeper relationships."
    },
    {
      icon: <Zap size={32} className="text-vytreon-cyan" />,
      title: "Smart Automation",
      description: "AI-powered features that learn from your usage across all products to provide personalized experiences."
    }
  ];

  const integrationExamples = [
    {
      from: "Oowo",
      to: "Escazo",
      description: "Use your Oowo wallet directly for travel bookings",
      icon: "💳 ✈️"
    },
    {
      from: "Didit360",
      to: "SireIQ",
      description: "Analyze your content performance with business insights",
      icon: "📹 📊"
    },
    {
      from: "WhisApp",
      to: "SEOAgentPro",
      description: "Customer feedback automatically improves your SEO strategy",
      icon: "💬 🔍"
    },
    {
      from: "Fycera",
      to: "Fycra",
      description: "Content created in Fycera optimizes seamlessly with Fycra",
      icon: "🎬 📈"
    }
  ];

  return (
    <section id="integration" className="py-24 bg-vytreon-dark-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Power of Integration
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Just like how you can share an Instagram post to Facebook, or use WhatsApp Business with Facebook ads, 
            Vytreon products are designed to work together, creating a seamless digital ecosystem that's greater than the sum of its parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {integrationFeatures.map((feature, index) => (
            <Card key={index} className="glass-card p-6 text-center">
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-vytreon-cyan/10 to-vytreon-blue/10 border border-vytreon-cyan/20 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Real Integration Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationExamples.map((example, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-vytreon-dark-blue/30 rounded-lg">
                <div className="text-2xl">{example.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-vytreon-cyan font-bold text-sm">{example.from}</span>
                    <ArrowRight size={14} className="text-gray-400" />
                    <span className="text-vytreon-blue font-bold text-sm">{example.to}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <p className="text-gray-400 text-sm">Connected Products</p>
            </div>
            <div className="w-px h-12 bg-vytreon-cyan/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1</div>
              <p className="text-gray-400 text-sm">Unified Account</p>
            </div>
            <div className="w-px h-12 bg-vytreon-cyan/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">∞</div>
              <p className="text-gray-400 text-sm">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
