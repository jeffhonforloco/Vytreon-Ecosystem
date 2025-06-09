
import { useState } from "react";
import { MessageSquare, ThumbsUp, Users, BarChart3, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const WhisApp = () => {
  const [activeModule, setActiveModule] = useState("whis-app");

  const feedbackData = [
    { topic: "Platform Usability", responses: 1247, satisfaction: 4.6, trend: "+12%" },
    { topic: "Feature Requests", responses: 892, satisfaction: 4.2, trend: "+8%" },
    { topic: "Bug Reports", responses: 156, satisfaction: 3.8, trend: "-5%" },
    { topic: "Performance", responses: 634, satisfaction: 4.4, trend: "+15%" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <MessageSquare className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">WhisApp Community</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <MessageSquare className="text-vytreon-cyan" size={20} />
                    <span>Feedback</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">2,929</div>
                  <p className="text-gray-400">Total responses</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <ThumbsUp className="text-vytreon-cyan" size={20} />
                    <span>Satisfaction</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">4.3</div>
                  <p className="text-gray-400">Average rating</p>
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
                  <div className="text-3xl font-bold text-vytreon-cyan">8,743</div>
                  <p className="text-gray-400">Community members</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Clock className="text-vytreon-cyan" size={20} />
                    <span>Response Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">1.2h</div>
                  <p className="text-gray-400">Avg. response time</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Community Feedback Analytics</CardTitle>
                <CardDescription>Monitor community sentiment and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feedbackData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <BarChart3 className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{data.topic}</p>
                          <p className="text-sm text-gray-400">{data.responses} responses</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{data.satisfaction}</p>
                          <p className="text-xs text-gray-400">Satisfaction</p>
                        </div>
                        <div className="text-center">
                          <p className={`font-bold ${data.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {data.trend}
                          </p>
                          <p className="text-xs text-gray-400">Trend</p>
                        </div>
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          View Details
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

export default WhisApp;
