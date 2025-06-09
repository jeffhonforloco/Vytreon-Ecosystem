
import { useState } from "react";
import { Youtube, TrendingUp, Eye, ThumbsUp, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Fycra = () => {
  const [activeModule, setActiveModule] = useState("fycra");

  const youtubeMetrics = [
    { channel: "Vytreon Official", views: "2.4M", subscribers: "847K", engagement: "8.7%" },
    { channel: "Tech Tutorials", views: "1.8M", subscribers: "456K", engagement: "12.3%" },
    { channel: "Product Reviews", views: "967K", subscribers: "234K", engagement: "15.2%" },
    { channel: "Behind Scenes", views: "543K", subscribers: "178K", engagement: "22.1%" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Youtube className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Fycra YouTube Optimization</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Eye className="text-vytreon-cyan" size={20} />
                    <span>Total Views</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">5.7M</div>
                  <p className="text-gray-400">Across all channels</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <ThumbsUp className="text-vytreon-cyan" size={20} />
                    <span>Subscribers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">1.7M</div>
                  <p className="text-gray-400">Total subscribers</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <TrendingUp className="text-vytreon-cyan" size={20} />
                    <span>Engagement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">14.6%</div>
                  <p className="text-gray-400">Average rate</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <BarChart3 className="text-vytreon-cyan" size={20} />
                    <span>AI Score</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">92</div>
                  <p className="text-gray-400">Optimization score</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Channel Performance</CardTitle>
                <CardDescription>AI-powered YouTube channel analytics and optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {youtubeMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <Youtube className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{metric.channel}</p>
                          <p className="text-sm text-gray-400">{metric.views} total views</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{metric.subscribers}</p>
                          <p className="text-xs text-gray-400">Subscribers</p>
                        </div>
                        <div className="text-center">
                          <p className="text-green-400 font-bold">{metric.engagement}</p>
                          <p className="text-xs text-gray-400">Engagement</p>
                        </div>
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          Optimize
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

export default Fycra;
