import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
    { id: 'sireiq', label: 'SireIQ' },
    { id: 'fycra', label: 'Fycra' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/8e349754-a378-4d24-aa39-58005d777cc5.png" 
            alt="Vytreon Logo" 
            className="h-8 w-auto" 
          />
          <span className="text-xl font-bold text-foreground">Vytreon</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
          <Button 
            onClick={() => window.open('https://sireiq.com', '_blank')}
            className="bg-accent hover:bg-accent/90 text-white px-6 rounded-lg"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground text-left text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => window.open('https://sireiq.com', '_blank')}
              className="bg-accent hover:bg-accent/90 text-white w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
