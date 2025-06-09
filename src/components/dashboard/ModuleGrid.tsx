
import { 
  Shield, 
  Link, 
  Brain, 
  Users, 
  Lock,
  Wallet,
  Database,
  Activity,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
  {
    id: "identity",
    title: "Decentralized Identity",
    description: "Self-sovereign identity management with blockchain verification",
    icon: Shield,
    status: "Active",
    color: "text-green-400",
    metrics: "2,847 identities verified"
  },
  {
    id: "blockchain",
    title: "Blockchain Network",
    description: "Multi-chain integration with smart contract automation",
    icon: Link,
    status: "Connected",
    color: "text-vytreon-cyan",
    metrics: "15.2K transactions/day"
  },
  {
    id: "ai",
    title: "AI Engine",
    description: "Advanced analytics and personalization algorithms",
    icon: Brain,
    status: "Learning",
    color: "text-vytreon-purple",
    metrics: "94.7% accuracy rate"
  },
  {
    id: "dao",
    title: "DAO Governance",
    description: "Community-driven decision making and voting system",
    icon: Users,
    status: "Active Voting",
    color: "text-yellow-400",
    metrics: "1,247 active voters"
  },
  {
    id: "security",
    title: "Security Layer",
    description: "Zero-trust architecture with end-to-end encryption",
    icon: Lock,
    status: "Secured",
    color: "text-red-400",
    metrics: "100% threat prevention"
  },
  {
    id: "storage",
    title: "IPFS Storage",
    description: "Distributed storage network for decentralized content",
    icon: Database,
    status: "Syncing",
    color: "text-blue-400",
    metrics: "847 GB distributed"
  }
];

const ModuleGrid = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Core Modules</h3>
        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
          Manage Modules
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Card key={module.id} className="glass-card group cursor-pointer hover:scale-105 transition-transform">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-vytreon-dark-blue">
                    <Icon className={`${module.color}`} size={24} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white group-hover:text-vytreon-cyan transition-colors">
                      {module.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${module.color.replace('text-', 'bg-')}`} />
                      <span className={`text-sm ${module.color}`}>{module.status}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-2">
                  {module.description}
                </CardDescription>
                <p className="text-sm text-vytreon-cyan font-medium">{module.metrics}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleGrid;
