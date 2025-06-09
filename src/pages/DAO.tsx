
import { useState } from "react";
import { Users, Vote, Trophy, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const DAO = () => {
  const [activeModule, setActiveModule] = useState("dao");

  const proposals = [
    {
      id: 1,
      title: "Increase AI Module Budget",
      description: "Allocate additional resources for SireIQ development",
      status: "Active",
      votes: { for: 847, against: 123 },
      timeLeft: "2 days left",
      category: "Budget"
    },
    {
      id: 2,
      title: "New Partnership with MetaChain",
      description: "Strategic alliance for cross-chain functionality",
      status: "Active", 
      votes: { for: 623, against: 287 },
      timeLeft: "5 days left",
      category: "Partnership"
    },
    {
      id: 3,
      title: "Security Audit Requirements",
      description: "Mandatory quarterly security audits for all modules",
      status: "Passed",
      votes: { for: 1205, against: 89 },
      timeLeft: "Completed",
      category: "Security"
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
              <Users className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">DAO Governance</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Your Voting Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-vytreon-cyan">2,547 VYT</div>
                  <p className="text-gray-400">3.2% of total supply</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Participation Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-400">87%</div>
                  <p className="text-gray-400">Above average</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Total Proposals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">47</div>
                  <p className="text-gray-400">This quarter</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Rewards Earned</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-vytreon-purple">125 VYT</div>
                  <p className="text-gray-400">From governance</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Vote className="text-vytreon-cyan" size={20} />
                  <span>Active Proposals</span>
                </CardTitle>
                <CardDescription>Cast your vote on ecosystem decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {proposals.map((proposal) => (
                    <div key={proposal.id} className="p-6 rounded-lg bg-vytreon-dark/50 border border-gray-800">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-white font-semibold">{proposal.title}</h3>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              proposal.status === 'Active' ? 'bg-green-400/20 text-green-400' : 'bg-gray-400/20 text-gray-400'
                            }`}>
                              {proposal.status}
                            </span>
                            <span className="px-2 py-1 rounded text-xs font-medium bg-vytreon-cyan/20 text-vytreon-cyan">
                              {proposal.category}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-3">{proposal.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-green-400">For: {proposal.votes.for}</span>
                            <span className="text-red-400">Against: {proposal.votes.against}</span>
                            <span className="text-gray-400 flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{proposal.timeLeft}</span>
                            </span>
                          </div>
                        </div>
                        {proposal.status === 'Active' && (
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Vote For
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
                              Vote Against
                            </Button>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Voting Progress</span>
                          <span className="text-white">{Math.round((proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100)}% in favor</span>
                        </div>
                        <Progress 
                          value={(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100} 
                          className="h-2"
                        />
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

export default DAO;
