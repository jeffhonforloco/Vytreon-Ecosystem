import React from 'react';
import { ExternalLink, Brain, Plane, CreditCard, Music, MessageSquare, Share2, Video, Search, Headphones, Heart, FileText, Sparkles } from 'lucide-react';

const EcosystemGrid = () => {
  const products = [
    { 
      name: "SireIQ", 
      description: "All-in-one AI creative platform for chat, content, code, and collaboration", 
      icon: <Brain size={24} />, 
      url: "https://sireiq.com",
      category: "AI & Creative",
      featured: true
    },
    { 
      name: "CaptionIQ", 
      description: "AI-powered social media caption generator and analytics platform", 
      icon: <FileText size={24} />, 
      url: "#",
      category: "AI & Creative"
    },
    { 
      name: "CumnIQ", 
      description: "IQ-focused social platform with gamification and AI recommendations", 
      icon: <Brain size={24} />, 
      url: "#",
      category: "AI & Creative"
    },
    { 
      name: "SEOAgentPro", 
      description: "Intelligent SEO optimization powered by advanced AI algorithms", 
      icon: <Search size={24} />, 
      url: "#",
      category: "AI & Creative"
    },
    { 
      name: "Fycra", 
      description: "AI-powered YouTube content creation with thumbnails and FaceSwap", 
      icon: <Video size={24} />, 
      category: "AI & Creative",
      comingSoon: true 
    },
    { 
      name: "Fycera", 
      description: "Advanced video creation with Nvidia-level AI processing", 
      icon: <Video size={24} />, 
      category: "AI & Creative",
      comingSoon: true 
    },
    { 
      name: "Escazo", 
      description: "AI-powered travel companion for flights, hotels, and trip insights", 
      icon: <Plane size={24} />, 
      url: "#",
      category: "Travel & Lifestyle"
    },
    { 
      name: "Urs79", 
      description: "AI-enhanced matchmaking and dating platform for meaningful connections", 
      icon: <Heart size={24} />, 
      url: "#",
      category: "Travel & Lifestyle"
    },
    { 
      name: "Oowo", 
      description: "AI-enhanced global payment and trade system for seamless transactions", 
      icon: <CreditCard size={24} />, 
      url: "#",
      category: "Digital Finance"
    },
    { 
      name: "Didit360", 
      description: "Music streaming and MusicNFT platform for artists and fans", 
      icon: <Music size={24} />, 
      url: "#",
      category: "Entertainment"
    },
    { 
      name: "Auralora", 
      description: "Audiobook platform with AI narration and immersive storytelling", 
      icon: <Headphones size={24} />, 
      category: "Entertainment",
      comingSoon: true 
    },
    { 
      name: "VoxSaga", 
      description: "AI-powered podcast creation, hosting, and monetization platform", 
      icon: <Headphones size={24} />, 
      url: "#",
      category: "Entertainment"
    },
    { 
      name: "WhisApp", 
      description: "Encrypted chat with audio journaling for private communication", 
      icon: <MessageSquare size={24} />, 
      url: "#",
      category: "Communication"
    },
    { 
      name: "Chattrer", 
      description: "Privacy-focused messaging alternative with advanced features", 
      icon: <MessageSquare size={24} />, 
      category: "Communication",
      comingSoon: true 
    },
    { 
      name: "iXhare", 
      description: "Smart content sharing platform for seamless collaboration", 
      icon: <Share2 size={24} />, 
      url: "#",
      category: "Communication"
    }
  ];

  const handleProductClick = (product: any) => {
    if (product.url && product.url !== '#') {
      window.open(product.url, '_blank');
    }
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our complete ecosystem of AI-powered tools and platforms across multiple industries.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              onClick={() => handleProductClick(product)}
              className={`group relative bg-white border border-border rounded-xl p-6 transition-all hover:shadow-lg hover:border-accent/30 ${
                product.url && product.url !== '#' ? 'cursor-pointer' : ''
              } ${product.featured ? 'lg:col-span-2 md:col-span-2' : ''}`}
            >
              {/* Featured badge */}
              {product.featured && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  <Sparkles size={12} />
                  <span>Flagship</span>
                </div>
              )}
              
              {/* Coming soon badge */}
              {product.comingSoon && (
                <div className="absolute top-4 right-4 bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </div>
              )}
              
              {/* Icon */}
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                {product.icon}
              </div>
              
              {/* Content */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  {product.url && product.url !== '#' && (
                    <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="text-xs text-muted-foreground font-medium">
                  {product.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="text-center mt-16 p-8 bg-secondary/50 rounded-2xl max-w-3xl mx-auto border border-border">
          <p className="text-base text-foreground font-medium mb-2">
            Unified Access Across All Products
          </p>
          <p className="text-sm text-muted-foreground">
            Single sign-on • Seamless integration • Enterprise security
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;
