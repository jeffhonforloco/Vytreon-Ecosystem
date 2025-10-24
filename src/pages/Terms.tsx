import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Mail } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: <CheckCircle size={24} />,
      title: "Acceptance of Terms",
      content: "By accessing or using any Vytreon service, website, or application, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
    },
    {
      icon: <FileText size={24} />,
      title: "Use License",
      content: "Vytreon grants you a limited, non-exclusive, non-transferable, revocable license to use our services for personal or commercial purposes, subject to these Terms. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from our services without our prior written consent."
    },
    {
      icon: <AlertCircle size={24} />,
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. You must not use our services for any illegal or unauthorized purpose, violate any laws, infringe on intellectual property rights, or transmit malicious code or content."
    },
    {
      icon: <Scale size={24} />,
      title: "Intellectual Property",
      content: "All content, features, and functionality of Vytreon services, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software, are the exclusive property of Vytreon Inc. or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
    },
    {
      icon: <XCircle size={24} />,
      title: "Prohibited Activities",
      content: "You may not: (a) use our services for any illegal purpose; (b) attempt to gain unauthorized access to our systems; (c) interfere with or disrupt our services; (d) use automated systems to access our services without permission; (e) impersonate any person or entity; (f) harass, abuse, or harm others; (g) collect user data without consent; or (h) violate any applicable laws or regulations."
    }
  ];

  const additionalTerms = [
    {
      title: "Service Modifications",
      content: "Vytreon reserves the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We may also impose limits on certain features or restrict access to parts or all of the services without liability."
    },
    {
      title: "Payment and Subscriptions",
      content: "Some of our services may require payment. You agree to pay all fees and charges associated with your account. All payments are non-refundable unless otherwise stated. We reserve the right to change our pricing at any time with reasonable notice."
    },
    {
      title: "Third-Party Links and Services",
      content: "Our services may contain links to third-party websites or services. Vytreon is not responsible for the content, accuracy, or practices of these third-party sites. Your use of third-party services is at your own risk and subject to their terms and conditions."
    },
    {
      title: "Disclaimers",
      content: "Our services are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. Vytreon does not warrant that our services will be uninterrupted, secure, or error-free. We do not guarantee the accuracy, completeness, or usefulness of any information on our services."
    },
    {
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, Vytreon Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services."
    },
    {
      title: "Indemnification",
      content: "You agree to indemnify, defend, and hold harmless Vytreon Inc., its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of your use of our services or violation of these Terms."
    },
    {
      title: "Termination",
      content: "We reserve the right to terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our services will immediately cease."
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which Vytreon Inc. is registered, without regard to its conflict of law provisions. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in that location."
    },
    {
      title: "Dispute Resolution",
      content: "Any disputes arising out of or relating to these Terms or our services shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes may be resolved through binding arbitration in accordance with applicable arbitration rules."
    },
    {
      title: "Severability",
      content: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect. The invalid provision will be modified to the extent necessary to make it valid and enforceable while preserving its intent."
    },
    {
      title: "Changes to Terms",
      content: "Vytreon reserves the right to update or modify these Terms at any time without prior notice. Your continued use of our services after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-strong">
              <Scale size={16} className="text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Terms of Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Terms of <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Service</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These Terms of Service govern your use of Vytreon's services, websites, and applications. Please read them carefully.
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Last Updated: October 24, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Main Sections */}
            {sections.map((section, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Terms */}
            <div className="grid gap-6 mt-16">
              {additionalTerms.map((term, index) => (
                <div key={index} className="glass-card rounded-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{term.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{term.content}</p>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="glass-strong rounded-2xl p-8 md:p-10 text-center mt-16">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Our Terms?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have any questions or concerns about these Terms of Service, please don't hesitate to reach out.
              </p>
              <a
                href="mailto:info@vytreon.com,vytreongroup@gmail.com?subject=Terms of Service Inquiry"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;

