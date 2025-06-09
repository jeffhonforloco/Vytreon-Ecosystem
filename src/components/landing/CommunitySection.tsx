
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, MessageCircle, ExternalLink } from 'lucide-react';

const CommunitySection = () => {
  const [email, setEmail] = useState('');

  const resources = [
    {
      title: "Developer Documentation",
      description: "Comprehensive guides and API documentation for all products",
      link: "https://docs.vytreon.com",
      icon: <BookOpen size={20} />
    },
    {
      title: "Community Forum",
      description: "Connect with other users, share tips, and get help",
      link: "https://community.vytreon.com",
      icon: <MessageCircle size={20} />
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for getting the most out of Vytreon",
      link: "https://learn.vytreon.com",
      icon: <ExternalLink size={20} />
    }
  ];

  const handleResourceClick = (link: string) => {
    window.open(link, '_blank');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="section-heading">Join the Vytreon Community</h2>
          <p className="text-gray-300 text-xl">
            Connect with developers, entrepreneurs, and businesses who are building 
            the future with Vytreon's integrated ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="glass-card neon-border p-6 hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-vytreon-cyan">{resource.icon}</div>
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-vytreon-cyan transition-colors">
                  {resource.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {resource.description}
              </p>
              <Button 
                onClick={() => handleResourceClick(resource.link)}
                variant="outline" 
                className="border-vytreon-cyan/50 text-vytreon-cyan hover:bg-vytreon-cyan/10 w-full"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-vytreon-cyan/10 to-vytreon-blue/10 border border-vytreon-cyan/20 rounded-xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest updates on new features, product releases, and community events. 
            Join our newsletter for exclusive insights and early access.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-vytreon-dark border border-vytreon-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-vytreon-cyan"
              required
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-6 py-3 rounded-lg"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
