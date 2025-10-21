import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@vytreon.com';
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      twitter: 'https://twitter.com/vytreon',
      github: 'https://github.com/vytreon',
      linkedin: 'https://linkedin.com/company/vytreon'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  const products = [
    { name: 'SireIQ', url: 'https://sireiq.com' },
    { name: 'Fycra', url: 'https://www.fycra.com' },
    { name: 'CaptionIQ', url: 'https://www.captioniq.io' },
    { name: 'SEOAgentPro', url: 'https://seoagentpro.com' },
    { name: 'Escazo', url: 'https://www.escazo.com' },
    { name: 'VoxSaga', url: 'https://www.voxsaga.com' },
    { name: 'WhisApp', url: 'https://www.whisapp.com' },
    { name: 'Oowo', url: 'https://oowo.io' },
    { name: 'Didit360', url: 'https://didit360.com' }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/8e349754-a378-4d24-aa39-58005d777cc5.png" 
                alt="Vytreon Logo" 
                className="h-8 w-auto" 
              />
              <span className="text-lg font-bold text-foreground">Vytreon</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Building the next generation of AI-powered tools and platforms.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('github')}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <button 
                    onClick={() => window.open(product.url, '_blank')}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors text-left"
                  >
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-sm text-muted-foreground hover:text-accent transition-colors">Documentation</Link></li>
              <li><Link to="/api" className="text-sm text-muted-foreground hover:text-accent transition-colors">API</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/community" className="text-sm text-muted-foreground hover:text-accent transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
              <li>
                <button 
                  onClick={handleEmailClick}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors text-left"
                >
                  info@vytreon.com
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vytreon Group, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-accent transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
