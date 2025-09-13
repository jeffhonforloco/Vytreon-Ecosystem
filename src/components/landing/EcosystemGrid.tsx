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
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Innovation</span>{' '}
            <span className="text-muted-foreground">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our complete portfolio of products spanning AI, travel, commerce, 
            content creation, and communication technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className={`p-6 ${category.color} ${category.borderColor} border-2`}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{category.name}</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {category.products.map((product, productIndex) => (
                  <div 
                    key={productIndex}
                    onClick={() => handleProductClick(product)}
                    className={`flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 transition-all duration-300 ${
                      product.url ? 'hover:bg-card cursor-pointer hover:scale-[1.02] hover:shadow-lg' : 'opacity-75'
                    }`}
                  >
                    <div className="text-accent">{product.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-semibold text-foreground ${product.url ? 'hover:text-accent' : ''}`}>
                          {product.name}
                        </h4>
                        {product.flagship && (
                          <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                            Flagship
                          </Badge>
                        )}
                        {product.comingSoon && (
                          <Badge variant="outline" className="text-xs">
                            Coming Soon
                          </Badge>
                        )}
                        {product.url && (
                          <ExternalLink size={14} className="text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-to-r from-card to-accent/5 border-accent/20">
            <p className="text-foreground font-medium mb-2">Single Sign-On Across All Products</p>
            <p className="text-sm text-muted-foreground">Seamless integration • Unified experience • Enterprise security</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;