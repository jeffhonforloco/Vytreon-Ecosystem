import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Database, Activity, Search, Brain, MessageSquare, Share2, Video, FileText, Headphones, Mail } from 'lucide-react';

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

  const handleProductClick = (productName: string) => {
    const productUrls = {
      'Oowo': 'https://www.oowo.io',
      'Escazo': 'https://www.escazo.com',
      'Didit360': 'https://www.didit360.com',
      'WhisApp': 'https://whisapp.com',
      'iXhare': 'https://ixhare.com',
      'SireIQ': 'https://www.sireiQ.com',
      'Voxsaga': 'https://voxsaga.com',
      'SEOAgentPro': 'https://seoagentpro.com',
      'CumnIQ': 'https://cumniq.com'
    };
    
    const url = productUrls[productName as keyof typeof productUrls];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <footer className="bg-vytreon-dark-blue/50 border-t border-vytreon-cyan/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/8e349754-a378-4d24-aa39-58005d777cc5.png" 
              alt="Vytreon Logo" 
              className="h-12 w-auto mb-4" 
            />
            <p className="text-gray-400 mb-4">
              Building the future of integrated digital ecosystems through innovation, collaboration, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="text-gray-400 hover:text-vytreon-cyan transition-colors"
              >
                <Twitter size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('github')}
                className="text-gray-400 hover:text-vytreon-cyan transition-colors"
              >
                <Github size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className="text-gray-400 hover:text-vytreon-cyan transition-colors"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Database size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('Oowo')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  Oowo
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Database size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('Escazo')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  Escazo
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Activity size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('Didit360')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  Didit360
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Search size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('SEOAgentPro')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  SEOAgentPro
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Brain size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('SireIQ')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  SireIQ
                </button>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('WhisApp')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  WhisApp
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Share2 size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('iXhare')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  iXhare
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Video size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('Voxsaga')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  Voxsaga
                </button>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={16} className="text-vytreon-cyan" />
                <Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Fycera</Link>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={16} className="text-vytreon-cyan" />
                <Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Fycra</Link>
              </li>
              <li className="flex items-center gap-2">
                <Headphones size={16} className="text-vytreon-cyan" />
                <Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Auralora</Link>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare size={16} className="text-vytreon-cyan" />
                <Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Chattrer</Link>
              </li>
              <li className="flex items-center gap-2">
                <Brain size={16} className="text-vytreon-cyan" />
                <button 
                  onClick={() => handleProductClick('CumnIQ')}
                  className="text-gray-400 hover:text-vytreon-cyan transition-colors text-left"
                >
                  CumnIQ
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/docs" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Documentation</Link></li>
              <li><Link to="/api" className="text-gray-400 hover:text-vytreon-cyan transition-colors">API Reference</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Community</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Security</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-vytreon-cyan transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Contact</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <p className="text-gray-500 mb-4 md:mb-0 flex items-center gap-2">
              <Mail size={16} className="text-vytreon-cyan" />
              <button 
                onClick={handleEmailClick}
                className="hover:text-vytreon-cyan transition-colors"
              >
                info@vytreon.com
              </button>
            </p>
            <p className="text-gray-500 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Vytreon Group. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-vytreon-cyan transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-vytreon-cyan transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-vytreon-cyan transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
