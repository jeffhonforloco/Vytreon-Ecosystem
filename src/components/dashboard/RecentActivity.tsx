
import { Activity, ArrowUpRight, ArrowDownLeft, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    type: "transaction",
    description: "Payment via Oowo",
    amount: "$250.00",
    time: "2 mins ago",
    status: "completed",
    icon: ArrowUpRight
  },
  {
    type: "stream",
    description: "New track on Didit360",
    amount: "1.2K plays",
    time: "15 mins ago",
    status: "active",
    icon: Zap
  },
  {
    type: "booking",
    description: "Travel via Escazo",
    amount: "€850.00",
    time: "1 hour ago",
    status: "confirmed",
    icon: ArrowDownLeft
  },
  {
    type: "analysis",
    description: "SEO report generated",
    amount: "15 sites",
    time: "2 hours ago",
    status: "completed",
    icon: Activity
  }
];

const RecentActivity = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Activity className="text-vytreon-cyan" size={20} />
          <span>Recent Activity</span>
        </CardTitle>
        <CardDescription>Latest ecosystem interactions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-vytreon-dark/50">
              <div className="p-2 rounded-full bg-vytreon-cyan/20">
                <Icon className="text-vytreon-cyan" size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{activity.description}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-vytreon-cyan text-sm">{activity.amount}</span>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
