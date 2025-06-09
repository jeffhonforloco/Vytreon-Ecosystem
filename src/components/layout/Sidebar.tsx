import { useState } from "react";
import { 
  Home, 
  CreditCard, 
  Plane, 
  Music, 
  Search, 
  Brain, 
  MessageSquare, 
  Share2,
  Mic,
  FileText,
  Youtube,
  Headphones,
  MessageCircle,
  Users,
  Shield,
  Vote,
  BarChart3,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const modules = [
  { id: "overview", label: "Dashboard", icon: Home, path: "/" },
  { 
    id: "financial", 
    label: "Financial Services", 
    icon: CreditCard,
    subModules: [
      { id: "oowo", label: "Oowo Payments", icon: CreditCard, path: "/oowo" }
    ]
  },
  { 
    id: "lifestyle", 
    label: "Lifestyle & Travel", 
    icon: Plane,
    subModules: [
      { id: "escazo", label: "Escazo Travel", icon: Plane, path: "/escazo" }
    ]
  },
  { 
    id: "media", 
    label: "Media & Entertainment", 
    icon: Music,
    subModules: [
      { id: "didit360", label: "Didit360 Media", icon: Music, path: "/didit360" },
      { id: "auralora", label: "Auralora Audiobooks", icon: Headphones, path: "/auralora" }
    ]
  },
  { 
    id: "business", 
    label: "Business & Analytics", 
    icon: BarChart3,
    subModules: [
      { id: "seo-agent-pro", label: "SEOAgentPro", icon: Search, path: "/seo-agent-pro" },
      { id: "sire-iq", label: "SireIQ Analytics", icon: Brain, path: "/sire-iq" },
      { id: "fycra", label: "Fycra YouTube", icon: Youtube, path: "/fycra" }
    ]
  },
  { 
    id: "communication", 
    label: "Communication", 
    icon: MessageCircle,
    subModules: [
      { id: "whis-app", label: "WhisApp Feedback", icon: MessageSquare, path: "/whis-app" },
      { id: "chattrer", label: "Chattrer Messaging", icon: MessageCircle, path: "/chattrer" },
      { id: "voxsaga", label: "Voxsaga Voice", icon: Mic, path: "/voxsaga" }
    ]
  },
  { 
    id: "productivity", 
    label: "Productivity", 
    icon: FileText,
    subModules: [
      { id: "ixhare", label: "iXhare Sharing", icon: Share2, path: "/ixhare" },
      { id: "fycera", label: "Fycera CMS", icon: FileText, path: "/fycera" }
    ]
  },
  { 
    id: "community", 
    label: "Community", 
    icon: Users,
    subModules: [
      { id: "cumn-iq", label: "CumnIQ Social", icon: Users, path: "/cumn-iq" }
    ]
  },
  { 
    id: "platform", 
    label: "Platform", 
    icon: Shield,
    subModules: [
      { id: "identity", label: "Identity Management", icon: Shield, path: "/identity" },
      { id: "governance", label: "DAO Governance", icon: Vote, path: "/governance" },
      { id: "analytics", label: "Platform Analytics", icon: BarChart3, path: "/analytics" },
      { id: "settings", label: "Settings", icon: Settings, path: "/settings" }
    ]
  }
];

const Sidebar = ({ activeModule, setActiveModule }: SidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['platform']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleNavigation = (path: string, moduleId: string) => {
    setActiveModule(moduleId);
    window.location.href = path;
  };

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-vytreon-dark-blue border-r border-gray-800 z-50 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/9f4fc31e-da9e-48a9-942d-5df7c9e41858.png" 
            alt="Vytreon Logo" 
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-vytreon-cyan">Vytreon Ecosystem</h1>
        </div>
      </div>
      
      <nav className="px-4 space-y-2">
        {modules.map((module) => {
          const Icon = module.icon;
          const isExpanded = expandedSections.includes(module.id);
          
          if (module.subModules) {
            return (
              <div key={module.id}>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-gray-300 hover:text-vytreon-cyan hover:bg-vytreon-dark-blue/50"
                  onClick={() => toggleSection(module.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={20} />
                    <span>{module.label}</span>
                  </div>
                  <span className={cn("transition-transform", isExpanded && "rotate-90")}>▶</span>
                </Button>
                
                {isExpanded && (
                  <div className="ml-8 space-y-1">
                    {module.subModules.map((subModule) => {
                      const SubIcon = subModule.icon;
                      return (
                        <Button
                          key={subModule.id}
                          variant="ghost"
                          className={cn(
                            "w-full justify-start space-x-3 text-gray-400 hover:text-vytreon-cyan hover:bg-vytreon-dark-blue/30",
                            activeModule === subModule.id && "bg-vytreon-cyan/10 text-vytreon-cyan"
                          )}
                          onClick={() => handleNavigation(subModule.path, subModule.id)}
                        >
                          <SubIcon size={16} />
                          <span className="text-sm">{subModule.label}</span>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Button
              key={module.id}
              variant="ghost"
              className={cn(
                "w-full justify-start space-x-3 text-gray-300 hover:text-vytreon-cyan hover:bg-vytreon-dark-blue/50",
                activeModule === module.id && "bg-vytreon-cyan/10 text-vytreon-cyan"
              )}
              onClick={() => handleNavigation(module.path, module.id)}
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
