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
  return <section id="sireiq" className="space-section bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-3 glass-card-premium rounded-full px-5 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-semibold text-accent tracking-wide">Flagship Product</span>
            </div>
            
            <h2 className="text-h1 font-heading font-bold tracking-tight mb-8">
              <span className="text-gradient block mb-2">SireIQ</span>
              <span className="text-muted-foreground">Creative Platform</span>
            </h2>
            
            <p className="text-body-lg text-muted-foreground mb-10 leading-relaxed">
              AI-powered creative platform - Smarter AI Assistant for chat, content & Workflows. 
              All-in-one AI assistant for chatting, coding, content creation, research and workflow automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button 
                size="lg" 
                onClick={handleTrySireIQ} 
                className="btn-premium text-lg px-10 py-6 h-auto group rounded-xl font-semibold shadow-premium"
              >
                Try SireIQ Free
                <ExternalLink size={20} className="ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => 
                <div key={index} className="glass-card p-4 rounded-xl group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-accent mt-1 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative animate-slide-up delay-200">
            <div className="glass-card-premium p-10 rounded-3xl shadow-premium">
              <div className="aspect-video bg-gradient-to-br from-accent/10 via-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                <div className="text-center z-10">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-premium animate-glow-pulse">
                    <Zap size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">SireIQ Platform</h3>
                  <p className="text-muted-foreground">Experience the future of AI creativity</p>
                </div>
                
                {/* Animated particles */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-4 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-full opacity-60 animate-float-gentle shadow-premium"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-secondary rounded-full opacity-40 animate-float-gentle delay-1000 shadow-elegant"></div>
            <div className="absolute top-1/2 -left-4 w-6 h-6 bg-accent rounded-full opacity-30 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default SireIQFlagship;