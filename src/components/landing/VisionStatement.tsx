import React from 'react';
import { Lightbulb, Users, Globe, Zap } from 'lucide-react';

const VisionStatement = () => {
  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation First",
      description: "Pushing boundaries with cutting-edge technology and creative solutions."
    },
    {
      icon: <Users size={24} />,
      title: "User-Centered",
      description: "Building products that solve real problems for real people."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Impact",
      description: "Creating tools that make a difference across industries worldwide."
    },
    {
      icon: <Zap size={24} />,
      title: "AI-Powered",
      description: "Leveraging artificial intelligence to enhance every experience."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're building an ecosystem of intelligent tools that empower creators, businesses, 
            and individuals to achieve more with AI assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;
