import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Code, Terminal, Key, Database, Zap, Shield, ArrowRight, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const API = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const apiProducts = [
    {
      name: "SireIQ API",
      description: "AI-powered content generation and chat API",
      endpoint: "https://api.sireiq.com/v1",
      icon: <Code size={24} />
    },
    {
      name: "Fycra API",
      description: "No-code/full-code app development API",
      endpoint: "https://api.fycra.com/v1",
      icon: <Terminal size={24} />
    },
    {
      name: "SEOAgentPro API",
      description: "Intelligent SEO optimization API",
      endpoint: "https://api.seoagentpro.com/v1",
      icon: <Database size={24} />
    },
    {
      name: "Escazo API",
      description: "Travel and booking management API",
      endpoint: "https://api.escazo.com/v1",
      icon: <Zap size={24} />
    }
  ];

  const codeExample = `// Initialize Vytreon SDK
import { VytreonClient } from '@vytreon/sdk';

const client = new VytreonClient({
  apiKey: 'your_api_key_here',
  environment: 'production'
});

// Use SireIQ for AI content generation
const response = await client.sireiq.generate({
  prompt: 'Create a blog post about AI',
  model: 'sire-advanced-v1',
  maxTokens: 2000
});

console.log(response.content);`;

  const features = [
    {
      icon: <Key size={24} />,
      title: "API Authentication",
      description: "Secure API key and OAuth 2.0 authentication"
    },
    {
      icon: <Shield size={24} />,
      title: "Rate Limiting",
      description: "Intelligent rate limiting with automatic retry"
    },
    {
      icon: <Zap size={24} />,
      title: "Real-time Events",
      description: "WebSocket and webhook support for live updates"
    },
    {
      icon: <Database size={24} />,
      title: "Data Management",
      description: "Powerful querying and data storage capabilities"
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-strong">
              <Terminal size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">API Reference</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Build with <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">Vytreon API</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Powerful, unified API to integrate AI, development tools, and business solutions into your applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-accent to-accent-secondary hover:from-accent/90 hover:to-accent-secondary/90 text-white px-8 py-6 text-lg h-auto group">
                Get API Key
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="glass-strong border-border hover:border-accent px-8 py-6 text-lg h-auto">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Quick Start Example</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(codeExample, -1)}
                className="text-muted-foreground hover:text-accent"
              >
                {copiedIndex === -1 ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
            <pre className="glass rounded-xl p-6 overflow-x-auto">
              <code className="text-sm text-foreground font-mono">
                {codeExample}
              </code>
            </pre>
          </div>

          {/* API Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Available APIs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {apiProducts.map((product, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group">
                  <div className="relative w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
                    <div className="relative glass-strong rounded-xl w-full h-full flex items-center justify-center group-hover:bg-accent/20 transition-all">
                      {product.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="glass rounded-lg p-3 flex items-center justify-between group/endpoint">
                    <code className="text-xs text-accent font-mono">{product.endpoint}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(product.endpoint, index)}
                      className="opacity-0 group-hover/endpoint:opacity-100 transition-opacity"
                    >
                      {copiedIndex === index ? <Check size={14} /> : <Copy size={14} />}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:shadow-xl hover:shadow-accent/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg glass-strong text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default API;

