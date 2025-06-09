
import { useState } from "react";
import { Search, TrendingUp, BarChart3, Target, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const SEOAgentPro = () => {
  const [activeModule, setActiveModule] = useState("seo-agent-pro");

  const seoMetrics = [
    { domain: "vytreon.com", ranking: 15, traffic: "+245%", keywords: 1247 },
    { domain: "didit360.com", ranking: 8, traffic: "+189%", keywords: 892 },
    { domain: "oowo.com", ranking: 22, traffic: "+167%", keywords: 634 },
    { domain: "escazo.com", ranking: 12, traffic: "+203%", keywords: 978 }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Search className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">SEO Agent Pro</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <TrendingUp className="text-vytreon-cyan" size={20} />
                    <span>Avg. Ranking</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">14.2</div>
                  <p className="text-gray-400">Position improvement</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <BarChart3 className="text-vytreon-cyan" size={20} />
                    <span>Organic Traffic</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">+201%</div>
                  <p className="text-gray-400">Growth this quarter</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Target className="text-vytreon-cyan" size={20} />
                    <span>Keywords</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">3,751</div>
                  <p className="text-gray-400">Tracked keywords</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Globe className="text-vytreon-cyan" size={20} />
                    <span>Domains</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">15</div>
                  <p className="text-gray-400">Monitored sites</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">SEO Performance Overview</CardTitle>
                <CardDescription>Track ranking improvements and traffic growth across domains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {seoMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <Globe className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{metric.domain}</p>
                          <p className="text-sm text-gray-400">{metric.keywords} keywords tracked</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">#{metric.ranking}</p>
                          <p className="text-xs text-gray-400">Avg. Rank</p>
                        </div>
                        <div className="text-center">
                          <p className="text-green-400 font-bold">{metric.traffic}</p>
                          <p className="text-xs text-gray-400">Traffic</p>
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

export default SEOAgentPro;
