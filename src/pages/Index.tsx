
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LandingHero from '@/components/landing/LandingHero';
import AboutSection from '@/components/landing/AboutSection';
import ProductShowcase from '@/components/landing/ProductShowcase';
import IntegrationSection from '@/components/landing/IntegrationSection';
import ForEnterprise from '@/components/landing/ForEnterprise';
import CallToAction from '@/components/landing/CallToAction';

const Index = () => {
  useEffect(() => {
    document.title = "Vytreon | Connected Digital Ecosystem";
  }, []);

  return (
    <div className="min-h-screen bg-vytreon-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <LandingHero />
        <AboutSection />
        <ProductShowcase />
        <IntegrationSection />
        <ForEnterprise />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
