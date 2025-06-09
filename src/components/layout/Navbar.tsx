
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
    setMobileMenuOpen(false); // Close mobile menu when clicking an item
    
    // Find the element to scroll to
    const element = document.getElementById(sectionId);
    if (element) {
      // Adding a small delay to ensure UI updates before scrolling
      setTimeout(() => {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 80, // Offset for the navbar height
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'vision', label: 'Vision' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'governance', label: 'Governance' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-vytreon-dark/80 border-b border-vytreon-cyan/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/9f4fc31e-da9e-48a9-942d-5df7c9e41858.png" 
            alt="Vytreon Logo" 
            className="h-10 w-auto" 
          />
          <span className="font-heading text-xl font-extrabold text-white">Vytreon</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-vytreon-cyan transition-colors cursor-pointer font-semibold"
            >
              {item.label}
            </button>
          ))}
          <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold">
            Connect
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
                className="text-white hover:text-vytreon-cyan px-2 py-2 transition-colors cursor-pointer font-semibold"
              >
                {item.label}
              </button>
            ))}
            <Button className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white w-full font-bold">
              Connect
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
