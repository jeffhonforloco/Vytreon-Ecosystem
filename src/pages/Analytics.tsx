
import { useState } from "react";
import { BarChart3, PieChart, LineChart, TrendingUp, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Analytics = () => {
  const [activeModule, setActiveModule] = useState("analytics");

  const analyticsData = [
    { module: "Oowo Payments", users: "45.2K", revenue: "$1.2M", growth: "+23%" },
    { module: "Didit360 Streaming", users: "234.7K", revenue: "$890K", growth: "+18%" },
    { module: "Escazo Travel", users: "89.3K", revenue: "$2.1M", growth: "+31%" },
    { module: "WhisApp Community", users: "156.8K", revenue: "$340K", growth: "+15%" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <BarChart3 className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Ecosystem Analytics</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Activity className="text-vytreon-cyan" size={20} />
                    <span>Total Users</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">2.4M</div>
                  <p className="text-gray-400">Active across ecosystem</p>
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
                  <div className="text-3xl font-bold text-vytreon-cyan">$4.5M</div>
                  <p className="text-gray-400">Monthly recurring</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <PieChart className="text-vytreon-cyan" size={20} />
                    <span>Engagement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">87.3%</div>
                  <p className="text-gray-400">User retention</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <LineChart className="text-vytreon-cyan" size={20} />
                    <span>Growth Rate</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">+22%</div>
                  <p className="text-gray-400">Month over month</p>
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
                  {analyticsData.map((data, index) => (
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
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          View Report
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

export default Analytics;
