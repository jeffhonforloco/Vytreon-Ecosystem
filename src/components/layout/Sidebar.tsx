
import { useState } from "react";
import { 
  Home, 
  Shield, 
  Link, 
  Brain, 
  Users, 
  Lock,
  Settings,
  Wallet,
  Database,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const modules = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "identity", label: "Identity", icon: Shield },
  { id: "blockchain", label: "Blockchain", icon: Link },
  { id: "ai", label: "AI Engine", icon: Brain },
  { id: "dao", label: "DAO", icon: Users },
  { id: "security", label: "Security", icon: Lock },
  { id: "wallet", label: "Wallet", icon: Wallet },
  { id: "storage", label: "IPFS Storage", icon: Database },
  { id: "analytics", label: "Analytics", icon: Activity },
  { id: "settings", label: "Settings", icon: Settings },
];

const Sidebar = ({ activeModule, setActiveModule }: SidebarProps) => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-vytreon-dark-blue border-r border-gray-800 z-50">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/e4968298-7baf-4630-b38d-3a8b8bc28b42.png" 
            alt="Vytreon Logo" 
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-vytreon-cyan">Vytreon</h1>
        </div>
      </div>
      
      <nav className="px-4 space-y-2">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Button
              key={module.id}
              variant="ghost"
              className={cn(
                "w-full justify-start space-x-3 text-gray-300 hover:text-vytreon-cyan hover:bg-vytreon-dark-blue/50",
                activeModule === module.id && "bg-vytreon-cyan/10 text-vytreon-cyan"
              )}
              onClick={() => setActiveModule(module.id)}
            >
              <Icon size={20} />
              <span>{module.label}</span>
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
