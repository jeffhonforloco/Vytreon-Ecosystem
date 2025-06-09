
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { CreditCard, Plane, Video, Search, BarChart, MessageSquare, Share2, Headphones } from 'lucide-react';

const ProductShowcase = () => {
  const productCategories = [
    {
      title: "Financial Technology",
      description: "Secure, fast, and reliable payment solutions",
      color: "from-vytreon-cyan to-vytreon-blue",
      products: [
        { 
          name: "Oowo", 
          description: "Digital payments and financial services platform", 
          icon: CreditCard, 
          link: "/oowo",
          users: "200K+ users"
        }
      ]
    },
    {
      title: "Travel & Mobility",
      description: "Smart solutions for modern travel experiences",
      color: "from-vytreon-blue to-vytreon-purple",
      products: [
        { 
          name: "Escazo", 
          description: "Intelligent travel planning and booking platform", 
          icon: Plane, 
          link: "/escazo",
          users: "150K+ bookings"
        }
      ]
    },
    {
      title: "Content & Media",
      description: "Creative tools for the digital content era",
      color: "from-vytreon-purple to-vytreon-cyan",
      products: [
        { name: "Didit360", description: "360° immersive media experiences", icon: Video, link: "/didit360", users: "80K+ creators" },
        { name: "Fycra", description: "YouTube optimization and analytics", icon: Video, link: "/fycra", users: "50K+ channels" },
        { name: "Fycera", description: "Advanced content creation suite", icon: Video, link: "/fycera", users: "40K+ projects" },
        { name: "Voxsaga", description: "Voice storytelling platform", icon: Video, link: "/voxsaga", users: "30K+ stories" },
        { name: "Auralora", description: "Professional audio experiences", icon: Headphones, link: "/auralora", users: "25K+ tracks" }
      ]
    },
    {
      title: "Business Intelligence",
      description: "Data-driven solutions for modern businesses",
      color: "from-vytreon-cyan to-vytreon-blue",
      products: [
        { name: "SEOAgentPro", description: "AI-powered SEO automation", icon: Search, link: "/seo-agent-pro", users: "35K+ websites" },
        { name: "SireIQ", description: "Advanced business analytics platform", icon: BarChart, link: "/sire-iq", users: "20K+ businesses" },
        { name: "WhisApp", description: "Customer feedback management", icon: MessageSquare, link: "/whis-app", users: "15K+ companies" },
        { name: "iXhare", description: "Secure content sharing platform", icon: Share2, link: "/ixhare", users: "60K+ shares" },
        { name: "Chattrer", description: "Team communication hub", icon: MessageSquare, link: "/chattrer", users: "40K+ teams" }
      ]
    }
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Product Family
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Like how Meta's family of apps includes Facebook, Instagram, and WhatsApp, 
            Vytreon's connected products work together to power your entire digital experience.
          </p>
        </div>
        
        <div className="space-y-16">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              <div className="text-center mb-8">
                <div className={`inline-block bg-gradient-to-r ${category.color} p-6 rounded-2xl mb-4`}>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-400 text-lg">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <Link key={index} to={product.link}>
                    <Card className="glass-card neon-border p-6 hover:scale-105 transition-all duration-300 group h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white group-hover:text-vytreon-cyan transition-colors text-lg">{product.name}</h4>
                          <span className="text-xs text-vytreon-cyan">{product.users}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{product.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">And more coming soon...</h3>
            <p className="text-gray-400">
              We're constantly building new products and features to expand the Vytreon ecosystem. 
              Stay tuned for exciting updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
