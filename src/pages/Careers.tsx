import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Briefcase, Heart, Rocket, Users, Code, Palette, BarChart, Globe } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: <Heart size={24} />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: <Rocket size={24} />,
      title: "Growth Opportunities",
      description: "Continuous learning, mentorship, and career advancement"
    },
    {
      icon: <Users size={24} />,
      title: "Collaborative Culture",
      description: "Work with talented people in an inclusive environment"
    },
    {
      icon: <Globe size={24} />,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours"
    }
  ];

  const departments = [
    {
      icon: <Code size={32} />,
      name: "Engineering",
      description: "Build cutting-edge AI products and scalable systems",
      openings: "Multiple positions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette size={32} />,
      name: "Design",
      description: "Create beautiful, intuitive user experiences",
      openings: "2 positions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart size={32} />,
      name: "Product",
      description: "Shape the future of our product ecosystem",
      openings: "3 positions",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Users size={32} />,
      name: "Operations",
      description: "Drive efficiency and scale across the organization",
      openings: "2 positions",
      color: "from-orange-500 to-red-500"
    }
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
              <Briefcase size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Careers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Build the Future <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">With Us</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join a team of innovators, creators, and problem-solvers building AI-powered products 
              that transform industries and empower millions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Vytreon?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job—we offer an opportunity to make an impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl glass-strong text-accent mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions by Department */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities across different departments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group cursor-pointer"
              >
                <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${dept.color}`}>
                  {dept.icon}
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {dept.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {dept.description}
                </p>

                <div className="glass px-4 py-2 rounded-full inline-block text-sm text-accent font-medium">
                  {dept.openings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Hiring Process</h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and designed to get to know you
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply", desc: "Submit your application and resume" },
              { step: "2", title: "Screen", desc: "Initial conversation with our team" },
              { step: "3", title: "Interview", desc: "Technical and cultural fit interviews" },
              { step: "4", title: "Offer", desc: "Welcome to Vytreon!" }
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? Send us your resume anyway. We're always looking for exceptional talent.
            </p>
            <a 
              href="mailto:careers@vytreon.com"
              className="inline-block bg-gradient-to-r from-accent to-accent-secondary hover:from-accent/90 hover:to-accent-secondary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

