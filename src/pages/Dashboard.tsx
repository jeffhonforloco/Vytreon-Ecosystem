
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import ModuleGrid from "@/components/dashboard/ModuleGrid";
import UserStats from "@/components/dashboard/UserStats";
import SystemStatus from "@/components/dashboard/SystemStatus";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState("overview");

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-64">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ModuleGrid />
              </div>
              <div className="space-y-6">
                <UserStats />
                <SystemStatus />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
