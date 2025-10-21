import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const FinalCTA = () => {
  const handleTrySireIQ = () => {
    window.open('https://sireiq.com', '_blank');
  };

  const handleContact = () => {
    window.location.href = 'mailto:info@vytreon.com';
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Experience the power of AI-driven creativity with SireIQ, 
            or explore our full ecosystem of products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleTrySireIQ}
              size="lg"
              className="relative bg-gradient-to-r from-accent to-accent-secondary hover:from-accent/90 hover:to-accent-secondary/90 text-white px-10 py-7 text-lg font-semibold rounded-xl h-auto group overflow-hidden shadow-lg shadow-accent/50 hover:shadow-2xl hover:shadow-accent/60 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Try SireIQ Free
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <Button 
              onClick={handleContact}
              variant="outline" 
              size="lg"
              className="px-10 py-7 text-lg font-semibold rounded-xl h-auto glass-strong hover:glass transition-all duration-300 hover:scale-105 border-white/20"
            >
              <Mail size={20} className="mr-2" />
              Contact Sales
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Questions? Email us at{' '}
            <button 
              onClick={handleContact}
              className="text-accent hover:underline"
            >
              info@vytreon.com
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
