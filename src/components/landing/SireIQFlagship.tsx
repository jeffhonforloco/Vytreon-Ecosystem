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
  return <section id="sireiq" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Flagship Product</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">SireIQ</span>
              <br />
              <span className="text-muted-foreground">Creative Hub</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AI-powered creative platform - Smarter AI Assistant for chat, content & Workflows. 
              All-in-one AI assistant for chatting, coding, content creation, research and workflow automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" onClick={handleTrySireIQ} className="text-lg px-8 py-4 h-auto group">
                Try SireIQ Free
                <ExternalLink size={20} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              
            </div>
            
            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                  <div className="text-accent mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-card via-card to-accent/5 border-accent/20">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Zap size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">SireIQ Demo</h3>
                  <p className="text-muted-foreground">Interactive preview coming soon</p>
                </div>
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default SireIQFlagship;