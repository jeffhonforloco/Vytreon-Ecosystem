
import { useState } from "react";
import { Search, TrendingUp, BarChart3, Target, Globe, Eye, MousePointer, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const SEOAgentPro = () => {
  const [activeModule, setActiveModule] = useState("seo-agent-pro");

  const seoMetrics = [
    { 
      domain: "vytreon.com", 
      ranking: 15, 
      traffic: "+245%", 
      keywords: 1247,
      clicks: "45.2K",
      impressions: "892K",
      ctr: "5.1%",
      position: "12.3"
    },
    { 
      domain: "didit360.com", 
      ranking: 8, 
      traffic: "+189%", 
      keywords: 892,
      clicks: "32.8K",
      impressions: "654K",
      ctr: "5.0%",
      position: "8.7"
    },
    { 
      domain: "oowo.com", 
      ranking: 22, 
      traffic: "+167%", 
      keywords: 634,
      clicks: "28.3K",
      impressions: "521K",
      ctr: "5.4%",
      position: "18.2"
    },
    { 
      domain: "escazo.com", 
      ranking: 12, 
      traffic: "+203%", 
      keywords: 978,
      clicks: "38.7K",
      impressions: "743K",
      ctr: "5.2%",
      position: "14.6"
    }
  ];

  const topKeywords = [
    { keyword: "decentralized finance", position: 3, searches: "49.5K", difficulty: "High" },
    { keyword: "blockchain payments", position: 7, searches: "33.2K", difficulty: "Medium" },
    { keyword: "crypto travel booking", position: 12, searches: "18.7K", difficulty: "Low" },
    { keyword: "AI music creation", position: 5, searches: "41.3K", difficulty: "High" },
    { keyword: "voice assistant platform", position: 9, searches: "25.8K", difficulty: "Medium" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Search className="text-vytreon-cyan" size={32} />
                <h1 className="text-3xl font-bold text-white">SEO Agent Pro</h1>
              </div>
              <Button className="bg-vytreon-cyan hover:bg-vytreon-cyan/80 text-vytreon-dark">
                <BarChart3 className="mr-2" size={16} />
                Generate Report
              </Button>
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
                    <Eye className="text-vytreon-cyan" size={20} />
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Domain Performance</CardTitle>
                  <CardDescription>Comprehensive SEO metrics across all monitored domains</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {seoMetrics.map((metric, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                              <Globe className="text-vytreon-cyan" size={14} />
                            </div>
                            <div>
                              <p className="text-white font-medium">{metric.domain}</p>
                              <p className="text-sm text-gray-400">{metric.keywords} keywords</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-vytreon-cyan font-bold">#{metric.ranking}</p>
                            <p className="text-xs text-gray-400">Avg. Rank</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-center">
                          <div>
                            <p className="text-green-400 font-bold">{metric.traffic}</p>
                            <p className="text-xs text-gray-400">Traffic</p>
                          </div>
                          <div>
                            <p className="text-white font-bold">{metric.clicks}</p>
                            <p className="text-xs text-gray-400">Clicks</p>
                          </div>
                          <div>
                            <p className="text-white font-bold">{metric.impressions}</p>
                            <p className="text-xs text-gray-400">Impressions</p>
                          </div>
                          <div>
                            <p className="text-vytreon-cyan font-bold">{metric.ctr}</p>
                            <p className="text-xs text-gray-400">CTR</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Top Performing Keywords</CardTitle>
                  <CardDescription>High-value keywords driving organic traffic</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topKeywords.map((keyword, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-vytreon-dark/50">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                            <Target className="text-vytreon-cyan" size={14} />
                          </div>
                          <div>
                            <p className="text-white font-medium">{keyword.keyword}</p>
                            <p className="text-sm text-gray-400">{keyword.searches} monthly searches</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-vytreon-cyan font-bold">#{keyword.position}</p>
                          <p className={`text-xs ${
                            keyword.difficulty === 'High' ? 'text-red-400' : 
                            keyword.difficulty === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                          }`}>
                            {keyword.difficulty}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SEOAgentPro;
