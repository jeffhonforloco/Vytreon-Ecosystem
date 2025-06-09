
import { useState } from "react";
import { Brain, Lightbulb, TrendingUp, Zap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const SireIQ = () => {
  const [activeModule, setActiveModule] = useState("sire-iq");

  const insights = [
    { title: "User Behavior Pattern", prediction: "92% accuracy", impact: "High", category: "Analytics" },
    { title: "Market Trend Analysis", prediction: "87% accuracy", impact: "Medium", category: "Business" },
    { title: "Content Performance", prediction: "94% accuracy", impact: "High", category: "Marketing" },
    { title: "Revenue Optimization", prediction: "89% accuracy", impact: "Critical", category: "Finance" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Brain className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">SireIQ AI Intelligence</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Lightbulb className="text-vytreon-cyan" size={20} />
                    <span>AI Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">47</div>
                  <p className="text-gray-400">Generated today</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <TrendingUp className="text-vytreon-cyan" size={20} />
                    <span>Accuracy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">91%</div>
                  <p className="text-gray-400">Prediction accuracy</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Zap className="text-vytreon-cyan" size={20} />
                    <span>Processing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">2.3s</div>
                  <p className="text-gray-400">Avg. response time</p>
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
                  <div className="text-3xl font-bold text-vytreon-cyan">12,847</div>
                  <p className="text-gray-400">AI interactions</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">AI-Generated Insights</CardTitle>
                <CardDescription>Real-time intelligence and predictive analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <Brain className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{insight.title}</p>
                          <p className="text-sm text-gray-400">{insight.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{insight.prediction}</p>
                          <p className="text-xs text-gray-400">Accuracy</p>
                        </div>
                        <div className="text-center">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            insight.impact === 'Critical' ? 'bg-red-400/20 text-red-400' :
                            insight.impact === 'High' ? 'bg-orange-400/20 text-orange-400' :
                            'bg-yellow-400/20 text-yellow-400'
                          }`}>
                            {insight.impact}
                          </span>
                        </div>
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          View Analysis
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

export default SireIQ;
