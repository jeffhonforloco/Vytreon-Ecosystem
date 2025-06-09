
import { useState } from "react";
import { Mic, Users, Clock, Volume2, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Voxsaga = () => {
  const [activeModule, setActiveModule] = useState("voxsaga");

  const voiceMetrics = [
    { session: "Morning Briefing", duration: "12:34", participants: 8, status: "Active" },
    { session: "Product Review", duration: "25:12", participants: 12, status: "Completed" },
    { session: "Team Standup", duration: "08:45", participants: 6, status: "Active" },
    { session: "Client Consultation", duration: "45:23", participants: 3, status: "Completed" }
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
              <h1 className="text-3xl font-bold text-white">Voxsaga Voice Platform</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Mic className="text-vytreon-cyan" size={20} />
                    <span>Voice Sessions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">347</div>
                  <p className="text-gray-400">Today</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Users className="text-vytreon-cyan" size={20} />
                    <span>Active Users</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">2,847</div>
                  <p className="text-gray-400">Online now</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Clock className="text-vytreon-cyan" size={20} />
                    <span>Avg. Session</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">23m</div>
                  <p className="text-gray-400">Duration</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Volume2 className="text-vytreon-cyan" size={20} />
                    <span>Audio Quality</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">98.7%</div>
                  <p className="text-gray-400">Clarity rating</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Active Voice Sessions</CardTitle>
                <CardDescription>Real-time voice interactions and meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {voiceMetrics.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <Headphones className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{session.session}</p>
                          <p className="text-sm text-gray-400">{session.participants} participants</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{session.duration}</p>
                          <p className="text-xs text-gray-400">Duration</p>
                        </div>
                        <div className="text-center">
                          <p className={`font-bold ${session.status === 'Active' ? 'text-green-400' : 'text-gray-400'}`}>
                            {session.status}
                          </p>
                          <p className="text-xs text-gray-400">Status</p>
                        </div>
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          Join
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
