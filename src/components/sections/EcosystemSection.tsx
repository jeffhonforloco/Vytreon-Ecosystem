
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Database, Layers, Network, Lock, Cpu } from 'lucide-react';

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState("architecture");

  return (
    <section id="ecosystem" className="py-24 relative">
      <div className="absolute inset-0 hex-grid z-0 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Ecosystem Architecture</h2>
          <p className="text-gray-300 text-lg">
            Our modular ecosystem connects innovative services through blockchain and smart contracts,
            delivering secure, immersive, and personalized experiences across platforms.
          </p>
        </div>

        <Tabs defaultValue="architecture" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 p-1">
              <TabsTrigger 
                value="architecture"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-vytreon-cyan/20 data-[state=active]:to-vytreon-blue/20 data-[state=active]:text-white"
              >
                Architecture
              </TabsTrigger>
              <TabsTrigger 
                value="security"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-vytreon-cyan/20 data-[state=active]:to-vytreon-blue/20 data-[state=active]:text-white"
              >
                Security
              </TabsTrigger>
              <TabsTrigger 
                value="experience"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-vytreon-cyan/20 data-[state=active]:to-vytreon-blue/20 data-[state=active]:text-white"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="technology"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-vytreon-cyan/20 data-[state=active]:to-vytreon-blue/20 data-[state=active]:text-white"
              >
                Technology
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="architecture" className="focus-visible:outline-none">
            <div className="glass-card neon-border p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-6">Modular Ecosystem Architecture</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-vytreon-cyan/10 p-2 mt-1">
                        <Layers size={20} className="text-vytreon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Modular Services</h4>
                        <p className="text-gray-400">Independent services (Oowo, NFTchords, Escazo, WhisApp) interconnected via standardized APIs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-vytreon-cyan/10 p-2 mt-1">
                        <Database size={20} className="text-vytreon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Blockchain & IPFS Integration</h4>
                        <p className="text-gray-400">Distributed storage and smart contract implementation across multiple chains</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-vytreon-cyan/10 p-2 mt-1">
                        <Cpu size={20} className="text-vytreon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">AI/ML Tools</h4>
                        <p className="text-gray-400">SireIQ and CumnIQ systems provide personalization, predictive analytics, and content optimization</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-vytreon-cyan/10 p-2 mt-1">
                        <Network size={20} className="text-vytreon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Metaverse Infrastructure</h4>
                        <p className="text-gray-400">Virtual storefronts and immersive experiences built on standardized protocols</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-vytreon-dark-blue rounded-xl border border-vytreon-cyan/30 p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vytreon-cyan to-vytreon-blue"></div>
                    
                    {/* Ecosystem Architecture Diagram */}
                    <div className="relative">
                      <div className="w-full aspect-square bg-vytreon-dark-blue/70 rounded-lg p-6 flex items-center justify-center">
                        <div className="w-4/5 aspect-square rounded-full border-2 border-dashed border-vytreon-cyan/30 relative animate-rotate-slow flex items-center justify-center">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/5 aspect-square rounded-full border-2 border-dashed border-vytreon-blue/30 animate-rotate-slow p-6 flex items-center justify-center">
                              <div className="w-4/5 h-4/5 bg-gradient-radial from-vytreon-cyan/20 to-vytreon-blue/5 rounded-full flex items-center justify-center">
                                <div className="rounded-full bg-vytreon-dark p-3 border border-vytreon-cyan animate-pulse-glow">
                                  <img 
                                    src="/lovable-uploads/20074475-c6f9-44c7-bcea-f548fa112e57.png" 
                                    alt="Vytreon Core" 
                                    className="h-12 w-12"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Nodes around the diagram */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-vytreon-dark-blue p-2 rounded-full border border-vytreon-cyan">
                            <span className="text-xs text-vytreon-cyan">Oowo</span>
                          </div>
                          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-vytreon-dark-blue p-2 rounded-full border border-vytreon-cyan">
                            <span className="text-xs text-vytreon-cyan">NFTchords</span>
                          </div>
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-vytreon-dark-blue p-2 rounded-full border border-vytreon-cyan">
                            <span className="text-xs text-vytreon-cyan">Escazo</span>
                          </div>
                          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-vytreon-dark-blue p-2 rounded-full border border-vytreon-cyan">
                            <span className="text-xs text-vytreon-cyan">WhisApp</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <p className="text-sm text-vytreon-cyan font-mono">Vytreon Modular Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="focus-visible:outline-none">
            <div className="glass-card neon-border p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-6">Zero-Trust Security Model</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-vytreon-cyan/10 p-2 mt-1">
                        <Lock size={20} className="text-vytreon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">End-to-End Encryption</h4>
                        <p className="text-gray-400">Military-grade encryption for all communications and data storage</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-vytreon-cyan/10 p-2 mt-1">
                        <Fingerprint size={20} className="text-vytreon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Decentralized Identity</h4>
                        <p className="text-gray-400">Self-sovereign identity solutions with multi-factor authentication</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-vytreon-cyan/10 p-2 mt-1">
                        <Shield size={20} className="text-vytreon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Secure Transactions</h4>
                        <p className="text-gray-400">Zero-knowledge proofs and multi-signature authorizations for financial operations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-vytreon-cyan/10 p-2 mt-1">
                        <Network size={20} className="text-vytreon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Protected Communications</h4>
                        <p className="text-gray-400">Secure messaging with ephemeral keys and forward secrecy via Chattrer protocol</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-vytreon-dark-blue rounded-xl border border-vytreon-cyan/30 p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vytreon-cyan to-vytreon-blue"></div>
                    
                    {/* Security Architecture Visualization */}
                    <div className="relative">
                      <div className="w-full aspect-square bg-vytreon-dark-blue/70 rounded-lg p-6 flex flex-col items-center justify-center">
                        <div className="w-full max-w-md bg-vytreon-dark-blue/80 rounded-lg border border-vytreon-cyan/30 p-4 mb-6">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Shield size={16} className="text-vytreon-cyan mr-2" />
                              <span className="text-xs text-white">Encrypted Data Flow</span>
                            </div>
                            <div className="h-2 w-16 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-vytreon-cyan to-vytreon-blue animate-pulse-glow" style={{width: "85%"}}></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative w-full max-w-md h-40 mb-6">
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="absolute w-32 h-32 border-2 border-vytreon-cyan/30 rounded-full animate-pulse-glow"></div>
                            <div className="absolute w-24 h-24 border-2 border-vytreon-blue/30 rounded-full animate-pulse-glow" style={{animationDelay: "0.5s"}}></div>
                            <div className="absolute w-16 h-16 border-2 border-vytreon-cyan/30 rounded-full animate-pulse-glow" style={{animationDelay: "1s"}}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Lock size={24} className="text-vytreon-cyan" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                          <div className="bg-vytreon-dark rounded-lg border border-vytreon-cyan/20 p-3 flex items-center justify-center text-center">
                            <div>
                              <Fingerprint size={20} className="text-vytreon-cyan mx-auto mb-2" />
                              <span className="text-xs text-gray-400">Identity Verification</span>
                            </div>
                          </div>
                          <div className="bg-vytreon-dark rounded-lg border border-vytreon-cyan/20 p-3 flex items-center justify-center text-center">
                            <div>
                              <Database size={20} className="text-vytreon-cyan mx-auto mb-2" />
                              <span className="text-xs text-gray-400">Encrypted Storage</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <p className="text-sm text-vytreon-cyan font-mono">Zero-Trust Security Framework</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="focus-visible:outline-none">
            {/* Experience Tab Content Here */}
            <div className="glass-card neon-border p-6 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-white mb-6">User Experience & Interface Design</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="glass-card p-4">
                  <h4 className="text-lg font-medium text-white mb-3">Modular UI</h4>
                  <p className="text-gray-400 mb-4">Customizable dashboards adapt to user preferences and device capabilities</p>
                  <div className="bg-vytreon-dark-blue/70 p-4 rounded-lg h-40 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <div className="bg-vytreon-cyan/10 rounded p-2 h-12"></div>
                      <div className="bg-vytreon-blue/10 rounded p-2 h-12"></div>
                      <div className="bg-vytreon-cyan/10 rounded p-2 h-12"></div>
                      <div className="bg-vytreon-blue/10 rounded p-2 h-12"></div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4">
                  <h4 className="text-lg font-medium text-white mb-3">Cross-Device Accessibility</h4>
                  <p className="text-gray-400 mb-4">Seamless experience across mobile, desktop, EV dashboards, and VR interfaces</p>
                  <div className="bg-vytreon-dark-blue/70 p-4 rounded-lg h-40 flex items-center justify-center gap-3">
                    <div className="h-20 w-10 border border-vytreon-cyan/30 rounded-lg"></div>
                    <div className="h-16 w-24 border border-vytreon-cyan/30 rounded-lg"></div>
                    <div className="h-12 w-20 border border-vytreon-blue/30 rounded"></div>
                    <div className="h-10 w-12 border border-vytreon-blue/30 rounded-lg"></div>
                  </div>
                </div>
                
                <div className="glass-card p-4">
                  <h4 className="text-lg font-medium text-white mb-3">Immersive Aesthetics</h4>
                  <p className="text-gray-400 mb-4">Metaverse-inspired visual design with spatial audio and haptic feedback</p>
                  <div className="bg-vytreon-dark-blue/70 p-4 rounded-lg h-40 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute w-32 h-32 rounded-full bg-gradient-radial from-vytreon-cyan/30 to-transparent animate-pulse"></div>
                      <div className="absolute w-48 h-48 rounded-full border border-dashed border-vytreon-blue/20 animate-rotate-slow"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-lg p-6">
                <h4 className="text-lg font-medium text-white mb-4">Personalization Engine</h4>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-vytreon-cyan"></div>
                        <span className="text-gray-300 text-sm">AI-driven content recommendations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-vytreon-cyan"></div>
                        <span className="text-gray-300 text-sm">Behavioral analysis for interface optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-vytreon-cyan"></div>
                        <span className="text-gray-300 text-sm">Context-aware assistance via SireIQ</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-vytreon-cyan"></div>
                        <span className="text-gray-300 text-sm">Multi-modal interactions (voice, gesture, text)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-radial from-vytreon-cyan/20 to-transparent animate-pulse-glow"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu size={32} className="text-vytreon-cyan" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="technology" className="focus-visible:outline-none">
            {/* Technology Tab Content Here */}
            <div className="glass-card neon-border p-6 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-white mb-6">Technology Stack</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-lg p-6">
                    <h4 className="font-medium text-white mb-4 flex items-center gap-2">
                      <Database size={18} className="text-vytreon-cyan" />
                      Blockchain Infrastructure
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-sm">Smart Contracts</span>
                          <span className="text-vytreon-cyan text-xs">EVM Compatible</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-vytreon-cyan to-vytreon-blue" style={{width: "90%"}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-sm">IPFS Storage</span>
                          <span className="text-vytreon-cyan text-xs">Distributed</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-vytreon-cyan to-vytreon-blue" style={{width: "85%"}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-sm">Layer 2 Scaling</span>
                          <span className="text-vytreon-cyan text-xs">Optimistic Rollups</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-vytreon-cyan to-vytreon-blue" style={{width: "75%"}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-lg p-6">
                    <h4 className="font-medium text-white mb-4 flex items-center gap-2">
                      <Cpu size={18} className="text-vytreon-cyan" />
                      AI Integration
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-sm">SireIQ Engine</span>
                          <span className="text-vytreon-cyan text-xs">Personalization</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-vytreon-cyan to-vytreon-blue" style={{width: "95%"}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-sm">CumnIQ Analytics</span>
                          <span className="text-vytreon-cyan text-xs">Predictive</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-vytreon-cyan to-vytreon-blue" style={{width: "88%"}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-sm">Neural Networks</span>
                          <span className="text-vytreon-cyan text-xs">Deep Learning</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-vytreon-cyan to-vytreon-blue" style={{width: "80%"}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-vytreon-dark-blue/50 border border-vytreon-cyan/20 rounded-lg p-6 h-full flex flex-col">
                    <h4 className="font-medium text-white mb-4">Technology Stack Diagram</h4>
                    
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full max-w-md">
                        {/* Stack layers visualization */}
                        <div className="space-y-2">
                          <div className="bg-vytreon-cyan/10 border border-vytreon-cyan/30 rounded-lg p-3 text-center text-white text-sm">
                            User Interface Layer
                          </div>
                          <div className="h-6 w-1 mx-auto border-l border-dashed border-vytreon-cyan/30"></div>
                          <div className="bg-vytreon-blue/10 border border-vytreon-blue/30 rounded-lg p-3 text-center text-white text-sm">
                            Application Logic Layer
                          </div>
                          <div className="h-6 w-1 mx-auto border-l border-dashed border-vytreon-cyan/30"></div>
                          <div className="bg-vytreon-cyan/10 border border-vytreon-cyan/30 rounded-lg p-3 text-center text-white text-sm">
                            AI/ML Processing Layer
                          </div>
                          <div className="h-6 w-1 mx-auto border-l border-dashed border-vytreon-cyan/30"></div>
                          <div className="bg-vytreon-blue/10 border border-vytreon-blue/30 rounded-lg p-3 text-center text-white text-sm">
                            Blockchain Layer
                          </div>
                          <div className="h-6 w-1 mx-auto border-l border-dashed border-vytreon-cyan/30"></div>
                          <div className="bg-vytreon-cyan/10 border border-vytreon-cyan/30 rounded-lg p-3 text-center text-white text-sm">
                            Infrastructure Layer
                          </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                          <p className="text-sm text-gray-400">Cross-platform compatibility ensures seamless operation across all devices and environments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EcosystemSection;
