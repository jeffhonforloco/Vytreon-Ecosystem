
import { Server, Wifi, Database, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "Blockchain Network",
    status: "operational",
    uptime: "99.9%",
    icon: Server,
    latency: "12ms"
  },
  {
    name: "IPFS Network",
    status: "operational",
    uptime: "99.7%",
    icon: Database,
    latency: "45ms"
  },
  {
    name: "AI Services",
    status: "operational",
    uptime: "98.9%",
    icon: Wifi,
    latency: "89ms"
  },
  {
    name: "Security Layer",
    status: "operational",
    uptime: "100%",
    icon: Shield,
    latency: "5ms"
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
        <CardTitle className="text-white">Network Status</CardTitle>
        <CardDescription>Real-time infrastructure monitoring</CardDescription>
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
                  <p className="text-xs text-gray-400">Uptime: {service.uptime} • {service.latency}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${getStatusColor(service.status)}`}>
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
