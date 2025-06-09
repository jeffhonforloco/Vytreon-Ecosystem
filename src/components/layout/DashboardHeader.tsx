
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
  return (
    <header className="bg-vytreon-dark-blue border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-vytreon-cyan">Ecosystem Dashboard</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input 
              placeholder="Search modules, transactions..." 
              className="pl-10 w-96 bg-vytreon-dark border-gray-700"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-vytreon-cyan">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-vytreon-cyan">
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
