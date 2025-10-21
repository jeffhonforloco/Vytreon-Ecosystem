import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Palette, Video, Music, MessageSquare, Code, FileText, Sparkles, Zap } from 'lucide-react';

const SireIQFlagship = () => {
  const handleTrySireIQ = () => {
    window.open('https://sireiq.com', '_blank');
  };

  const features = [
    { icon: <MessageSquare size={20} />, title: "AI Chat", description: "Intelligent conversations" },
    { icon: <Palette size={20} />, title: "Image Generation", description: "Create stunning visuals" },
    { icon: <Video size={20} />, title: "Video Creation", description: "Professional video tools" },
    { icon: <Music size={20} />, title: "Music Production", description: "AI-powered composition" },
    { icon: <Code size={20} />, title: "Code Assistant", description: "Development support" },
    { icon: <FileText size={20} />, title: "Content Writing", description: "Create engaging content" }
  ];

  return (
    <section id="sireiq" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Flagship Product</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              SireIQ
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your all-in-one AI creative platform. Chat, create, code, and collaborate with 
              advanced AI assistance for every task.
            </p>
            
            <Button 
              size="lg" 
              onClick={handleTrySireIQ} 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base font-medium rounded-lg h-auto group mb-12"
            >
              Try SireIQ
              <ExternalLink size={18} className="ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            
            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-accent/30 transition-all hover:shadow-sm">
                  <div className="text-accent mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-0.5">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-accent/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-2xl p-12 backdrop-blur">
              {/* Main visual element */}
              <div className="bg-card rounded-xl shadow-lg p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">SireIQ Platform</div>
                    <div className="text-sm text-muted-foreground">AI Creative Suite</div>
                  </div>
                </div>
                
                {/* Sample UI elements */}
                <div className="space-y-3">
                  <div className="h-3 bg-secondary rounded w-3/4"></div>
                  <div className="h-3 bg-secondary rounded w-full"></div>
                  <div className="h-3 bg-secondary rounded w-5/6"></div>
                  
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="aspect-square bg-gradient-to-br from-accent/30 to-accent-secondary/30 rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-accent-secondary/30 to-accent-tertiary/30 rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-accent-tertiary/30 to-accent/30 rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-card/90 backdrop-blur rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">50K+</div>
                  <div className="text-xs text-muted-foreground">Users</div>
                </div>
                <div className="bg-card/90 backdrop-blur rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">1M+</div>
                  <div className="text-xs text-muted-foreground">Creations</div>
                </div>
                <div className="bg-card/90 backdrop-blur rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Available</div>
                </div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SireIQFlagship;
