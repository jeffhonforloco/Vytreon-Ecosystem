import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Smartphone, Code, Sparkles, Zap, Layout, Globe } from 'lucide-react';

const FycraShowcase = () => {
  const handleTryFycra = () => {
    window.open('https://www.fycra.com', '_blank');
  };

  const features = [
    {
      icon: <Layout size={20} />,
      title: "No-Code Builder",
      description: "Visual drag-and-drop interface"
    },
    {
      icon: <Code size={20} />,
      title: "Full-Code IDE",
      description: "Complete developer environment"
    },
    {
      icon: <Smartphone size={20} />,
      title: "Cross-Platform",
      description: "Deploy to iOS & Android"
    },
    {
      icon: <Globe size={20} />,
      title: "Web Ready",
      description: "Instant web deployment"
    }
  ];

  return (
    <section id="fycra" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-strong">
                <Zap size={16} className="text-purple-400" />
                <span className="text-sm font-medium text-purple-400">No-Code + Full-Code</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Fycra
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build production apps with no-code or full-code. Seamlessly switch between visual 
                creation and developer IDE.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Deploy to web, iOS, and Android in minutes. The perfect tool for designers who code 
                and developers who design.
              </p>
              
              <Button 
                size="lg" 
                onClick={handleTryFycra} 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-12 py-7 text-lg font-semibold rounded-xl h-auto group shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 mb-12"
              >
                Try Fycra
                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-purple-400 mt-0.5">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-0.5">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Visual Showcase */}
            <div className="relative">
              {/* Fycra Logo Container */}
              <div className="glass-strong rounded-3xl p-12 backdrop-blur-xl shadow-2xl">
                <div className="aspect-square flex items-center justify-center relative">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-2xl animate-pulse"></div>
                  
                  {/* Fycra Logo SVG - Colorful Infinity Wave */}
                  <div className="relative z-10">
                    <svg viewBox="0 0 200 200" className="w-64 h-64">
                      <defs>
                        <linearGradient id="fycra-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                          <stop offset="50%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
                        </linearGradient>
                        <linearGradient id="fycra-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
                          <stop offset="50%" style={{stopColor: '#F59E0B', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#EAB308', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      
                      {/* Simplified infinity wave design */}
                      <path
                        d="M 40 100 Q 60 60, 80 80 T 120 100 Q 140 140, 160 120"
                        stroke="url(#fycra-gradient-1)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        fill="none"
                        className="animate-pulse"
                      />
                      <path
                        d="M 160 100 Q 140 60, 120 80 T 80 100 Q 60 140, 40 120"
                        stroke="url(#fycra-gradient-2)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        fill="none"
                        className="animate-pulse delay-500"
                      />
                    </svg>
                  </div>
                </div>

                {/* Feature highlights */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">2x</div>
                    <div className="text-xs text-muted-foreground">Faster</div>
                  </div>
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">3</div>
                    <div className="text-xs text-muted-foreground">Platforms</div>
                  </div>
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-pink-400">∞</div>
                    <div className="text-xs text-muted-foreground">Possibilities</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FycraShowcase;

