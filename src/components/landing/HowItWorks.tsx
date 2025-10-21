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
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
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
            <div key={index} className="text-center relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border"></div>
              )}
              
              <div className="w-24 h-24 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 relative z-10">
                {step.icon}
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
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
