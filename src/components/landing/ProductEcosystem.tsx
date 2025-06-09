
import React from 'react';
import { Card } from '@/components/ui/card';
import { Database, Activity, Search, Brain, MessageSquare, Share2, Video, FileText, Headphones, CreditCard, Plane, Music } from 'lucide-react';

const ProductEcosystem = () => {
  const handleProductClick = (productName: string) => {
    const productUrls = {
      'Oowo': 'https://www.oowo.io',
      'Escazo': 'https://www.escazo.com',
      'Didit360': 'https://www.didit360.com',
      'WhisApp': 'https://www.whisapp.com'
    };
    
    const url = productUrls[productName as keyof typeof productUrls];
    if (url) {
      window.open(url, '_blank');
    } else {
      // For products without URLs yet, show coming soon
      alert(`${productName} is coming soon! Stay tuned for updates.`);
    }
  };

  const productCategories = [
    {
      title: "Communication & Collaboration",
      description: "Connect and collaborate with your team seamlessly",
      color: "from-vytreon-cyan to-vytreon-blue",
      products: [
        { name: "WhisApp", description: "Your Audio Travel Companion", icon: <MessageSquare size={24} />, hasUrl: true },
        { name: "Chattrer", description: "Advanced chat features", icon: <MessageSquare size={24} />, hasUrl: false },
        { name: "iXhare", description: "Smart content sharing", icon: <Share2 size={24} />, hasUrl: false },
      ]
    },
    {
      title: "AI & Intelligence",
      description: "Harness the power of artificial intelligence",
      color: "from-vytreon-blue to-vytreon-purple",
      products: [
        { name: "SireIQ", description: "Business intelligence AI", icon: <Brain size={24} />, hasUrl: false },
        { name: "CumnIQ", description: "Communication AI assistant", icon: <Brain size={24} />, hasUrl: false },
        { name: "SEOAgentPro", description: "AI-powered SEO optimization", icon: <Search size={24} />, hasUrl: false },
      ]
    },
    {
      title: "Content & Media",
      description: "Create, manage, and distribute content",
      color: "from-vytreon-purple to-vytreon-cyan",
      products: [
        { name: "Voxsaga", description: "Video content platform", icon: <Video size={24} />, hasUrl: false },
        { name: "Auralora", description: "Audio content management", icon: <Headphones size={24} />, hasUrl: false },
        { name: "Didit360", description: "Complete Music & Digital Media Universe", icon: <Music size={24} />, hasUrl: true },
        { name: "Fycera", description: "Create Stunning Videos with AI", icon: <Video size={24} />, hasUrl: false },
        { name: "Fycra", description: "Optimize your YouTube content with AI", icon: <FileText size={24} />, hasUrl: false },
        { name: "NFTchords", description: "Music NFT", icon: <Music size={24} />, hasUrl: false },
      ]
    },
    {
      title: "Commerce & Travel",
      description: "Payments, trading, and travel solutions",
      color: "from-vytreon-cyan to-vytreon-blue",
      products: [
        { name: "Oowo", description: "Payments solution and trade platform", icon: <CreditCard size={24} />, hasUrl: true },
        { name: "Escazo", description: "All in One travel platform", icon: <Plane size={24} />, hasUrl: true },
      ]
    }
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-vytreon-blue/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="section-heading">Complete Product Ecosystem</h2>
          <p className="text-gray-300 text-xl">
            Every tool you need, working together as one. Switch between products seamlessly 
            with shared data, unified authentication, and consistent experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card key={index} className="glass-card neon-border p-8 group hover:scale-105 transition-all duration-300">
              <div className={`h-2 w-full bg-gradient-to-r ${category.color} rounded-full mb-6`}></div>
              
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-6">{category.description}</p>
              
              <div className="space-y-4">
                {category.products.map((product, productIndex) => (
                  <div 
                    key={productIndex} 
                    className={`flex items-center gap-4 p-4 bg-vytreon-dark-blue/30 rounded-lg hover:bg-vytreon-dark-blue/50 transition-colors ${product.hasUrl ? 'cursor-pointer' : ''}`}
                    onClick={() => handleProductClick(product.name)}
                  >
                    <div className="text-vytreon-cyan">{product.icon}</div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-white ${product.hasUrl ? 'hover:text-vytreon-cyan' : ''}`}>
                        {product.name}
                        {product.hasUrl && <span className="ml-2 text-xs text-vytreon-cyan">↗</span>}
                      </h4>
                      <p className="text-gray-400 text-sm">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-full px-6 py-3">
            <span className="text-white font-medium">Single Sign-On across all products</span>
            <div className="h-2 w-2 bg-vytreon-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystem;
