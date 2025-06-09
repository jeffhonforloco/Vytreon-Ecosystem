
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Oowo from "./pages/Oowo";
import Escazo from "./pages/Escazo";
import Didit360 from "./pages/Didit360";
import SEOAgentPro from "./pages/SEOAgentPro";
import SireIQ from "./pages/SireIQ";
import WhisApp from "./pages/WhisApp";
import IXhare from "./pages/IXhare";
import Voxsaga from "./pages/Voxsaga";
import Fycera from "./pages/Fycera";
import Fycra from "./pages/Fycra";
import Auralora from "./pages/Auralora";
import Chattrer from "./pages/Chattrer";
import CumnIQ from "./pages/CumnIQ";
import Identity from "./pages/Identity";
import Governance from "./pages/Governance";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/oowo" element={<Oowo />} />
          <Route path="/escazo" element={<Escazo />} />
          <Route path="/didit360" element={<Didit360 />} />
          <Route path="/seo-agent-pro" element={<SEOAgentPro />} />
          <Route path="/sire-iq" element={<SireIQ />} />
          <Route path="/whis-app" element={<WhisApp />} />
          <Route path="/ixhare" element={<IXhare />} />
          <Route path="/voxsaga" element={<Voxsaga />} />
          <Route path="/fycera" element={<Fycera />} />
          <Route path="/fycra" element={<Fycra />} />
          <Route path="/auralora" element={<Auralora />} />
          <Route path="/chattrer" element={<Chattrer />} />
          <Route path="/cumn-iq" element={<CumnIQ />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
