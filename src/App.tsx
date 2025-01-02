import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Events from "./pages/Events";
import Assistant from "./pages/Assistant";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import ScheduleDemo from "./pages/ScheduleDemo";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/events" element={<Events />} />
              <Route path="/ai-assistant" element={<Assistant />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/schedule-demo" element={<ScheduleDemo />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/admin/*" 
                element={
                  <ProtectedRoute requireAdmin>
                    <Admin />
                  </ProtectedRoute>
                } 
              />
            </Routes>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;



