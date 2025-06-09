
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LandingHero from '@/components/landing/LandingHero';
import AboutVytreon from '@/components/landing/AboutVytreon';
import ProductEcosystem from '@/components/landing/ProductEcosystem';
import HowItWorks from '@/components/landing/HowItWorks';
import ForBusinesses from '@/components/landing/ForBusinesses';
import TechnologyStack from '@/components/landing/TechnologyStack';
import CommunitySection from '@/components/landing/CommunitySection';
import FinalCTA from '@/components/landing/FinalCTA';

const Index = () => {
  useEffect(() => {
    document.title = "Vytreon | Complete Digital Ecosystem";
  }, []);

  return (
    <div className="min-h-screen bg-vytreon-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <LandingHero />
        <AboutVytreon />
        <ProductEcosystem />
        <HowItWorks />
        <ForBusinesses />
        <TechnologyStack />
        <CommunitySection />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
