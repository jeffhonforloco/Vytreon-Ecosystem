
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VytreonHero from '@/components/landing/VytreonHero';
import SireIQFlagship from '@/components/landing/SireIQFlagship';
import EcosystemGrid from '@/components/landing/EcosystemGrid';
import VisionStatement from '@/components/landing/VisionStatement';
import HowItWorks from '@/components/landing/HowItWorks';
import FinalCTA from '@/components/landing/FinalCTA';

const Index = () => {
  useEffect(() => {
    document.title = "Vytreon - Technology That Powers Innovation";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <VytreonHero />
        <SireIQFlagship />
        <EcosystemGrid />
        <VisionStatement />
        <HowItWorks />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
