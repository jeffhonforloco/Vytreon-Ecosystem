import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, MessageSquare, Phone, MapPin, Send, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "General Inquiries",
      detail: "info@vytreon.com",
      action: "mailto:info@vytreon.com,vytreongroup@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Building2 size={24} />,
      title: "Careers & Jobs",
      detail: "info@vytreon.com",
      action: "mailto:info@vytreon.com,vytreongroup@gmail.com?subject=Career Inquiry",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Support",
      detail: "info@vytreon.com",
      action: "mailto:info@vytreon.com,vytreongroup@gmail.com?subject=Support Request",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Phone size={24} />,
      title: "Business & Partners",
      detail: "vytreongroup@gmail.com",
      action: "mailto:info@vytreon.com,vytreongroup@gmail.com?subject=Business Inquiry",
      color: "from-orange-500 to-red-500"
    }
  ];

  const departments = [
    { name: "General Inquiries", email: "info@vytreon.com" },
    { name: "Sales & Partnerships", email: "vytreongroup@gmail.com" },
    { name: "Customer Support", email: "info@vytreon.com" },
    { name: "Press & Media", email: "info@vytreon.com" },
    { name: "Careers", email: "info@vytreon.com" },
    { name: "Legal", email: "info@vytreon.com" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-strong">
              <MessageSquare size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Contact Us</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Get in <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">Touch</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Have a question, feedback, or want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 group"
              >
                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 mx-auto bg-gradient-to-br ${info.color}`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {info.title}
                </h3>
                <p className="text-sm text-muted-foreground">{info.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="glass-card border-border focus-visible:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="glass-card border-border focus-visible:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input
                  type="text"
                  placeholder="What's this about?"
                  className="glass-card border-border focus-visible:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 rounded-lg glass-card border border-border focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-accent to-accent-secondary hover:from-accent/90 hover:to-accent-secondary/90 text-white py-6 text-lg h-auto group">
                Send Message
                <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Department List */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Department Directory</h2>
            <p className="text-lg text-muted-foreground">
              Reach out to the right team for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <a
                key={index}
                href={`mailto:${dept.email}`}
                className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg glass-strong flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{dept.email}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl glass mb-6">
              <MapPin size={28} className="text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vytreon Group, LLC
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Global Headquarters
            </p>
            <p className="text-muted-foreground">
              Building innovative products for a connected world
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

