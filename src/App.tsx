
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Identity from "./pages/Identity";
import Blockchain from "./pages/Blockchain";
import AI from "./pages/AI";
import DAO from "./pages/DAO";
import Security from "./pages/Security";
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
          <Route path="/identity" element={<Identity />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/dao" element={<DAO />} />
          <Route path="/security" element={<Security />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
