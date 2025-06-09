
import { useState } from "react";
import { Mic, Volume2, Headphones, Waveform, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Voxsaga = () => {
  const [activeModule, setActiveModule] = useState("voxsaga");

  const voiceInteractions = [
    { command: "Play morning briefing", duration: "2:34", accuracy: "97%", time: "8:30 AM" },
    { command: "Schedule meeting", duration: "1:45", accuracy: "94%", time: "10:15 AM" },
    { command: "Read latest news", duration: "5:22", accuracy: "99%", time: "12:00 PM" },
    { command: "Set reminder", duration: "0:58", accuracy: "96%", time: "3:45 PM" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Mic className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Voxsaga Voice Intelligence</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Mic className="text-vytreon-cyan" size={20} />
                    <span>Voice Commands</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">2,847</div>
                  <p className="text-gray-400">Processed today</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Volume2 className="text-vytreon-cyan" size={20} />
                    <span>Accuracy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">96.5%</div>
                  <p className="text-gray-400">Recognition rate</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Headphones className="text-vytreon-cyan" size={20} />
                    <span>Active Users</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">15,234</div>
                  <p className="text-gray-400">Voice interactions</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Waveform className="text-vytreon-cyan" size={20} />
                    <span>Response Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">0.8s</div>
                  <p className="text-gray-400">Average latency</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Recent Voice Interactions</CardTitle>
                <CardDescription>Monitor voice command processing and accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {voiceInteractions.map((interaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <Play className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">"{interaction.command}"</p>
                          <p className="text-sm text-gray-400">Duration: {interaction.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{interaction.accuracy}</p>
                          <p className="text-xs text-gray-400">Accuracy</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-400">{interaction.time}</p>
                          <p className="text-xs text-gray-400">Time</p>
                        </div>
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          Replay
                        </Button>
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

export default Voxsaga;
