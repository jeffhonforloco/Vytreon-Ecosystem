
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Network Activity",
    value: "15,247",
    change: "+23.8%",
    trend: "up",
    description: "Transactions this month"
  },
  {
    title: "Community Engagement",
    value: "89.3%",
    change: "+7.2%",
    trend: "up",
    description: "Active participation rate"
  },
  {
    title: "Storage Efficiency",
    value: "847 GB",
    change: "+12.4%",
    trend: "up",
    description: "Distributed across network"
  },
  {
    title: "Security Score",
    value: "99.8%",
    change: "+0.3%",
    trend: "up",
    description: "Threat prevention rate"
  }
];

const UserStats = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Activity className="text-vytreon-cyan" size={20} />
          <span>Performance Metrics</span>
        </CardTitle>
        <CardDescription>Real-time ecosystem analytics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-vytreon-dark/50">
            <div>
              <p className="text-sm text-gray-400">{stat.title}</p>
              <p className="text-lg font-semibold text-white">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
            <div className="flex items-center space-x-1">
              {stat.trend === "up" ? (
                <TrendingUp className="text-green-400" size={16} />
              ) : (
                <TrendingDown className="text-red-400" size={16} />
              )}
              <span className={`text-sm ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default UserStats;
