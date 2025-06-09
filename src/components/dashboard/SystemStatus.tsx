
import { Server, Wifi, Database, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "Blockchain Network",
    status: "operational",
    uptime: "99.9%",
    icon: Server
  },
  {
    name: "IPFS Network",
    status: "operational",
    uptime: "99.7%",
    icon: Database
  },
  {
    name: "AI Services",
    status: "degraded",
    uptime: "97.2%",
    icon: Wifi
  },
  {
    name: "Security Layer",
    status: "operational",
    uptime: "100%",
    icon: Shield
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "operational":
      return "text-green-400";
    case "degraded":
      return "text-yellow-400";
    case "down":
      return "text-red-400";
    default:
      return "text-gray-400";
  }
};

const SystemStatus = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-white">System Status</CardTitle>
        <CardDescription>Real-time ecosystem health monitoring</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-vytreon-dark/50">
              <div className="flex items-center space-x-3">
                <Icon className="text-vytreon-cyan" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">{service.name}</p>
                  <p className="text-xs text-gray-400">Uptime: {service.uptime}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                {service.status}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SystemStatus;
