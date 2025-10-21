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
              
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Build something </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  amazing
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Create full-stack apps by chatting with AI. No signup required to start.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Build production apps with no-code or full-code. Seamlessly switch between visual 
                creation and developer IDE. Deploy to web, iOS, and Android in minutes.
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
                  
                  {/* Fycra Logo - Exact Match */}
                  <div className="relative z-10">
                    <svg viewBox="0 0 900 600" className="w-full h-full max-w-lg">
                      <defs>
                        {/* Gradient definitions matching actual Fycra logo */}
                        <linearGradient id="fycra-gradient-1" x1="0%" y1="50%" x2="50%" y2="0%">
                          <stop offset="0%" style={{stopColor: '#1e3a8a', stopOpacity: 1}} />
                          <stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                        </linearGradient>
                        
                        <linearGradient id="fycra-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                          <stop offset="50%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#22d3ee', stopOpacity: 1}} />
                        </linearGradient>
                        
                        <linearGradient id="fycra-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor: '#22d3ee', stopOpacity: 1}} />
                          <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                        </linearGradient>
                        
                        <linearGradient id="fycra-gradient-4" x1="100%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                          <stop offset="50%" style={{stopColor: '#f43f5e', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
                        </linearGradient>
                        
                        <linearGradient id="fycra-gradient-5" x1="100%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
                          <stop offset="50%" style={{stopColor: '#f97316', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#eab308', stopOpacity: 1}} />
                        </linearGradient>
                        
                        <linearGradient id="fycra-gradient-6" x1="100%" y1="50%" x2="0%" y2="50%">
                          <stop offset="0%" style={{stopColor: '#eab308', stopOpacity: 1}} />
                          <stop offset="50%" style={{stopColor: '#84cc16', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#22c55e', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      
                      {/* Smooth flowing infinity symbol */}
                      <path
                        d="M 150,300 C 150,200 200,150 280,180 C 340,205 380,250 450,250 C 520,250 560,205 620,180 C 700,150 750,200 750,300 C 750,400 700,450 620,420 C 560,395 520,350 450,350 C 380,350 340,395 280,420 C 200,450 150,400 150,300 Z"
                        fill="none"
                        stroke="url(#fycra-gradient-1)"
                        strokeWidth="45"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-90"
                      />
                      
                      <path
                        d="M 180,260 C 200,200 240,170 300,190 C 350,205 390,240 450,240"
                        fill="none"
                        stroke="url(#fycra-gradient-2)"
                        strokeWidth="45"
                        strokeLinecap="round"
                        className="opacity-95"
                      />
                      
                      <path
                        d="M 450,240 C 510,240 550,205 600,190 C 660,170 700,200 720,260"
                        fill="none"
                        stroke="url(#fycra-gradient-3)"
                        strokeWidth="45"
                        strokeLinecap="round"
                        className="opacity-95"
                      />
                      
                      <path
                        d="M 720,340 C 700,400 660,430 600,410 C 550,395 510,360 450,360"
                        fill="none"
                        stroke="url(#fycra-gradient-4)"
                        strokeWidth="45"
                        strokeLinecap="round"
                        className="opacity-95"
                      />
                      
                      <path
                        d="M 450,360 C 390,360 350,395 300,410 C 240,430 200,400 180,340"
                        fill="none"
                        stroke="url(#fycra-gradient-5)"
                        strokeWidth="45"
                        strokeLinecap="round"
                        className="opacity-95"
                      />
                      
                      <path
                        d="M 180,300 C 180,320 190,330 210,325 C 250,310 300,280 350,270"
                        fill="none"
                        stroke="url(#fycra-gradient-6)"
                        strokeWidth="40"
                        strokeLinecap="round"
                        className="opacity-90"
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

