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
    <section id="contact" className="py-20 md:py-32 bg-white">
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
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base font-medium rounded-lg h-auto group"
            >
              Try SireIQ Free
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={handleContact}
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-lg h-auto border-2 hover:bg-secondary/50"
            >
              <Mail size={18} className="mr-2" />
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
