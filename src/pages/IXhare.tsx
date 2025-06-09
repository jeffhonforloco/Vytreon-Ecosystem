
import { useState } from "react";
import { Share2, Upload, Download, FolderOpen, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const IXhare = () => {
  const [activeModule, setActiveModule] = useState("ixhare");

  const recentFiles = [
    { name: "Project_Proposal.pdf", size: "2.4 MB", shared: "3 users", type: "PDF" },
    { name: "Marketing_Assets.zip", size: "45.7 MB", shared: "8 users", type: "Archive" },
    { name: "Presentation_Q4.pptx", size: "12.1 MB", shared: "5 users", type: "Presentation" },
    { name: "Code_Repository.zip", size: "128.3 MB", shared: "12 users", type: "Archive" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Share2 className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">iXhare File Sharing</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Upload className="text-vytreon-cyan" size={20} />
                    <span>Files Shared</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">1,247</div>
                  <p className="text-gray-400">Total uploads</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Download className="text-vytreon-cyan" size={20} />
                    <span>Downloads</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">8,934</div>
                  <p className="text-gray-400">This month</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <FolderOpen className="text-vytreon-cyan" size={20} />
                    <span>Storage Used</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">24.7</div>
                  <p className="text-gray-400">GB of 100 GB</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Shield className="text-vytreon-cyan" size={20} />
                    <span>Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">256-bit</div>
                  <p className="text-gray-400">Encryption</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Recent File Shares</CardTitle>
                <CardDescription>Track your latest file sharing activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                          <FolderOpen className="text-vytreon-cyan" size={16} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{file.name}</p>
                          <p className="text-sm text-gray-400">{file.type} • {file.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-vytreon-cyan font-bold">{file.shared}</p>
                          <p className="text-xs text-gray-400">Shared with</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                            Share
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white">
                            Download
                          </Button>
                        </div>
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

export default IXhare;
