
import { useState } from "react";
import { Vote, Users, TrendingUp, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Governance = () => {
  const [activeModule, setActiveModule] = useState("governance");

  const activeProposals = [
    {
      id: "VIP-001",
      title: "Implement Cross-Chain Bridge for Oowo Payments",
      description: "Add support for Polygon and Arbitrum networks to reduce transaction fees",
      status: "active",
      votesFor: 12847,
      votesAgainst: 3492,
      totalVotes: 16339,
      timeLeft: "3 days",
      category: "Technical"
    },
    {
      id: "VIP-002", 
      title: "Launch Didit360 Creator Fund",
      description: "Allocate 1M VYT tokens for supporting independent artists and creators",
      status: "active",
      votesFor: 8934,
      votesAgainst: 7456,
      totalVotes: 16390,
      timeLeft: "5 days",
      category: "Community"
    },
    {
      id: "VIP-003",
      title: "Escazo Carbon Offset Initiative",
      description: "Implement mandatory carbon offset for all travel bookings",
      status: "active",
      votesFor: 15234,
      votesAgainst: 2876,
      totalVotes: 18110,
      timeLeft: "1 day",
      category: "Sustainability"
    }
  ];

  const completedProposals = [
    {
      id: "VIP-000",
      title: "Vytreon Governance Token Launch",
      status: "passed",
      votesFor: 23456,
      votesAgainst: 1234,
      finalizedDate: "2024-01-15"
    }
  ];

  const daoStats = {
    totalMembers: 45672,
    activeVoters: 18943,
    totalProposals: 67,
    passedProposals: 43,
    treasuryValue: "$12.4M"
  };

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Vote className="text-vytreon-cyan" size={32} />
              <div>
                <h1 className="text-3xl font-bold text-white">DAO Governance</h1>
                <p className="text-gray-400">Community-driven decision making for the Vytreon Ecosystem</p>
              </div>
            </div>

            {/* DAO Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="text-vytreon-cyan" size={16} />
                    <span className="text-sm text-gray-400">Members</span>
                  </div>
                  <p className="text-xl font-bold text-white mt-1">{daoStats.totalMembers.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Vote className="text-green-400" size={16} />
                    <span className="text-sm text-gray-400">Active Voters</span>
                  </div>
                  <p className="text-xl font-bold text-white mt-1">{daoStats.activeVoters.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="text-blue-400" size={16} />
                    <span className="text-sm text-gray-400">Proposals</span>
                  </div>
                  <p className="text-xl font-bold text-white mt-1">{daoStats.totalProposals}</p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-sm text-gray-400">Passed</span>
                  </div>
                  <p className="text-xl font-bold text-white mt-1">{daoStats.passedProposals}</p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="text-vytreon-cyan" size={16} />
                    <span className="text-sm text-gray-400">Treasury</span>
                  </div>
                  <p className="text-xl font-bold text-white mt-1">{daoStats.treasuryValue}</p>
                </CardContent>
              </Card>
            </div>

            {/* Active Proposals */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Vote className="text-vytreon-cyan" size={20} />
                  <span>Active Proposals</span>
                </CardTitle>
                <CardDescription>Vote on proposals that shape the future of Vytreon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {activeProposals.map((proposal) => {
                  const forPercentage = (proposal.votesFor / proposal.totalVotes) * 100;
                  const againstPercentage = (proposal.votesAgainst / proposal.totalVotes) * 100;
                  
                  return (
                    <div key={proposal.id} className="p-4 rounded-lg bg-vytreon-dark/50 border border-gray-700">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-2 py-1 bg-vytreon-cyan/20 text-vytreon-cyan text-xs rounded-full">
                              {proposal.id}
                            </span>
                            <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                              {proposal.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Clock className="text-yellow-400" size={12} />
                              <span className="text-yellow-400 text-xs">{proposal.timeLeft}</span>
                            </div>
                          </div>
                          <h3 className="text-white font-semibold text-lg mb-2">{proposal.title}</h3>
                          <p className="text-gray-400 text-sm">{proposal.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-green-400">For: {proposal.votesFor.toLocaleString()} ({forPercentage.toFixed(1)}%)</span>
                          <span className="text-red-400">Against: {proposal.votesAgainst.toLocaleString()} ({againstPercentage.toFixed(1)}%)</span>
                        </div>
                        
                        <div className="relative">
                          <div className="flex h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="bg-green-400 transition-all duration-300"
                              style={{ width: `${forPercentage}%` }}
                            />
                            <div 
                              className="bg-red-400 transition-all duration-300"
                              style={{ width: `${againstPercentage}%` }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                            Vote For
                          </Button>
                          <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                            Vote Against
                          </Button>
                          <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Recent Completed Proposals */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Recent Decisions</CardTitle>
                <CardDescription>Recently completed proposals and their outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                {completedProposals.map((proposal) => (
                  <div key={proposal.id} className="flex items-center justify-between p-3 rounded-lg bg-vytreon-dark/50">
                    <div>
                      <h4 className="text-white font-medium">{proposal.title}</h4>
                      <p className="text-gray-400 text-sm">Finalized on {proposal.finalizedDate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="text-green-400 text-sm">{proposal.votesFor.toLocaleString()} for</p>
                        <p className="text-red-400 text-sm">{proposal.votesAgainst.toLocaleString()} against</p>
                      </div>
                      <CheckCircle className="text-green-400" size={20} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Governance;
