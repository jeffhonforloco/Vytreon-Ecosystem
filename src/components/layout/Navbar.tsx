
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 80,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'how-it-works', label: 'How it Works' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-vytreon-dark/90 border-b border-vytreon-cyan/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/8e349754-a378-4d24-aa39-58005d777cc5.png" 
            alt="Vytreon Logo" 
            className="h-10 w-auto" 
          />
          <span className="font-heading text-2xl font-extrabold text-white">Vytreon</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-vytreon-cyan transition-colors cursor-pointer font-semibold text-lg"
            >
              {item.label}
            </button>
          ))}
          <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-6 py-2">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-vytreon-dark-blue/95 backdrop-blur-lg border-b border-vytreon-cyan/20 px-4 py-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-vytreon-cyan px-2 py-2 transition-colors cursor-pointer font-semibold text-left"
              >
                {item.label}
              </button>
            ))}
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white w-full font-bold">
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
