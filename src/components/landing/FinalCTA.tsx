import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';
const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const handleGetNotified = () => {
    window.open('https://vytreon.com/notify', '_blank');
  };
  const handleScheduleDemo = () => {
    window.open('https://calendly.com/vytreon/demo', '_blank');
  };
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter signup:', email);
      setEmail('');
      alert('Thank you for subscribing to our newsletter!');
    }
  };
  const handleContactEmail = () => {
    window.location.href = 'mailto:info@vytreon.com';
  };
  return <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-vytreon-cyan/10 to-transparent"></div>
      <div className="absolute inset-0 hex-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-full px-4 py-2 mb-8">
            <Sparkles size={16} className="text-vytreon-cyan" />
            <span className="text-white font-medium">Be the first to know when we launch</span>
          </div>
          
          <h2 className="section-heading mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience the future of integrated digital ecosystems. 
            Vytreon is launching soon, and we're building something revolutionary for businesses 
            ready to streamline their operations and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={handleGetNotified} className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-8 py-6 text-lg rounded-lg flex items-center gap-3 group">
              Get Notified
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">✓ Early access</div>
              <p className="text-gray-400">Be among the first users</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">✓ Full ecosystem access</div>
              <p className="text-gray-400">All products included</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">✓ Priority support</div>
              <p className="text-gray-400">Direct access to our team</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-vytreon-dark-blue/30 border border-vytreon-cyan/20 rounded-xl">
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              "The integrated approach Vytreon is building will change how teams collaborate. 
              We can't wait to see this vision come to life."
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-10 w-10 bg-vytreon-cyan/20 rounded-full flex items-center justify-center">
                <span className="text-vytreon-cyan font-bold">AM</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Alex Morgan</p>
                <p className="text-gray-400 text-sm">CTO, Innovation Labs</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 bg-gradient-to-r from-vytreon-cyan/10 to-vytreon-blue/10 border border-vytreon-cyan/20 rounded-xl p-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on our launch progress, product reveals, and exclusive early access opportunities.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 bg-vytreon-dark border border-vytreon-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-vytreon-cyan" required />
              <Button type="submit" className="bg-gradient-to-r from-vytreon-cyan to-vytreon-blue hover:from-vytreon-blue hover:to-vytreon-cyan text-white font-bold px-6 py-3 rounded-lg">
                Subscribe
              </Button>
            </form>
            
            {/* Contact Information */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <Mail size={16} className="text-vytreon-cyan" />
              <span className="text-gray-300">Contact us: </span>
              <button onClick={handleContactEmail} className="text-vytreon-cyan hover:text-white transition-colors font-semibold">
                info@vytreon.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;