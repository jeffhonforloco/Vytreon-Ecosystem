
import React from 'react';
import { Button } from '@/components/ui/button';

const ForEnterprise = () => {
  return (
    <section id="enterprise" className="py-16 bg-vytreon-dark-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">For Business</h2>
          <p className="text-gray-300 text-lg mb-8">
            Custom solutions and enterprise features for your organization.
          </p>
          <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-4 rounded-lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForEnterprise;
