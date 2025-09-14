import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Brain, Plane, CreditCard, Music, MessageSquare, Share2, Video, Search, Headphones, FileText } from 'lucide-react';

const EcosystemGrid = () => {
  const categories = [
    {
      name: "AI & Intelligence",
      color: "bg-gradient-to-r from-accent/20 to-primary/20",
      borderColor: "border-accent/30",
      products: [
        { 
          name: "SireIQ", 
          description: "All-in-one AI creative hub", 
          icon: <Brain size={20} />, 
          url: "https://sireiq.com",
          flagship: true
        },
        { 
          name: "CumnIQ", 
          description: "Communication AI assistant", 
          icon: <Brain size={20} />, 
          url: "https://cumniq.com" 
        },
        { 
          name: "SEOAgentPro", 
          description: "AI-powered SEO optimization", 
          icon: <Search size={20} />, 
          url: "https://seoagentpro.com" 
        }
      ]
    },
    {
      name: "Travel & Commerce",
      color: "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      products: [
        { 
          name: "Escazo", 
          description: "All-in-one travel platform", 
          icon: <Plane size={20} />, 
          url: "https://escazo.com" 
        },
        { 
          name: "Oowo", 
          description: "Payments & trading platform", 
          icon: <CreditCard size={20} />, 
          url: "https://oowo.io" 
        }
      ]
    },
    {
      name: "Content & Media",
      color: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      products: [
        { 
          name: "Didit360", 
          description: "Complete music & digital media", 
          icon: <Music size={20} />, 
          url: "https://didit360.com" 
        },
        { 
          name: "Voxsaga", 
          description: "Podcast hosting platform", 
          icon: <Headphones size={20} />, 
          url: "https://voxsaga.com" 
        },
        { 
          name: "Fycera", 
          description: "AI video creation", 
          icon: <Video size={20} />, 
          comingSoon: true 
        },
        { 
          name: "Auralora", 
          description: "Audio content management", 
          icon: <Headphones size={20} />, 
          comingSoon: true 
        }
      ]
    },
    {
      name: "Communication",
      color: "bg-gradient-to-r from-green-500/20 to-cyan-500/20",
      borderColor: "border-green-500/30",
      products: [
        { 
          name: "WhisApp", 
          description: "Audio travel companion", 
          icon: <MessageSquare size={20} />, 
          url: "https://whisapp.com" 
        },
        { 
          name: "iXhare", 
          description: "Smart content sharing", 
          icon: <Share2 size={20} />, 
          url: "https://ixhare.com" 
        },
        { 
          name: "Chattrer", 
          description: "Advanced chat features", 
          icon: <MessageSquare size={20} />, 
          comingSoon: true 
        }
      ]
    }
  ];

  const handleProductClick = (product: any) => {
    if (product.url) {
      window.open(product.url, '_blank');
    } else {
      alert(`${product.name} is coming soon! Stay tuned for updates.`);
    }
  };

  return (
    <section id="products" className="space-section bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-slide-up">
          <h2 className="text-h1 font-heading font-bold tracking-tight mb-8">
            <span className="text-gradient">Innovation</span>{' '}
            <span className="text-foreground">Ecosystem</span>
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Discover our complete portfolio of products spanning AI, travel, commerce, 
            content creation, and communication technologies — all working together seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {categories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`glass-card-premium p-8 ${category.color} border-2 ${category.borderColor} animate-slide-up hover:scale-105 transition-all duration-500`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{category.name}</h3>
                <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {category.products.map((product, productIndex) => (
                  <div 
                    key={productIndex}
                    onClick={() => handleProductClick(product)}
                    className={`group flex items-center gap-5 p-5 glass-card rounded-xl border border-border/50 transition-all duration-300 ${
                      product.url ? 'hover:border-accent/50 cursor-pointer hover:scale-[1.02] shadow-elegant hover:shadow-premium' : 'opacity-75'
                    }`}
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className={`font-semibold text-foreground ${product.url ? 'group-hover:text-accent' : ''} transition-colors duration-300`}>
                          {product.name}
                        </h4>
                        {product.flagship && (
                          <Badge variant="secondary" className="text-xs bg-gradient-primary text-white border-none shadow-elegant">
                            Flagship
                          </Badge>
                        )}
                        {product.comingSoon && (
                          <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                            Coming Soon
                          </Badge>
                        )}
                        {product.url && (
                          <ExternalLink size={14} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-slide-up delay-500">
          <Card className="glass-card-premium inline-block p-8 bg-gradient-primary text-white border-none shadow-premium">
            <p className="font-semibold mb-3 text-lg">Single Sign-On Across All Products</p>
            <p className="text-white/90 leading-relaxed">
              Seamless integration • Unified experience • Enterprise security
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;