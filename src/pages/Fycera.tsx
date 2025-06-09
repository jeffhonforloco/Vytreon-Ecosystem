
import { useState } from "react";
import { FileText, Edit3, Calendar, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Fycera = () => {
  const [activeModule, setActiveModule] = useState("fycera");

  const contentStats = [
    { title: "Blog Posts", count: 847, trend: "+23%", published: "Today" },
    { title: "Product Updates", count: 156, trend: "+15%", published: "This week" },
    { title: "Documentation", count: 234, trend: "+8%", published: "This month" },
    { title: "Marketing Content", count: 423, trend: "+31%", published: "This quarter" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <FileText className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Fycera Content Management</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <FileText className="text-vytreon-cyan" size={20} />
                    <span>Total Content</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">1,660</div>
                  <p className="text-gray-400">Published articles</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Edit3 className="text-vytreon-cyan" size={20} />
                    <span>In Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">47</div>
                  <p className="text-gray-400">Drafts & reviews</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Users className="text-vytreon-cyan" size={20} />
                    <span>Contributors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">23</div>
                  <p className="text-gray-400">Active writers</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Calendar className="text-vytreon-cyan" size={20} />
                    <span>Scheduled</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">89</div>
                  <p className="text-gray-400">Future posts</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Content Performance</CardTitle>
                <CardDescription>Track content creation and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <TrendingUp className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{stat.title}</p>
                          <p className="text-sm text-gray-400">{stat.published}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{stat.count}</p>
                          <p className="text-xs text-gray-400">Articles</p>
                        </div>
                        <div className="text-center">
                          <p className="text-green-400 font-bold">{stat.trend}</p>
                          <p className="text-xs text-gray-400">Growth</p>
                        </div>
                        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                          Manage
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

export default Fycera;
