
import { useState } from "react";
import { Settings as SettingsIcon, User, Shield, Bell, Palette, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Settings = () => {
  const [activeModule, setActiveModule] = useState("settings");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <SettingsIcon className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">System Settings</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <User className="text-vytreon-cyan" size={20} />
                    <span>Account Settings</span>
                  </CardTitle>
                  <CardDescription>Manage your profile and account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Display Name</label>
                    <input 
                      type="text" 
                      defaultValue="Vytreon Admin" 
                      className="w-full p-2 rounded bg-vytreon-dark/50 border border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <input 
                      type="email" 
                      defaultValue="admin@vytreon.com" 
                      className="w-full p-2 rounded bg-vytreon-dark/50 border border-gray-600 text-white"
                    />
                  </div>
                  <Button className="w-full bg-vytreon-cyan hover:bg-vytreon-cyan/80 text-vytreon-dark">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Shield className="text-vytreon-cyan" size={20} />
                    <span>Security Settings</span>
                  </CardTitle>
                  <CardDescription>Configure security and privacy options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Two-Factor Authentication</span>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Biometric Login</span>
                    <Switch checked={false} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Session Timeout</span>
                    <select className="p-1 rounded bg-vytreon-dark/50 border border-gray-600 text-white">
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>4 hours</option>
                    </select>
                  </div>
                  <Button variant="outline" className="w-full border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                    Change Password
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Bell className="text-vytreon-cyan" size={20} />
                    <span>Notification Settings</span>
                  </CardTitle>
                  <CardDescription>Control how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Push Notifications</span>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Email Notifications</span>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">SMS Alerts</span>
                    <Switch checked={false} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Desktop Notifications</span>
                    <Switch checked={true} />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Palette className="text-vytreon-cyan" size={20} />
                    <span>Appearance Settings</span>
                  </CardTitle>
                  <CardDescription>Customize the look and feel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Dark Mode</span>
                    <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Auto Sync</span>
                    <Switch checked={autoSync} onCheckedChange={setAutoSync} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Analytics</span>
                    <Switch checked={analytics} onCheckedChange={setAnalytics} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Theme Color</label>
                    <select className="w-full p-2 rounded bg-vytreon-dark/50 border border-gray-600 text-white">
                      <option>Vytreon Cyan</option>
                      <option>Purple</option>
                      <option>Blue</option>
                      <option>Green</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Globe className="text-vytreon-cyan" size={20} />
                  <span>System Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <p className="text-gray-400 text-sm">Version</p>
                    <p className="text-white font-medium">Vytreon v2.1.4</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Last Updated</p>
                    <p className="text-white font-medium">December 6, 2024</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">License</p>
                    <p className="text-white font-medium">Enterprise Pro</p>
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

export default Settings;
