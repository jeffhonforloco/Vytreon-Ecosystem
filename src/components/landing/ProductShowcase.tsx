
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { CreditCard, Plane, Video, Search, BarChart, MessageSquare, Share2, Headphones } from 'lucide-react';

const ProductShowcase = () => {
  const productCategories = [
    {
      title: "Financial Solutions",
      products: [
        { name: "Oowo", description: "Digital payments made simple", icon: CreditCard, link: "/oowo" }
      ]
    },
    {
      title: "Travel & Mobility",
      products: [
        { name: "Escazo", description: "Smart travel planning", icon: Plane, link: "/escazo" }
      ]
    },
    {
      title: "Content & Media",
      products: [
        { name: "Didit360", description: "360° media experiences", icon: Video, link: "/didit360" },
        { name: "Fycra", description: "YouTube optimization", icon: Video, link: "/fycra" },
        { name: "Fycera", description: "Content creation tools", icon: Video, link: "/fycera" },
        { name: "Voxsaga", description: "Voice storytelling", icon: Video, link: "/voxsaga" },
        { name: "Auralora", description: "Audio experiences", icon: Headphones, link: "/auralora" }
      ]
    },
    {
      title: "Business Tools",
      products: [
        { name: "SEOAgentPro", description: "SEO automation", icon: Search, link: "/seo-agent-pro" },
        { name: "SireIQ", description: "Business analytics", icon: BarChart, link: "/sire-iq" },
        { name: "WhisApp", description: "Customer feedback", icon: MessageSquare, link: "/whis-app" },
        { name: "iXhare", description: "Content sharing", icon: Share2, link: "/ixhare" },
        { name: "Chattrer", description: "Team communication", icon: MessageSquare, link: "/chattrer" }
      ]
    }
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Connected Products
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Each product is designed to work together, sharing data and features to create 
            a seamless experience across your entire digital life.
          </p>
        </div>
        
        <div className="space-y-12">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <Link key={index} to={product.link}>
                    <Card className="glass-card neon-border p-6 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-vytreon-cyan to-vytreon-blue rounded-lg flex items-center justify-center">
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-white group-hover:text-vytreon-cyan transition-colors">{product.name}</h3>
                      </div>
                      <p className="text-gray-400">{product.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
