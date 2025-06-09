
import React from 'react';
import { Card } from '@/components/ui/card';
import { UserPlus, Settings, RefreshCw, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Your Account",
      description: "Sign up once and get access to the entire Vytreon ecosystem. No need for multiple accounts or complex setup processes.",
      icon: <UserPlus size={32} className="text-vytreon-cyan" />,
      color: "border-vytreon-cyan"
    },
    {
      step: "02", 
      title: "Configure Your Workspace",
      description: "Choose the products you need and customize your workspace. Everything integrates automatically with your preferences.",
      icon: <Settings size={32} className="text-vytreon-blue" />,
      color: "border-vytreon-blue"
    },
    {
      step: "03",
      title: "Connect & Sync",
      description: "Your data flows seamlessly between all products. Changes in one app reflect everywhere, keeping you in sync.",
      icon: <RefreshCw size={32} className="text-vytreon-purple" />,
      color: "border-vytreon-purple"
    },
    {
      step: "04",
      title: "Analyze & Optimize",
      description: "Get unified insights across all your activities. Make data-driven decisions with comprehensive analytics.",
      icon: <BarChart3 size={32} className="text-vytreon-cyan" />,
      color: "border-vytreon-cyan"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-vytreon-dark-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="section-heading">How Vytreon Works</h2>
          <p className="text-gray-300 text-xl">
            Getting started with Vytreon is simple. Our integrated approach means 
            you'll be productive from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className={`glass-card border-2 ${step.color} p-6 text-center relative group hover:scale-105 transition-all duration-300`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-vytreon-dark border-2 border-current rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              
              <div className="mt-4 mb-6 flex justify-center">
                {step.icon}
              </div>
              
              <h3 className="font-heading text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-xl p-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Ready in Minutes, Not Hours
            </h3>
            <p className="text-gray-300 mb-6">
              Unlike traditional software suites that require complex setup and integration, 
              Vytreon is designed to work out of the box. Start using any product immediately 
              and add more as you grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-vytreon-cyan/10 text-vytreon-cyan px-4 py-2 rounded-full text-sm">
                Zero Setup Time
              </span>
              <span className="bg-vytreon-blue/10 text-vytreon-blue px-4 py-2 rounded-full text-sm">
                Instant Sync
              </span>
              <span className="bg-vytreon-purple/10 text-vytreon-purple px-4 py-2 rounded-full text-sm">
                Auto Configuration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
