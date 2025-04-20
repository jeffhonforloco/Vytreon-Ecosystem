
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
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
              Building the decentralized future through innovation, security, and community governance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Oowo</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">NFTchords</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Escazo</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">WhisApp</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Chattrer</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Documentation</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">API Reference</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Community</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Security</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">About</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Partners</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-vytreon-cyan transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Vytreon Group. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-500 hover:text-vytreon-cyan transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-vytreon-cyan transition-colors">Terms of Service</Link>
            <Link to="#" className="text-gray-500 hover:text-vytreon-cyan transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
