
import { useState } from "react";
import { CreditCard, Send, TrendingUp, Shield, Coins, ArrowUpDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Oowo = () => {
  const [activeModule, setActiveModule] = useState("oowo");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const walletBalance = {
    fiat: { USD: 12847.23, EUR: 10234.56, GBP: 8965.78 },
    crypto: { BTC: 0.5847, ETH: 12.34, VYT: 25847.89 }
  };

  const recentTransactions = [
    { id: "tx_001", type: "Send", amount: "-$250.00", recipient: "alice@vytreon.com", status: "Completed", time: "2 mins ago" },
    { id: "tx_002", type: "Receive", amount: "+$1,200.00", recipient: "Payment from Escazo", status: "Completed", time: "1 hour ago" },
    { id: "tx_003", type: "Convert", amount: "0.1 BTC → $6,234", recipient: "Crypto Exchange", status: "Completed", time: "3 hours ago" },
    { id: "tx_004", type: "Send", amount: "-€150.00", recipient: "bob@example.com", status: "Pending", time: "5 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <CreditCard className="text-vytreon-cyan" size={32} />
              <div>
                <h1 className="text-3xl font-bold text-white">Oowo Payments</h1>
                <p className="text-gray-400">Decentralized digital payments platform</p>
              </div>
            </div>

            {/* Wallet Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Coins className="text-green-400" size={20} />
                    <span>Fiat Balance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(walletBalance.fiat).map(([currency, balance]) => (
                    <div key={currency} className="flex justify-between items-center">
                      <span className="text-gray-400">{currency}</span>
                      <span className="text-white font-medium">{balance.toLocaleString()}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Shield className="text-vytreon-cyan" size={20} />
                    <span>Crypto Balance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(walletBalance.crypto).map(([currency, balance]) => (
                    <div key={currency} className="flex justify-between items-center">
                      <span className="text-gray-400">{currency}</span>
                      <span className="text-white font-medium">{balance.toLocaleString()}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <TrendingUp className="text-green-400" size={20} />
                    <span>Today's Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Transactions</span>
                    <span className="text-white font-medium">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Volume</span>
                    <span className="text-white font-medium">$23,456</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Fees Saved</span>
                    <span className="text-green-400 font-medium">$127.89</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Send className="text-vytreon-cyan" size={20} />
                    <span>Send Payment</span>
                  </CardTitle>
                  <CardDescription>Send money instantly across the globe</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Recipient</label>
                    <Input 
                      placeholder="Enter email or wallet address"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="bg-vytreon-dark border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Amount</label>
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-vytreon-dark border-gray-700 text-white"
                      />
                      <Select>
                        <SelectTrigger className="w-24 bg-vytreon-dark border-gray-700 text-white">
                          <SelectValue placeholder="USD" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD</SelectItem>
                          <SelectItem value="eur">EUR</SelectItem>
                          <SelectItem value="btc">BTC</SelectItem>
                          <SelectItem value="eth">ETH</SelectItem>
                          <SelectItem value="vyt">VYT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90">
                    Send Payment
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <ArrowUpDown className="text-vytreon-cyan" size={20} />
                    <span>Recent Transactions</span>
                  </CardTitle>
                  <CardDescription>Your latest payment activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg bg-vytreon-dark/50">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            tx.type === 'Receive' ? 'bg-green-400/20' : 
                            tx.type === 'Send' ? 'bg-red-400/20' : 'bg-vytreon-cyan/20'
                          }`}>
                            <ArrowUpDown className={`${
                              tx.type === 'Receive' ? 'text-green-400' : 
                              tx.type === 'Send' ? 'text-red-400' : 'text-vytreon-cyan'
                            }`} size={14} />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{tx.type}</p>
                            <p className="text-gray-400 text-xs">{tx.recipient}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-sm font-medium">{tx.amount}</p>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded ${
                              tx.status === 'Completed' ? 'bg-green-400/20 text-green-400' : 'bg-yellow-400/20 text-yellow-400'
                            }`}>
                              {tx.status}
                            </span>
                            <span className="text-gray-400 text-xs">{tx.time}</span>
                          </div>
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

export default Oowo;
