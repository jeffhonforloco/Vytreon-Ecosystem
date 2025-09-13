import React from 'react';
import { Card } from '@/components/ui/card';
import { UserCheck, ArrowRight, Zap, Globe } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Single Account Setup",
      description: "Create one Vytreon account to access our entire ecosystem of products",
      icon: <UserCheck size={32} />,
      color: "text-accent"
    },
    {
      step: 2,
      title: "Choose Your Products",
      description: "Select from AI tools, travel platforms, content creation, and more",
      icon: <Globe size={32} />,
      color: "text-primary"
    },
    {
      step: 3,
      title: "Seamless Integration",
      description: "All products work together with unified data and shared workflows",
      icon: <Zap size={32} />,
      color: "text-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-foreground">How It</span>{' '}
            <span className="text-muted-foreground">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get started with the Vytreon ecosystem in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-6 ${step.color}`}>
                  {step.icon}
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent text-background rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-to-r from-card to-accent/5 border-accent/20">
            <h3 className="text-xl font-bold text-foreground mb-2">Ready in Minutes</h3>
            <p className="text-muted-foreground">Join thousands of users already building with Vytreon</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;