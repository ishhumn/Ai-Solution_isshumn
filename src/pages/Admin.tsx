import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Dashboard from "@/components/admin/Dashboard";
import InquiriesManagement from "@/components/admin/InquiriesManagement";
import ProductsManagement from "@/components/admin/ProductsManagement";
import GalleryManagement from "@/components/admin/GalleryManagement";
import BlogManagement from "@/components/admin/BlogManagement";
import TestimonialsManagement from "@/components/admin/TestimonialsManagement";
import EventsManagement from "@/components/admin/EventsManagement";
import { LogOut } from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <Dashboard />
            </TabsContent>

            <TabsContent value="inquiries">
              <InquiriesManagement />
            </TabsContent>

            <TabsContent value="products">
              <ProductsManagement />
            </TabsContent>

            <TabsContent value="events">
              <EventsManagement />
            </TabsContent>

            <TabsContent value="gallery">
              <GalleryManagement />
            </TabsContent>

            <TabsContent value="blog">
              <BlogManagement />
            </TabsContent>

            <TabsContent value="testimonials">
              <TestimonialsManagement />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;