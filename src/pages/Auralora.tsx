
import { useState } from "react";
import { Headphones, BookOpen, Play, Volume2, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Auralora = () => {
  const [activeModule, setActiveModule] = useState("auralora");

  const audiobooks = [
    { title: "The Future of AI", author: "Dr. Sarah Chen", duration: "8h 32m", listeners: "12.4K" },
    { title: "Blockchain Revolution", author: "Alex Thompson", duration: "6h 15m", listeners: "9.8K" },
    { title: "Digital Transformation", author: "Maria Rodriguez", duration: "7h 48m", listeners: "15.2K" },
    { title: "Crypto Economics", author: "James Wilson", duration: "5h 22m", listeners: "7.9K" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Headphones className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Auralora Interactive Audiobooks</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <BookOpen className="text-vytreon-cyan" size={20} />
                    <span>Audiobooks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">1,247</div>
                  <p className="text-gray-400">Available titles</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Play className="text-vytreon-cyan" size={20} />
                    <span>Listening Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">89.4K</div>
                  <p className="text-gray-400">Total hours</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Users className="text-vytreon-cyan" size={20} />
                    <span>Active Listeners</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">23,847</div>
                  <p className="text-gray-400">Monthly users</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Volume2 className="text-vytreon-cyan" size={20} />
                    <span>3D Audio</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">847</div>
                  <p className="text-gray-400">Immersive titles</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Popular Audiobooks</CardTitle>
                <CardDescription>Most listened interactive audiobooks with 3D spatial audio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {audiobooks.map((book, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-vytreon-cyan/20 flex items-center justify-center">
                          <BookOpen className="text-vytreon-cyan" size={20} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{book.title}</p>
                          <p className="text-sm text-gray-400">by {book.author}</p>
                          <p className="text-xs text-gray-500">{book.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{book.listeners}</p>
                          <p className="text-xs text-gray-400">Listeners</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                            <Play size={14} className="mr-1" />
                            Play
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white">
                            Sample
                          </Button>
                        </div>
                      </div>
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

export default Auralora;
