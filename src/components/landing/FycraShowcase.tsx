import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Smartphone, Code, Sparkles, Zap, Layout, Globe } from 'lucide-react';
const FycraShowcase = () => {
  const handleTryFycra = () => {
    window.open('https://www.fycra.com', '_blank');
  };
  const features = [{
    icon: <Layout size={20} />,
    title: "No-Code Builder",
    description: "Visual drag-and-drop interface"
  }, {
    icon: <Code size={20} />,
    title: "Full-Code IDE",
    description: "Complete developer environment"
  }, {
    icon: <Smartphone size={20} />,
    title: "Cross-Platform",
    description: "Deploy to iOS & Android"
  }, {
    icon: <Globe size={20} />,
    title: "Web Ready",
    description: "Instant web deployment"
  }];
  return <section id="fycra" className="py-20 md:py-32 relative overflow-hidden bg-background">
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
              
              <Button size="lg" onClick={handleTryFycra} className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-12 py-7 text-lg font-semibold rounded-xl h-auto group shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 mb-12">
                Try Fycra
                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => <div key={index} className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-purple-400 mt-0.5">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-0.5">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
            
            {/* Right: Visual Showcase */}
            <div className="relative">
              {/* Fycra Logo Container */}
              
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FycraShowcase;