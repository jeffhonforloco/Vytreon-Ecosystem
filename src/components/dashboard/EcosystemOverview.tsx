
import { Activity, Users, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EcosystemOverview = () => {
  const metrics = [
    {
      title: "Active Users",
      value: "847,293",
      change: "+12.4%",
      trend: "up",
      icon: Users,
      description: "Across all products"
    },
    {
      title: "Daily Transactions",
      value: "2.3M",
      change: "+8.7%",
      trend: "up",
      icon: Activity,
      description: "Cross-platform activity"
    },
    {
      title: "Revenue Growth",
      value: "$4.2M",
      change: "+23.1%",
      trend: "up",
      icon: TrendingUp,
      description: "Monthly recurring"
    },
    {
      title: "Security Score",
      value: "99.8%",
      change: "+0.2%",
      trend: "up",
      icon: Shield,
      description: "Zero-trust verified"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Vytreon Ecosystem Dashboard</h1>
        <p className="text-gray-400 mt-2">Unified platform for decentralized digital experiences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  {metric.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-vytreon-cyan" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <p className="text-xs text-gray-400 mt-1">{metric.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-green-400">{metric.change}</span>
                  <span className="text-xs text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default EcosystemOverview;
