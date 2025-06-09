
import { useState } from "react";
import { Lock, Shield, Eye, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Security = () => {
  const [activeModule, setActiveModule] = useState("security");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [encryptionEnabled, setEncryptionEnabled] = useState(true);

  const securityEvents = [
    {
      type: "login",
      description: "Successful login from new device",
      time: "2 hours ago",
      status: "success",
      location: "San Francisco, CA"
    },
    {
      type: "transaction",
      description: "Large transaction detected and verified",
      time: "1 day ago", 
      status: "verified",
      amount: "500 VYT"
    },
    {
      type: "alert",
      description: "Failed login attempt blocked",
      time: "3 days ago",
      status: "blocked",
      location: "Unknown location"
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
              <Lock className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Security Center</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Shield className="text-green-400" size={20} />
                    <span>Security Score</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400">95/100</div>
                  <p className="text-gray-400">Excellent security posture</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Active Protections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-white text-sm">End-to-end encryption</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-white text-sm">Zero-trust protocols</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-400" size={16} />
                      <span className="text-white text-sm">Multi-signature wallet</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Threat Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-vytreon-cyan">24/7</div>
                  <p className="text-gray-400">AI-powered monitoring</p>
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-green-400 text-sm">All systems secure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Security Settings</CardTitle>
                  <CardDescription>Configure your security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-400">Add an extra layer of security</p>
                    </div>
                    <Switch 
                      checked={twoFactorEnabled}
                      onCheckedChange={setTwoFactorEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Biometric Authentication</h4>
                      <p className="text-sm text-gray-400">Use fingerprint or face recognition</p>
                    </div>
                    <Switch 
                      checked={biometricEnabled}
                      onCheckedChange={setBiometricEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Advanced Encryption</h4>
                      <p className="text-sm text-gray-400">Enhanced data protection</p>
                    </div>
                    <Switch 
                      checked={encryptionEnabled}
                      onCheckedChange={setEncryptionEnabled}
                    />
                  </div>

                  <Button className="w-full bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90">
                    Update Security Settings
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Eye className="text-vytreon-cyan" size={20} />
                    <span>Security Activity</span>
                  </CardTitle>
                  <CardDescription>Recent security events and alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {securityEvents.map((event, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-vytreon-dark/50">
                        <div className={`p-2 rounded-full ${
                          event.status === 'success' ? 'bg-green-400/20' :
                          event.status === 'verified' ? 'bg-vytreon-cyan/20' :
                          'bg-red-400/20'
                        }`}>
                          {event.status === 'success' ? (
                            <CheckCircle className="text-green-400" size={16} />
                          ) : event.status === 'verified' ? (
                            <Shield className="text-vytreon-cyan" size={16} />
                          ) : (
                            <AlertTriangle className="text-red-400" size={16} />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{event.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                            <span>{event.time}</span>
                            {event.location && <span>{event.location}</span>}
                            {event.amount && <span>{event.amount}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                    View Full Security Log
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Security;
