
import { useState } from "react";
import { Music, Play, Pause, SkipForward, SkipBack, Volume2, Headphones, Mic, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Didit360 = () => {
  const [activeModule, setActiveModule] = useState("didit360");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);

  const featuredContent = [
    { 
      type: "Music", 
      title: "Synthetic Dreams", 
      artist: "AI Composer",
      duration: "3:24",
      plays: "2.3M",
      nft: true
    },
    { 
      type: "Podcast", 
      title: "Future of Decentralization", 
      artist: "Tech Talks",
      duration: "45:12",
      plays: "890K",
      nft: false
    },
    { 
      type: "Audiobook", 
      title: "Digital Renaissance", 
      artist: "J. Smith",
      duration: "8:34:22",
      plays: "456K",
      nft: true
    }
  ];

  const aiTools = [
    { name: "Music Generator", description: "Create original compositions with AI", active: true },
    { name: "Voice Synthesizer", description: "Generate natural-sounding voices", active: true },
    { name: "Beat Maker", description: "AI-powered rhythm creation", active: false },
    { name: "Lyric Writer", description: "Intelligent songwriting assistant", active: true }
  ];

  const nftCollection = [
    { id: "#001", title: "Quantum Beat", price: "2.5 ETH", artist: "CryptoBeats" },
    { id: "#002", title: "Neural Symphony", price: "1.8 ETH", artist: "AI Collective" },
    { id: "#003", title: "Digital Harmony", price: "3.2 ETH", artist: "SoundWave" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Music className="text-vytreon-cyan" size={32} />
              <div>
                <h1 className="text-3xl font-bold text-white">Didit360 Media Universe</h1>
                <p className="text-gray-400">Your complete music & digital media ecosystem</p>
              </div>
            </div>

            {/* Media Player */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Now Playing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-vytreon-cyan to-vytreon-purple rounded-lg flex items-center justify-center">
                    <Music className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Synthetic Dreams</h3>
                    <p className="text-gray-400 text-sm">AI Composer</p>
                    <div className="mt-2">
                      <Progress value={35} className="h-1" />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1:12</span>
                        <span>3:24</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <SkipBack size={20} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-vytreon-cyan hover:text-white"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <SkipForward size={20} />
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="text-gray-400" size={16} />
                      <Slider 
                        value={volume} 
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                        className="w-20"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Featured Content */}
              <Card className="glass-card lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Headphones className="text-vytreon-cyan" size={20} />
                    <span>Featured Content</span>
                  </CardTitle>
                  <CardDescription>Trending music, podcasts & audiobooks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {featuredContent.map((content, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-vytreon-dark/50 hover:bg-vytreon-dark/70 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-vytreon-cyan to-vytreon-purple rounded-lg flex items-center justify-center">
                            <Music className="text-white" size={16} />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="text-white font-medium">{content.title}</h4>
                              {content.nft && (
                                <span className="px-2 py-1 bg-gradient-to-r from-vytreon-cyan to-vytreon-purple text-white text-xs rounded-full">
                                  NFT
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm">{content.artist}</p>
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <span>{content.type}</span>
                              <span>•</span>
                              <span>{content.duration}</span>
                              <span>•</span>
                              <span>{content.plays} plays</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-vytreon-cyan hover:text-white">
                          <Play size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Creation Tools */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Palette className="text-vytreon-cyan" size={20} />
                    <span>AI Creation</span>
                  </CardTitle>
                  <CardDescription>AI-powered content creation tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aiTools.map((tool, index) => (
                    <div key={index} className="p-3 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium text-sm">{tool.name}</h4>
                        <div className={`w-2 h-2 rounded-full ${tool.active ? 'bg-green-400' : 'bg-gray-400'}`} />
                      </div>
                      <p className="text-gray-400 text-xs">{tool.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-2 border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark"
                      >
                        {tool.active ? 'Launch' : 'Activate'}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* NFT Marketplace */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Mic className="text-vytreon-cyan" size={20} />
                  <span>Digital Music NFTs</span>
                </CardTitle>
                <CardDescription>Exclusive music NFT collection & marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {nftCollection.map((nft, index) => (
                    <div key={index} className="p-4 rounded-lg bg-vytreon-dark/50 hover:bg-vytreon-dark/70 transition-colors cursor-pointer">
                      <div className="w-full h-32 bg-gradient-to-br from-vytreon-cyan to-vytreon-purple rounded-lg mb-3 flex items-center justify-center">
                        <Music className="text-white" size={32} />
                      </div>
                      <h4 className="text-white font-medium">{nft.title}</h4>
                      <p className="text-gray-400 text-sm">{nft.artist}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-vytreon-cyan font-medium">{nft.price}</span>
                        <span className="text-gray-500 text-sm">{nft.id}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-2 border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark"
                      >
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Didit360;
