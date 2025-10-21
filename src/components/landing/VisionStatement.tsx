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
    <section className="py-20 md:py-32 bg-secondary/50">
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
            <div key={index} className="text-center glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-500 group">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent-secondary/30 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative glass-strong rounded-xl w-full h-full flex items-center justify-center text-accent group-hover:text-white group-hover:bg-accent/50 transition-all">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
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
