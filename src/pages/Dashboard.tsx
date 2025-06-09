
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import EcosystemOverview from "@/components/dashboard/EcosystemOverview";
import ProductGrid from "@/components/dashboard/ProductGrid";
import SystemHealth from "@/components/dashboard/SystemHealth";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState("overview");

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <EcosystemOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ProductGrid />
              </div>
              <div className="space-y-6">
                <SystemHealth />
                <RecentActivity />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
