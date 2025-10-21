import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Lightbulb, Code2, FileText, BarChart3, Sparkles } from 'lucide-react';

const SireIQFlagship = () => {
  const handleTrySireIQ = () => {
    window.open('https://sireiq.com', '_blank');
  };

  const showcaseCards = [
    { 
      icon: <Lightbulb size={24} />, 
      title: "Generate Ideas", 
      subtitle: "Brainstorm creative solutions",
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    },
    { 
      icon: <Code2 size={24} />, 
      title: "Write Code", 
      subtitle: "Build applications faster",
      gradient: "from-purple-500 via-violet-500 to-indigo-500"
    },
    { 
      icon: <FileText size={24} />, 
      title: "Create Content", 
      subtitle: "Write engaging copy",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    { 
      icon: <BarChart3 size={24} />, 
      title: "Analyze Data", 
      subtitle: "Extract insights quickly",
      gradient: "from-pink-500 via-rose-500 to-red-500"
    }
  ];

  return (
    <section id="sireiq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-strong">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Flagship Product</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              SireIQ
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your all-in-one AI creative platform. Chat, create, code, and collaborate 
              with advanced AI assistance for every task.
            </p>
          </div>

          {/* Product Showcase - SireIQ Interface */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Action Cards Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {showcaseCards.map((card, index) => (
                  <div 
                    key={index}
                    className={`relative group cursor-pointer rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${card.gradient}`}
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="text-white">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {card.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                ))}
              </div>

              {/* Pro Tip */}
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground">
                  Pro tip: You can type anything or use voice input to get started
                </p>
              </div>

              {/* Input Field Mockup */}
              <div className="glass rounded-2xl p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Ask anything" 
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                    disabled
                  />
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Feature tagline */}
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  SireIQ helps with AI-powered insights, content creation, and workflow optimization.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleTrySireIQ} 
              className="bg-accent hover:bg-accent/90 text-white px-12 py-7 text-lg font-semibold rounded-xl h-auto group shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              Try SireIQ Free
              <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Free forever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SireIQFlagship;
