import React from 'react';
import { Card } from '@/components/ui/card';
import { Globe, Zap, Users, Lightbulb } from 'lucide-react';

const VisionStatement = () => {
  const visionPoints = [
    {
      icon: <Globe size={24} />,
      title: "Global Impact",
      description: "Transforming industries worldwide with innovative solutions"
    },
    {
      icon: <Zap size={24} />,
      title: "Cutting-Edge Technology",
      description: "Leading the charge in AI, energy, and digital transformation"
    },
    {
      icon: <Users size={24} />,
      title: "Human-Centered Design",
      description: "Building products that enhance human potential and collaboration"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation First",
      description: "Pioneering solutions for tomorrow's challenges today"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Our</span>{' '}
              <span className="text-muted-foreground">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At Vytreon Group, we believe in the power of innovation to create a better future. 
              Our mission is to develop transformative technologies that enhance human potential, 
              drive sustainable progress, and connect communities across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {visionPoints.map((point, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">{point.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-card via-card to-accent/5 border-accent/20 text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-4 leading-relaxed">
              "Innovation is not just about creating new products—it's about reimagining 
              how technology can serve humanity."
            </blockquote>
            <cite className="text-muted-foreground font-medium">Vytreon Group Leadership</cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;