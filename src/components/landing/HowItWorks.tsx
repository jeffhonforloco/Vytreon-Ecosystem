import React from 'react';
import { UserPlus, Sparkles, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus size={32} />,
      title: "Sign Up",
      description: "Create your account and get instant access to our platform"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Choose Your Tools",
      description: "Select from our suite of AI-powered products"
    },
    {
      icon: <Rocket size={32} />,
      title: "Start Creating",
      description: "Begin building, creating, and innovating with AI assistance"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Simple, fast, and powerful. Start using Vytreon's products today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative group">
              {/* Connector line with glow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5">
                  <div className="h-full bg-gradient-to-r from-accent/50 to-transparent"></div>
                </div>
              )}
              
              <div className="relative w-24 h-24 mx-auto mb-6 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent-secondary/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative glass-strong rounded-2xl w-full h-full flex items-center justify-center text-accent group-hover:scale-110 transition-all duration-500">
                  {step.icon}
                </div>
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-accent to-accent-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-accent/50 z-20">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
