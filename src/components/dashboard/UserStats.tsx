
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Transactions",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    description: "Last 30 days"
  },
  {
    title: "DAO Participation",
    value: "87%",
    change: "+5.2%",
    trend: "up",
    description: "Active voting rate"
  },
  {
    title: "Storage Used",
    value: "2.4 GB",
    change: "-0.8%",
    trend: "down",
    description: "IPFS network"
  },
  {
    title: "AI Predictions",
    value: "94.2%",
    change: "+2.1%",
    trend: "up",
    description: "Accuracy rate"
  }
];

const UserStats = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Activity className="text-vytreon-cyan" size={20} />
          <span>User Statistics</span>
        </CardTitle>
        <CardDescription>Your ecosystem performance metrics</CardDescription>
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
