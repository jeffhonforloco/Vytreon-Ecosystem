
import { useState } from "react";
import { Brain, BarChart, MessageSquare, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const AI = () => {
  const [activeModule, setActiveModule] = useState("ai");
  const [query, setQuery] = useState("");

  const aiModules = [
    {
      name: "SireIQ",
      description: "Personalization and content recommendation engine",
      status: "Active",
      accuracy: "94.2%"
    },
    {
      name: "CumnIQ", 
      description: "Business analytics and predictive insights",
      status: "Training",
      accuracy: "87.8%"
    },
    {
      name: "Fycera",
      description: "Content generation and optimization",
      status: "Active", 
      accuracy: "91.5%"
    }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-64">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Brain className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">AI Engine</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <MessageSquare className="text-vytreon-cyan" size={20} />
                    <span>AI Assistant</span>
                  </CardTitle>
                  <CardDescription>Ask anything about your ecosystem</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Ask AI about your data, trends, or recommendations..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="bg-vytreon-dark border-gray-700 text-white"
                    />
                    <Button className="bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90">
                      <Zap size={16} />
                    </Button>
                  </div>
                  
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <div className="p-3 rounded-lg bg-vytreon-dark/50">
                      <p className="text-sm text-gray-400 mb-1">AI Response:</p>
                      <p className="text-white">Based on your recent activity, I recommend increasing your DAO participation to maximize rewards. Your current voting rate is above average.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-vytreon-cyan/10">
                      <p className="text-sm text-gray-400 mb-1">You asked:</p>
                      <p className="text-white">How can I improve my ecosystem engagement?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <BarChart className="text-vytreon-cyan" size={20} />
                    <span>AI Modules</span>
                  </CardTitle>
                  <CardDescription>Active AI services and their performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {aiModules.map((module, index) => (
                      <div key={index} className="p-4 rounded-lg bg-vytreon-dark/50">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">{module.name}</h4>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            module.status === 'Active' ? 'bg-green-400/20 text-green-400' : 'bg-yellow-400/20 text-yellow-400'
                          }`}>
                            {module.status}
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{module.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Accuracy</span>
                          <span className="text-vytreon-cyan font-medium">{module.accuracy}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">AI Insights & Recommendations</CardTitle>
                <CardDescription>Personalized insights based on your ecosystem activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-vytreon-cyan/10">
                    <h4 className="text-vytreon-cyan font-medium mb-2">Transaction Optimization</h4>
                    <p className="text-gray-300 text-sm">Consider batching your smaller transactions to save 23% on gas fees.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-vytreon-purple/10">
                    <h4 className="text-vytreon-purple font-medium mb-2">DAO Opportunities</h4>
                    <p className="text-gray-300 text-sm">3 new governance proposals match your interests. Expected impact: High.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-400/10">
                    <h4 className="text-green-400 font-medium mb-2">Portfolio Growth</h4>
                    <p className="text-gray-300 text-sm">Your ecosystem participation has increased by 34% this month.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AI;
