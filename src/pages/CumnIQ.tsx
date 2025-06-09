
import { useState } from "react";
import { Users, Heart, Share2, TrendingUp, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const CumnIQ = () => {
  const [activeModule, setActiveModule] = useState("cumn-iq");

  const communityStats = [
    { metric: "Daily Active Users", value: "234.7K", trend: "+12.5%", period: "vs yesterday" },
    { metric: "Content Engagement", value: "94.3%", trend: "+8.2%", period: "this week" },
    { metric: "Community Growth", value: "+15.8K", trend: "+23.1%", period: "new members" },
    { metric: "User Satisfaction", value: "4.8/5", trend: "+0.3", period: "rating" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Users className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">CumnIQ Social Community</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Users className="text-vytreon-cyan" size={20} />
                    <span>Community</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">847.2K</div>
                  <p className="text-gray-400">Total members</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Heart className="text-vytreon-cyan" size={20} />
                    <span>Engagement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">92.7%</div>
                  <p className="text-gray-400">Activity rate</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Share2 className="text-vytreon-cyan" size={20} />
                    <span>Content Shared</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">156.3K</div>
                  <p className="text-gray-400">Posts today</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Star className="text-vytreon-cyan" size={20} />
                    <span>Reputation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">98.4</div>
                  <p className="text-gray-400">Community score</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Community Analytics</CardTitle>
                <CardDescription>Track social engagement and community growth metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communityStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <TrendingUp className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{stat.metric}</p>
                          <p className="text-sm text-gray-400">{stat.period}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold text-xl">{stat.value}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-green-400 font-bold">{stat.trend}</p>
                          <p className="text-xs text-gray-400">Change</p>
                        </div>
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          Details
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

export default CumnIQ;
