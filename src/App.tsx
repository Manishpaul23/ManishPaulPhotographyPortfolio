import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioPage from "./pages/PortfolioPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from './pages/AdminLogin';
import RequireAdmin from './pages/RequireAdmin';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            
            {/* ✅ Admin login route */}
            <Route path="/admin-login" element={<AdminLogin />} />
            
            {/* ✅ Protected admin dashboard route */}
            <Route path="/admin-dashboard" element={
              <RequireAdmin>
                <AdminDashboard />
              </RequireAdmin>
            } />
            
            {/* ✅ Redirect /admin to /admin-login for convenience */}
            <Route path="/admin" element={<AdminLogin />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
};

export default App;
