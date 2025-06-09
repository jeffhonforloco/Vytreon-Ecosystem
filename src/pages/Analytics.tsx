
import { useState } from "react";
import { BarChart3, PieChart, LineChart, TrendingUp, Activity, Brain, Zap, Target, Users, Eye, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from "recharts";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Analytics = () => {
  const [activeModule, setActiveModule] = useState("analytics");

  const ecosystemData = [
    { module: "Oowo Payments", users: "45.2K", revenue: "$1.2M", growth: "+23%", health: 95, trend: "up" },
    { module: "Didit360 Streaming", users: "234.7K", revenue: "$890K", growth: "+18%", health: 92, trend: "up" },
    { module: "Escazo Travel", users: "89.3K", revenue: "$2.1M", growth: "+31%", health: 97, trend: "up" },
    { module: "WhisApp Community", users: "156.8K", revenue: "$340K", growth: "+15%", health: 88, trend: "up" },
    { module: "SireIQ Analytics", users: "67.4K", revenue: "$567K", growth: "+28%", health: 94, trend: "up" },
    { module: "SEOAgentPro", users: "34.1K", revenue: "$234K", growth: "+12%", health: 91, trend: "up" },
    { module: "IXhare Sharing", users: "78.9K", revenue: "$189K", growth: "+9%", health: 86, trend: "stable" },
    { module: "Voxsaga Voice", users: "23.5K", revenue: "$123K", growth: "+41%", health: 89, trend: "up" }
  ];

  const performanceData = [
    { month: "Jan", revenue: 2.1, users: 180, transactions: 12.5 },
    { month: "Feb", revenue: 2.4, users: 210, transactions: 15.2 },
    { month: "Mar", revenue: 2.8, users: 245, transactions: 18.7 },
    { month: "Apr", revenue: 3.2, users: 289, transactions: 22.1 },
    { month: "May", revenue: 3.7, users: 334, transactions: 26.8 },
    { month: "Jun", revenue: 4.5, users: 398, transactions: 31.4 }
  ];

  const aiRecommendations = [
    {
      type: "optimization",
      title: "Optimize Didit360 Content Discovery",
      description: "AI analysis shows 23% improvement potential in user engagement through personalized recommendations",
      impact: "High",
      confidence: 94,
      action: "Implement ML-based content filtering"
    },
    {
      type: "growth",
      title: "Cross-promote Escazo in Oowo App",
      description: "Payment users show 67% higher likelihood to book travel within 30 days",
      impact: "Medium",
      confidence: 87,
      action: "Create integrated travel booking flow"
    },
    {
      type: "retention",
      title: "Enhance WhisApp Gamification",
      description: "Communities with rewards show 156% better retention rates",
      impact: "High",
      confidence: 91,
      action: "Deploy community achievement system"
    },
    {
      type: "revenue",
      title: "Premium SireIQ Features",
      description: "Advanced analytics features could generate additional $340K ARR",
      impact: "Critical",
      confidence: 89,
      action: "Launch enterprise analytics tier"
    }
  ];

  const platformMetrics = [
    { name: "Web Traffic", value: 892456, change: "+12.4%" },
    { name: "Mobile Sessions", value: 1234567, change: "+18.7%" },
    { name: "API Calls", value: 45678923, change: "+23.1%" },
    { name: "Storage Used", value: "847TB", change: "+15.3%" }
  ];

  const userDistribution = [
    { name: "Web", value: 35, color: "#0088FE" },
    { name: "Mobile", value: 45, color: "#00C49F" },
    { name: "API", value: 15, color: "#FFBB28" },
    { name: "Desktop", value: 5, color: "#FF8042" }
  ];

  const getHealthColor = (health: number) => {
    if (health >= 95) return "text-green-400";
    if (health >= 90) return "text-blue-400";
    if (health >= 85) return "text-yellow-400";
    return "text-red-400";
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Critical": return "bg-red-400/20 text-red-400 border-red-400/30";
      case "High": return "bg-orange-400/20 text-orange-400 border-orange-400/30";
      case "Medium": return "bg-yellow-400/20 text-yellow-400 border-yellow-400/30";
      default: return "bg-blue-400/20 text-blue-400 border-blue-400/30";
    }
  };

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BarChart3 className="text-vytreon-cyan" size={32} />
                <h1 className="text-3xl font-bold text-white">Ecosystem Analytics</h1>
              </div>
              <Button className="bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90">
                Export Report
              </Button>
            </div>

            {/* Key Metrics Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Users className="text-vytreon-cyan" size={20} />
                    <span>Total Users</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">729.7K</div>
                  <p className="text-gray-400">Active across ecosystem</p>
                  <div className="flex items-center mt-2 text-green-400 text-sm">
                    <TrendingUp size={16} className="mr-1" />
                    +22.1% from last month
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <TrendingUp className="text-vytreon-cyan" size={20} />
                    <span>Revenue</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">$5.53M</div>
                  <p className="text-gray-400">Monthly recurring</p>
                  <div className="flex items-center mt-2 text-green-400 text-sm">
                    <TrendingUp size={16} className="mr-1" />
                    +19.3% from last month
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Activity className="text-vytreon-cyan" size={20} />
                    <span>Engagement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">89.4%</div>
                  <p className="text-gray-400">User retention rate</p>
                  <div className="flex items-center mt-2 text-green-400 text-sm">
                    <TrendingUp size={16} className="mr-1" />
                    +2.8% from last month
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Zap className="text-vytreon-cyan" size={20} />
                    <span>AI Efficiency</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">94.7%</div>
                  <p className="text-gray-400">Recommendation accuracy</p>
                  <div className="flex items-center mt-2 text-green-400 text-sm">
                    <TrendingUp size={16} className="mr-1" />
                    +1.2% from last month
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-vytreon-dark-blue">
                <TabsTrigger value="overview" className="data-[state=active]:bg-vytreon-cyan data-[state=active]:text-vytreon-dark">Overview</TabsTrigger>
                <TabsTrigger value="ai-insights" className="data-[state=active]:bg-vytreon-cyan data-[state=active]:text-vytreon-dark">AI Insights</TabsTrigger>
                <TabsTrigger value="performance" className="data-[state=active]:bg-vytreon-cyan data-[state=active]:text-vytreon-dark">Performance</TabsTrigger>
                <TabsTrigger value="cross-platform" className="data-[state=active]:bg-vytreon-cyan data-[state=active]:text-vytreon-dark">Cross-Platform</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Revenue Trend</CardTitle>
                      <CardDescription>Monthly revenue across ecosystem</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={{
                        revenue: { label: "Revenue ($M)", color: "#0FFBF6" }
                      }} className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="month" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Area type="monotone" dataKey="revenue" stroke="#0FFBF6" fill="#0FFBF6" fillOpacity={0.2} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">User Distribution</CardTitle>
                      <CardDescription>Platform usage breakdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={{
                        web: { label: "Web", color: "#0088FE" },
                        mobile: { label: "Mobile", color: "#00C49F" },
                        api: { label: "API", color: "#FFBB28" },
                        desktop: { label: "Desktop", color: "#FF8042" }
                      }} className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <pie
                              data={userDistribution}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, value }) => `${name}: ${value}%`}
                            >
                              {userDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </pie>
                            <ChartTooltip content={<ChartTooltipContent />} />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white">Module Performance</CardTitle>
                    <CardDescription>Detailed analytics for each ecosystem component</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {ecosystemData.map((data, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                              <BarChart3 className="text-vytreon-cyan" size={16} />
                            </div>
                            <div>
                              <p className="text-white font-medium">{data.module}</p>
                              <p className="text-sm text-gray-400">{data.users} active users</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <p className="text-vytreon-cyan font-bold">{data.revenue}</p>
                              <p className="text-xs text-gray-400">Revenue</p>
                            </div>
                            <div className="text-center">
                              <p className="text-green-400 font-bold">{data.growth}</p>
                              <p className="text-xs text-gray-400">Growth</p>
                            </div>
                            <div className="text-center">
                              <p className={`font-bold ${getHealthColor(data.health)}`}>{data.health}%</p>
                              <p className="text-xs text-gray-400">Health</p>
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
              </TabsContent>

              <TabsContent value="ai-insights" className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Brain className="text-vytreon-cyan" size={20} />
                      <span>AI-Driven Recommendations</span>
                    </CardTitle>
                    <CardDescription>Machine learning insights and optimization suggestions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {aiRecommendations.map((rec, index) => (
                        <div key={index} className="p-4 rounded-lg bg-vytreon-dark/50 border border-gray-800">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start space-x-3">
                              <div className="p-2 rounded-full bg-vytreon-cyan/20">
                                <Target className="text-vytreon-cyan" size={16} />
                              </div>
                              <div>
                                <h3 className="text-white font-medium">{rec.title}</h3>
                                <p className="text-gray-400 text-sm mt-1">{rec.description}</p>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getImpactColor(rec.impact)}`}>
                              {rec.impact}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="text-sm">
                                <span className="text-gray-400">Confidence: </span>
                                <span className="text-vytreon-cyan font-medium">{rec.confidence}%</span>
                              </div>
                              <Progress value={rec.confidence} className="w-24 h-2" />
                            </div>
                            <Button size="sm" className="bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90">
                              {rec.action}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Prediction Accuracy</CardTitle>
                      <CardDescription>AI model performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">User Behavior</span>
                          <span className="text-vytreon-cyan font-medium">94.7%</span>
                        </div>
                        <Progress value={94.7} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Revenue Forecasting</span>
                          <span className="text-vytreon-cyan font-medium">91.3%</span>
                        </div>
                        <Progress value={91.3} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Content Recommendation</span>
                          <span className="text-vytreon-cyan font-medium">89.6%</span>
                        </div>
                        <Progress value={89.6} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Model Status</CardTitle>
                      <CardDescription>AI system health monitoring</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Recommendation Engine</span>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="text-green-400" size={16} />
                            <span className="text-green-400">Operational</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Fraud Detection</span>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="text-green-400" size={16} />
                            <span className="text-green-400">Operational</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Predictive Analytics</span>
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="text-yellow-400" size={16} />
                            <span className="text-yellow-400">Updating</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white">User Growth Trend</CardTitle>
                    <CardDescription>Active users across all platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{
                      users: { label: "Users (K)", color: "#0FFBF6" }
                    }} className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="month" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="users" fill="#0FFBF6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Transaction Volume</CardTitle>
                      <CardDescription>Monthly transaction trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={{
                        transactions: { label: "Transactions (M)", color: "#00C49F" }
                      }} className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="month" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Area type="monotone" dataKey="transactions" stroke="#00C49F" fill="#00C49F" fillOpacity={0.2} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Key Performance Indicators</CardTitle>
                      <CardDescription>Real-time ecosystem metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-vytreon-dark/50 rounded">
                          <span className="text-gray-400">Conversion Rate</span>
                          <span className="text-vytreon-cyan font-bold">12.4%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-vytreon-dark/50 rounded">
                          <span className="text-gray-400">Customer LTV</span>
                          <span className="text-vytreon-cyan font-bold">$847</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-vytreon-dark/50 rounded">
                          <span className="text-gray-400">Churn Rate</span>
                          <span className="text-green-400 font-bold">3.2%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-vytreon-dark/50 rounded">
                          <span className="text-gray-400">Support Satisfaction</span>
                          <span className="text-vytreon-cyan font-bold">94.8%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cross-platform" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {platformMetrics.map((metric, index) => (
                    <Card key={index} className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center space-x-2">
                          <Eye className="text-vytreon-cyan" size={20} />
                          <span>{metric.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-vytreon-cyan">
                          {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                        </div>
                        <p className="text-green-400 text-sm mt-1">{metric.change}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white">Platform Integration Health</CardTitle>
                    <CardDescription>Cross-platform data flow and API performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-white font-medium">API Response Times</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Oowo Payments API</span>
                            <span className="text-green-400">89ms</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Didit360 Content API</span>
                            <span className="text-green-400">142ms</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Escazo Booking API</span>
                            <span className="text-yellow-400">234ms</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">WhisApp Social API</span>
                            <span className="text-green-400">67ms</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-white font-medium">Data Synchronization</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">User Profiles</span>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="text-green-400" size={16} />
                              <span className="text-green-400">Synced</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Transaction Data</span>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="text-green-400" size={16} />
                              <span className="text-green-400">Synced</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Analytics Events</span>
                            <div className="flex items-center space-x-2">
                              <AlertTriangle className="text-yellow-400" size={16} />
                              <span className="text-yellow-400">Delayed</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Content Metadata</span>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="text-green-400" size={16} />
                              <span className="text-green-400">Synced</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
