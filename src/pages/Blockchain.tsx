
import { useState } from "react";
import { Link, Coins, ArrowUpDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Blockchain = () => {
  const [activeModule, setActiveModule] = useState("blockchain");

  const transactions = [
    { id: "0x1a2b3c", type: "Transfer", amount: "150 VYT", status: "Confirmed", time: "2 mins ago" },
    { id: "0x4d5e6f", type: "DAO Vote", amount: "-", status: "Confirmed", time: "15 mins ago" },
    { id: "0x7g8h9i", type: "Contract", amount: "50 VYT", status: "Pending", time: "1 hour ago" },
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-64">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Link className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Blockchain Network</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Coins className="text-vytreon-cyan" size={20} />
                    <span>VYT Balance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">2,547.89</div>
                  <p className="text-gray-400">≈ $12,739.45 USD</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Network Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Block Height</span>
                      <span className="text-white">1,234,567</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Gas Price</span>
                      <span className="text-white">25 gwei</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">TPS</span>
                      <span className="text-green-400">2,847</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">DAO Contract</span>
                      <span className="text-green-400">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Token Contract</span>
                      <span className="text-green-400">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Identity Contract</span>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <ArrowUpDown className="text-vytreon-cyan" size={20} />
                  <span>Recent Transactions</span>
                </CardTitle>
                <CardDescription>Your latest blockchain activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <ArrowUpDown className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{tx.type}</p>
                          <p className="text-sm text-gray-400">{tx.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{tx.amount}</p>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            tx.status === 'Confirmed' ? 'bg-green-400/20 text-green-400' : 'bg-yellow-400/20 text-yellow-400'
                          }`}>
                            {tx.status}
                          </span>
                          <span className="text-sm text-gray-400">{tx.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blockchain;
