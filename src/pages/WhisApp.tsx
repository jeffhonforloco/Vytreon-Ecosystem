
import { useState } from "react";
import { MessageSquare, ThumbsUp, Users, BarChart3, Clock, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const WhisApp = () => {
  const [activeModule, setActiveModule] = useState("whis-app");

  const feedbackData = [
    { 
      topic: "Platform Usability", 
      responses: 1247, 
      satisfaction: 4.6, 
      trend: "+12%",
      priority: "High",
      status: "In Progress",
      lastUpdate: "2 hours ago"
    },
    { 
      topic: "Feature Requests", 
      responses: 892, 
      satisfaction: 4.2, 
      trend: "+8%",
      priority: "Medium",
      status: "Planning",
      lastUpdate: "1 day ago"
    },
    { 
      topic: "Bug Reports", 
      responses: 156, 
      satisfaction: 3.8, 
      trend: "-5%",
      priority: "Critical",
      status: "Resolved",
      lastUpdate: "30 mins ago"
    },
    { 
      topic: "Performance", 
      responses: 634, 
      satisfaction: 4.4, 
      trend: "+15%",
      priority: "High",
      status: "Monitoring",
      lastUpdate: "4 hours ago"
    }
  ];

  const recentFeedback = [
    {
      user: "Alex Chen",
      category: "UI/UX",
      feedback: "The new dashboard is much more intuitive. Love the dark theme!",
      sentiment: "Positive",
      rating: 5,
      time: "5 mins ago"
    },
    {
      user: "Sarah Johnson",
      category: "Performance",
      feedback: "Page load times have improved significantly after the latest update.",
      sentiment: "Positive",
      rating: 4,
      time: "12 mins ago"
    },
    {
      user: "Mike Rodriguez",
      category: "Feature Request",
      feedback: "Would love to see real-time collaboration features in the next release.",
      sentiment: "Neutral",
      rating: 4,
      time: "25 mins ago"
    },
    {
      user: "Emma Davis",
      category: "Bug Report",
      feedback: "The search function occasionally returns empty results.",
      sentiment: "Negative",
      rating: 2,
      time: "1 hour ago"
    }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare className="text-vytreon-cyan" size={32} />
                <h1 className="text-3xl font-bold text-white">WhisApp Community</h1>
              </div>
              <Button className="bg-vytreon-cyan hover:bg-vytreon-cyan/80 text-vytreon-dark">
                <MessageSquare className="mr-2" size={16} />
                New Survey
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <MessageSquare className="text-vytreon-cyan" size={20} />
                    <span>Feedback</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">2,929</div>
                  <p className="text-gray-400">Total responses</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <ThumbsUp className="text-vytreon-cyan" size={20} />
                    <span>Satisfaction</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">4.3</div>
                  <p className="text-gray-400">Average rating</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Users className="text-vytreon-cyan" size={20} />
                    <span>Active Users</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">8,743</div>
                  <p className="text-gray-400">Community members</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Clock className="text-vytreon-cyan" size={20} />
                    <span>Response Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">1.2h</div>
                  <p className="text-gray-400">Avg. response time</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Feedback Categories</CardTitle>
                  <CardDescription>Track community sentiment and engagement across topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {feedbackData.map((data, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                              <BarChart3 className="text-vytreon-cyan" size={14} />
                            </div>
                            <div>
                              <p className="text-white font-medium">{data.topic}</p>
                              <p className="text-sm text-gray-400">{data.responses} responses</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              data.priority === 'Critical' ? 'bg-red-600/20 text-red-400' :
                              data.priority === 'High' ? 'bg-orange-600/20 text-orange-400' :
                              'bg-yellow-600/20 text-yellow-400'
                            }`}>
                              {data.priority}
                            </span>
                            {data.status === 'Resolved' ? (
                              <CheckCircle className="text-green-400" size={16} />
                            ) : (
                              <AlertCircle className="text-orange-400" size={16} />
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-vytreon-cyan font-bold">{data.satisfaction}</p>
                            <p className="text-xs text-gray-400">Satisfaction</p>
                          </div>
                          <div>
                            <p className={`font-bold ${data.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                              {data.trend}
                            </p>
                            <p className="text-xs text-gray-400">Trend</p>
                          </div>
                          <div>
                            <p className="text-white font-bold">{data.status}</p>
                            <p className="text-xs text-gray-400">{data.lastUpdate}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Recent Feedback</CardTitle>
                  <CardDescription>Latest community responses and suggestions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentFeedback.map((feedback, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                              <span className="text-vytreon-cyan text-xs">{feedback.user.charAt(0)}</span>
                            </div>
                            <span className="text-white font-medium text-sm">{feedback.user}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              feedback.sentiment === 'Positive' ? 'bg-green-600/20 text-green-400' :
                              feedback.sentiment === 'Negative' ? 'bg-red-600/20 text-red-400' :
                              'bg-gray-600/20 text-gray-400'
                            }`}>
                              {feedback.sentiment}
                            </span>
                            <span className="text-gray-400 text-xs">{feedback.time}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{feedback.feedback}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{feedback.category}</span>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={12} 
                                className={i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'} 
                              />
                            ))}
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

export default WhisApp;
