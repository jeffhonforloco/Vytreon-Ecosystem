
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { 
  CreditCard, 
  Plane, 
  Music, 
  Search, 
  Brain, 
  MessageSquare, 
  Share2, 
  Mic, 
  FileText, 
  Youtube, 
  Headphones, 
  MessageCircle,
  Users
} from 'lucide-react';

const ProductShowcase = () => {
  const productCategories = [
    {
      title: "Financial Services",
      icon: <CreditCard size={32} className="text-vytreon-cyan" />,
      products: [
        { name: "Oowo", description: "Digital payment solutions", link: "/oowo" }
      ]
    },
    {
      title: "Travel & Lifestyle",
      icon: <Plane size={32} className="text-vytreon-cyan" />,
      products: [
        { name: "Escazo", description: "Travel booking platform", link: "/escazo" }
      ]
    },
    {
      title: "Media & Entertainment",
      icon: <Music size={32} className="text-vytreon-cyan" />,
      products: [
        { name: "Didit360", description: "Media management platform", link: "/didit360" },
        { name: "Auralora", description: "Audiobook platform", link: "/auralora" }
      ]
    },
    {
      title: "Business Tools",
      icon: <Brain size={32} className="text-vytreon-cyan" />,
      products: [
        { name: "SEOAgentPro", description: "SEO optimization tool", link: "/seo-agent-pro" },
        { name: "SireIQ", description: "Business analytics", link: "/sire-iq" },
        { name: "Fycra", description: "YouTube analytics", link: "/fycra" }
      ]
    },
    {
      title: "Communication",
      icon: <MessageCircle size={32} className="text-vytreon-cyan" />,
      products: [
        { name: "WhisApp", description: "Feedback platform", link: "/whis-app" },
        { name: "Chattrer", description: "Messaging platform", link: "/chattrer" },
        { name: "Voxsaga", description: "Voice communication", link: "/voxsaga" }
      ]
    },
    {
      title: "Productivity",
      icon: <FileText size={32} className="text-vytreon-cyan" />,
      products: [
        { name: "iXhare", description: "File sharing platform", link: "/ixhare" },
        { name: "Fycera", description: "Content management", link: "/fycera" }
      ]
    }
  ];

  return (
    <section id="products" className="py-24 bg-vytreon-dark-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading font-extrabold mb-6">Our Product Ecosystem</h2>
          <p className="text-gray-300 text-lg font-medium">
            Discover our comprehensive suite of integrated digital solutions designed to work together seamlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="glass-card neon-border p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-heading font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.products.map((product, productIndex) => (
                  <Link 
                    key={productIndex}
                    to={product.link}
                    className="block p-3 bg-vytreon-dark/50 rounded-lg hover:bg-vytreon-dark-blue/50 transition-colors group"
                  >
                    <div className="font-medium text-white group-hover:text-vytreon-cyan transition-colors">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-400">{product.description}</div>
                  </Link>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-4 rounded-lg transition-all"
          >
            <Users size={20} />
            View All Products in Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
