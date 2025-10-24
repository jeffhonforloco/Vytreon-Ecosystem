import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, MessageCircle, Github, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Community = () => {
  const communityChannels = [
    {
      name: "Discord Community",
      icon: <MessageCircle size={32} />,
      description: "Join developers, creators, and innovators in real-time discussions",
      members: "Join Now",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "GitHub",
      icon: <Github size={32} />,
      description: "Contribute to open-source projects and explore our repositories",
      members: "View Repos",
      color: "from-gray-500 to-gray-700"
    },
    {
      name: "Twitter/X",
      icon: <Twitter size={32} />,
      description: "Stay updated with the latest news, features, and community highlights",
      members: "Follow Us",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} />,
      description: "Connect with professionals and explore career opportunities",
      members: "Connect",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "YouTube",
      icon: <Youtube size={32} />,
      description: "Watch tutorials, product demos, and community showcases",
      members: "Subscribe",
      color: "from-red-500 to-red-700"
    }
  ];


  const communityPrograms = [
    {
      title: "Developer Champions",
      description: "Become a Vytreon advocate and earn exclusive perks, early access, and recognition",
      benefits: ["Early Access", "Exclusive Swag", "Direct Support", "Community Badge"]
    },
    {
      title: "Open Source Program",
      description: "Contribute to our ecosystem and help shape the future of Vytreon products",
      benefits: ["GitHub Recognition", "Contributor Rewards", "Code Reviews", "Mentorship"]
    },
    {
      title: "Creator Spotlight",
      description: "Showcase your projects built with Vytreon and inspire the community",
      benefits: ["Feature Spotlight", "Marketing Support", "Networking", "Prizes"]
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
              <Users size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Community</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Join the <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">Vytreon Community</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with creators, developers, and innovators from around the world. Share ideas, get support, and build together.
            </p>

            <Button className="bg-gradient-to-r from-accent to-accent-secondary hover:from-accent/90 hover:to-accent-secondary/90 text-white px-8 py-6 text-lg h-auto group">
              Join Our Discord
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Connect With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred platform to engage with the Vytreon community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group cursor-pointer"
              >
                <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${channel.color}`}>
                  {channel.icon}
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {channel.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {channel.description}
                </p>

                <div className="glass px-4 py-2 rounded-full inline-block text-sm text-accent font-medium">
                  {channel.members}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Community Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get more involved and unlock exclusive benefits
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {communityPrograms.map((program, index) => (
              <div
                key={index}
                className="glass-strong rounded-3xl p-8 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3 mb-8">
                  {program.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full glass-card border-border hover:border-accent group">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
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
              Ready to Get Involved?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a developer, creator, or enthusiast, there's a place for you in the Vytreon community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-accent to-accent-secondary hover:from-accent/90 hover:to-accent-secondary/90 text-white px-8 py-6 text-lg h-auto group">
                Join Discord
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="glass-card border-border hover:border-accent px-8 py-6 text-lg h-auto">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;

