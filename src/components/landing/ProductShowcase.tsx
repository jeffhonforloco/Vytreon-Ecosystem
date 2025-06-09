
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const ProductShowcase = () => {
  const products = [
    { name: "Oowo", category: "Payments", link: "/oowo" },
    { name: "Escazo", category: "Travel", link: "/escazo" },
    { name: "Didit360", category: "Media", link: "/didit360" },
    { name: "SEOAgentPro", category: "SEO", link: "/seo-agent-pro" },
    { name: "SireIQ", category: "Analytics", link: "/sire-iq" },
    { name: "WhisApp", category: "Feedback", link: "/whis-app" },
    { name: "iXhare", category: "Sharing", link: "/ixhare" },
    { name: "Chattrer", category: "Chat", link: "/chattrer" },
    { name: "Voxsaga", category: "Voice", link: "/voxsaga" },
    { name: "Auralora", category: "Audio", link: "/auralora" },
    { name: "Fycra", category: "YouTube", link: "/fycra" },
    { name: "Fycera", category: "Content", link: "/fycera" }
  ];

  return (
    <section id="products" className="py-16 bg-vytreon-dark-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Products</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Link key={index} to={product.link}>
              <Card className="glass-card p-4 hover:scale-105 transition-transform text-center">
                <h3 className="font-bold text-white mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.category}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
