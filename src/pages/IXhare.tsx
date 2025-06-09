
import { useState } from "react";
import { Share2, Upload, Download, FolderOpen, Shield, Users, Clock, FileText, Image, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const IXhare = () => {
  const [activeModule, setActiveModule] = useState("ixhare");

  const recentFiles = [
    { 
      name: "Project_Proposal_2024.pdf", 
      size: "2.4 MB", 
      shared: "3 users", 
      type: "PDF",
      uploadDate: "2 hours ago",
      downloads: 12,
      status: "Active",
      owner: "Sarah Chen"
    },
    { 
      name: "Marketing_Assets_Q4.zip", 
      size: "45.7 MB", 
      shared: "8 users", 
      type: "Archive",
      uploadDate: "5 hours ago",
      downloads: 28,
      status: "Active",
      owner: "Mike Johnson"
    },
    { 
      name: "Presentation_Demo.pptx", 
      size: "12.1 MB", 
      shared: "5 users", 
      type: "Presentation",
      uploadDate: "1 day ago",
      downloads: 19,
      status: "Expired",
      owner: "Emma Davis"
    },
    { 
      name: "Code_Repository_v2.zip", 
      size: "128.3 MB", 
      shared: "12 users", 
      type: "Archive",
      uploadDate: "2 days ago",
      downloads: 45,
      status: "Active",
      owner: "Alex Rodriguez"
    }
  ];

  const storageBreakdown = [
    { type: "Documents", usage: "24.7 GB", percentage: 35, color: "bg-blue-500" },
    { type: "Images", usage: "18.3 GB", percentage: 26, color: "bg-green-500" },
    { type: "Videos", usage: "15.2 GB", percentage: 22, color: "bg-purple-500" },
    { type: "Archives", usage: "8.9 GB", percentage: 13, color: "bg-orange-500" },
    { type: "Other", usage: "2.8 GB", percentage: 4, color: "bg-gray-500" }
  ];

  const collaborationStats = [
    { metric: "Active Collaborations", value: "47", change: "+8", period: "this week" },
    { metric: "Files Shared", value: "1,247", change: "+156", period: "this month" },
    { metric: "Download Success Rate", value: "99.8%", change: "+0.2%", period: "uptime" },
    { metric: "Average File Size", value: "23.4 MB", change: "-2.1 MB", period: "optimization" }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF':
      case 'Presentation':
        return FileText;
      case 'Archive':
        return FolderOpen;
      case 'Image':
        return Image;
      case 'Video':
        return Video;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Share2 className="text-vytreon-cyan" size={32} />
                <h1 className="text-3xl font-bold text-white">iXhare File Sharing</h1>
              </div>
              <Button className="bg-vytreon-cyan hover:bg-vytreon-cyan/80 text-vytreon-dark">
                <Upload className="mr-2" size={16} />
                Upload Files
              </Button>
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
                  <div className="text-3xl font-bold text-vytreon-cyan">69.9</div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Recent File Activities</CardTitle>
                  <CardDescription>Track your latest file sharing and collaboration activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentFiles.map((file, index) => {
                      const FileIcon = getFileIcon(file.type);
                      return (
                        <div key={index} className="border border-gray-700 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                                <FileIcon className="text-vytreon-cyan" size={14} />
                              </div>
                              <div>
                                <p className="text-white font-medium text-sm">{file.name}</p>
                                <p className="text-xs text-gray-400">{file.type} • {file.size}</p>
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs ${
                              file.status === 'Active' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                            }`}>
                              {file.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-4 gap-4 text-center mb-3">
                            <div>
                              <p className="text-vytreon-cyan font-bold text-sm">{file.shared}</p>
                              <p className="text-xs text-gray-400">Shared</p>
                            </div>
                            <div>
                              <p className="text-white font-bold text-sm">{file.downloads}</p>
                              <p className="text-xs text-gray-400">Downloads</p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">{file.owner}</p>
                              <p className="text-xs text-gray-400">Owner</p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">{file.uploadDate}</p>
                              <p className="text-xs text-gray-400">Uploaded</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1 border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                              <Share2 size={14} className="mr-1" />
                              Share
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white">
                              <Download size={14} className="mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Storage Analytics</CardTitle>
                  <CardDescription>Monitor storage usage and collaboration metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-4">Storage Breakdown</h4>
                    <div className="space-y-3">
                      {storageBreakdown.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                            <span className="text-gray-400">{item.type}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-white font-medium">{item.usage}</span>
                            <span className="text-gray-400 ml-2">({item.percentage}%)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-4">Collaboration Stats</h4>
                    <div className="space-y-3">
                      {collaborationStats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-vytreon-dark/50">
                          <div>
                            <p className="text-white font-medium text-sm">{stat.metric}</p>
                            <p className="text-xs text-gray-400">{stat.period}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-vytreon-cyan font-bold">{stat.value}</p>
                            <p className="text-green-400 text-xs">{stat.change}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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

export default IXhare;
