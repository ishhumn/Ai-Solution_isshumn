import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Clock, User, Mail, MessageSquare, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ScheduleDemo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would typically send this to a backend
    toast({
      title: "Demo Scheduled!",
      description: "We'll be in touch with you shortly to confirm your demo.",
    });
    
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Future of AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo and discover how our AI solutions can transform your business
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                Schedule Your Demo
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5" />
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Company Input */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Company Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5" />
                      <input
                        type="date"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5" />
                      <input
                        type="time"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Additional Information
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-neutral-400 h-5 w-5" />
                      <textarea
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent min-h-[100px]"
                        placeholder="Tell us about your specific needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Schedule Demo
                  </button>
                </div>
              </form>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-neutral-600">Choose a time that works best for your team</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Personalized Demo</h3>
                <p className="text-neutral-600">Tailored presentation for your specific needs</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                <p className="text-neutral-600">Get answers to all your questions</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScheduleDemo;