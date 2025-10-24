import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Briefcase, Heart, Rocket, Users, Code, Palette, BarChart, Globe, MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable backend systems and APIs for our AI-powered products",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Developer (React)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, responsive user interfaces for web applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Engineer (AWS/Azure)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and maintain cloud infrastructure for our product ecosystem",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Data Scientist",
      department: "AI & Data",
      location: "Remote",
      type: "Full-time",
      description: "Develop machine learning models and analyze data to drive product insights",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Data Analyst",
      department: "AI & Data",
      location: "Remote",
      type: "Full-time",
      description: "Transform data into actionable insights to improve our products",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive, user-centered experiences across our product suite",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Shape the visual identity and user experience of flagship products",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain CI/CD pipelines and deployment infrastructure",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Drive product strategy and roadmap for key product initiatives",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Work across frontend and backend to deliver end-to-end features",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Developer (React Native)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build cross-platform mobile applications for iOS and Android",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "QA Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Ensure product quality through comprehensive testing strategies",
      color: "from-cyan-500 to-teal-500"
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

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team and help build the future of AI-powered products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${job.color} text-white`}>
                      {job.department}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-accent" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock size={14} className="text-accent" />
                    {job.type}
                  </div>
                </div>

                <Button 
                  onClick={() => window.location.href = 'mailto:info@vytreon.com,vytreongroup@gmail.com?subject=Application for ' + job.title}
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  Apply Now
                </Button>
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
              href="mailto:info@vytreon.com,vytreongroup@gmail.com?subject=Job Application - Resume Submission"
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

