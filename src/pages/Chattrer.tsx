
import { useState } from "react";
import { MessageCircle, Shield, Users, Zap, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Chattrer = () => {
  const [activeModule, setActiveModule] = useState("chattrer");

  const messageStats = [
    { chat: "Vytreon Team", messages: 2847, members: 23, lastActive: "2 mins ago" },
    { chat: "Product Development", messages: 1456, members: 12, lastActive: "5 mins ago" },
    { chat: "Community Support", messages: 4329, members: 45, lastActive: "1 min ago" },
    { chat: "Marketing Group", messages: 987, members: 8, lastActive: "15 mins ago" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <MessageCircle className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Chattrer Secure Messaging</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <MessageCircle className="text-vytreon-cyan" size={20} />
                    <span>Messages</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">47.3K</div>
                  <p className="text-gray-400">Sent today</p>
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
                  <div className="text-3xl font-bold text-vytreon-cyan">18,947</div>
                  <p className="text-gray-400">Online now</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Shield className="text-vytreon-cyan" size={20} />
                    <span>Encryption</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">100%</div>
                  <p className="text-gray-400">E2E encrypted</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Zap className="text-vytreon-cyan" size={20} />
                    <span>Response Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">0.3s</div>
                  <p className="text-gray-400">Average latency</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Active Chat Groups</CardTitle>
                <CardDescription>Secure, encrypted messaging with decentralized identity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messageStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <Lock className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{stat.chat}</p>
                          <p className="text-sm text-gray-400">{stat.messages} messages • {stat.members} members</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{stat.lastActive}</p>
                          <p className="text-xs text-gray-400">Last active</p>
                        </div>
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          Join Chat
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

export default Chattrer;
