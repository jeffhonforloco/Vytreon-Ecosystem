
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import VisionSection from '@/components/sections/VisionSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import GovernanceSection from '@/components/sections/GovernanceSection';
import CallToAction from '@/components/sections/CallToAction';

const Index = () => {
  useEffect(() => {
    document.title = "Vytreon | Transforming Digital Ecosystems";
  }, []);

  return (
    <div className="min-h-screen bg-vytreon-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <VisionSection />
        <EcosystemSection />
        <GovernanceSection />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
