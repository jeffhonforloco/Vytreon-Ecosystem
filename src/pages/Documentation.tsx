import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Book, Code, Rocket, Shield, Zap, ArrowRight, Search, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Documentation = () => {
  const docSections = [
    {
      title: "Getting Started",
      icon: <Rocket size={24} />,
      description: "Quick start guides and tutorials to get you up and running",
      links: ["Installation", "First Steps", "Basic Concepts", "Tutorials"]
    },
    {
      title: "API Reference",
      icon: <Code size={24} />,
      description: "Complete API documentation for all Vytreon products",
      links: ["REST API", "GraphQL API", "Webhooks", "Authentication"]
    },
    {
      title: "Security & Privacy",
      icon: <Shield size={24} />,
      description: "Security best practices and privacy guidelines",
      links: ["Security Overview", "Data Protection", "Compliance", "Best Practices"]
    },
    {
      title: "Advanced Topics",
      icon: <Zap size={24} />,
      description: "Deep dives into advanced features and integrations",
      links: ["Custom Integrations", "Scaling", "Performance", "Troubleshooting"]
    }
  ];

  const popularDocs = [
    "SireIQ Integration Guide",
    "Fycra App Development",
    "Authentication & Authorization",
    "Webhook Configuration",
    "Rate Limits & Best Practices",
    "Error Handling"
  ];

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
              <Book size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Documentation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Vytreon <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">Documentation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Everything you need to build, integrate, and scale with Vytreon's ecosystem of products.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  className="pl-12 pr-4 py-6 glass-card border-border focus-visible:ring-accent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-accent to-accent-secondary hover:from-accent/90 hover:to-accent-secondary/90 text-white px-8 py-6 text-lg h-auto group">
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="glass-strong border-border hover:border-accent px-8 py-6 text-lg h-auto group">
                <Download size={20} className="mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {docSections.map((section, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group">
                <div className="relative w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative glass-strong rounded-xl w-full h-full flex items-center justify-center group-hover:bg-accent/20 transition-all">
                    {section.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {section.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-2">
                  {section.links.map((link, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group/link"
                    >
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Popular Documentation */}
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Popular Documentation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularDocs.map((doc, index) => (
                <a
                  key={index}
                  href="#"
                  className="glass-card rounded-xl p-4 hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <Book size={18} className="text-accent" />
                    <span className="text-foreground group-hover:text-accent transition-colors">
                      {doc}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;

