import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Zap, Palette, Music, Video, Users } from 'lucide-react';
const SireIQFlagship = () => {
  const handleTrySireIQ = () => {
    window.open('https://sireiq.com', '_blank');
  };
  const features = [{
    icon: <Palette size={24} />,
    title: "AI Image Generation",
    description: "Create stunning visuals with advanced AI"
  }, {
    icon: <Video size={24} />,
    title: "Video Creation",
    description: "Produce professional videos effortlessly"
  }, {
    icon: <Music size={24} />,
    title: "Music Composition",
    description: "Generate original music and soundscapes"
  }, {
    icon: <Users size={24} />,
    title: "Team Collaboration",
    description: "Work together on creative projects"
  }];
  return <section id="sireiq" className="space-section bg-gradient-surface relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute top-0 left-0 w-144 h-144 bg-accent/5 rounded-full blur-5xl"></div>
      <div className="absolute bottom-0 right-0 w-128 h-128 bg-accent-secondary/5 rounded-full blur-4xl"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left content */}
          <div className="animate-slide-up-luxury">
            <div className="inline-flex items-center gap-4 glass-card-premium rounded-full px-6 py-3 mb-12 shadow-luxury">
              <div className="w-3 h-3 rounded-full bg-gradient-hero animate-pulse-luxury"></div>
              <Zap size={18} className="text-accent animate-shimmer-luxury" />
              <span className="text-sm font-semibold text-accent tracking-widest uppercase">Flagship Product</span>
            </div>
            
            <h2 className="text-h1 font-heading font-bold tracking-tight mb-12">
              <span className="text-gradient block mb-4">SireIQ</span>
              <span className="text-muted-foreground font-light">Creative Platform</span>
            </h2>
            
            <p className="text-body-xl text-muted-foreground mb-12 leading-relaxed font-light">
              AI-powered creative platform - Smarter AI Assistant for chat, content & Workflows. 
              All-in-one AI assistant for chatting, coding, content creation, research and workflow automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-20">
              <Button 
                size="lg" 
                onClick={handleTrySireIQ} 
                className="btn-premium text-lg px-12 py-8 h-auto group rounded-2xl font-semibold shadow-luxury text-white hover-lift-strong"
              >
                Try SireIQ Free
                <ExternalLink size={22} className="ml-3 group-hover:scale-110 transition-transform duration-500" />
              </Button>
            </div>
            
            {/* Luxury feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => 
                <div key={index} className="glass-card-premium p-6 rounded-2xl group hover-lift transition-all duration-500 shadow-luxury">
                  <div className="flex items-start gap-5">
                    <div className="text-accent mt-1 group-hover:scale-110 transition-transform duration-500 p-3 bg-accent/10 rounded-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-lg font-heading">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative animate-slide-up-luxury delay-200">
            <div className="glass-card-premium p-12 rounded-3xl shadow-luxury relative overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-accent/10 via-accent-secondary/10 to-accent-tertiary/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
                <div className="text-center z-10">
                  <div className="w-40 h-40 bg-gradient-hero rounded-full flex items-center justify-center mb-8 mx-auto shadow-luxury animate-pulse-luxury hover-glow">
                    <Zap size={48} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4 font-heading">SireIQ Platform</h3>
                  <p className="text-muted-foreground text-lg font-light">Experience the future of AI creativity</p>
                </div>
                
                {/* Animated luxury particles */}
                <div className="absolute top-6 left-6 w-4 h-4 bg-accent rounded-full animate-pulse-luxury shadow-glow"></div>
                <div className="absolute top-1/2 right-6 w-3 h-3 bg-accent-secondary rounded-full animate-pulse-luxury delay-500 shadow-glow"></div>
                <div className="absolute bottom-6 left-1/3 w-3 h-3 bg-accent-tertiary rounded-full animate-pulse-luxury delay-1000 shadow-glow"></div>
              </div>
            </div>
            
            {/* Luxury floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-hero rounded-full opacity-60 animate-float-luxury shadow-luxury"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-secondary rounded-full opacity-40 animate-float-luxury delay-1000 shadow-luxury"></div>
            <div className="absolute top-1/2 -left-6 w-8 h-8 bg-accent rounded-full opacity-30 animate-pulse-luxury delay-500 shadow-glow"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default SireIQFlagship;