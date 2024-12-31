import { ChartBar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Charts = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container-padding mx-auto py-8">
        <div className="flex items-center gap-3 mb-8">
          <ChartBar className="w-8 h-8 text-accent" />
          <h1 className="text-3xl font-bold text-neutral-900">System Architecture & Flow</h1>
        </div>

        <Tabs defaultValue="sitemap" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="sitemap">Sitemap</TabsTrigger>
            <TabsTrigger value="flowchart">Flow Chart</TabsTrigger>
            <TabsTrigger value="usecase">Use Case</TabsTrigger>
            <TabsTrigger value="er">ER Diagram</TabsTrigger>
          </TabsList>

          <TabsContent value="sitemap">
            <Card className="p-6">
              <div className="overflow-auto">
                <svg width="800" height="600" className="mx-auto">
                  {/* Home Page */}
                  <rect x="350" y="20" width="100" height="40" rx="5" fill="#4F46E5" />
                  <text x="400" y="45" textAnchor="middle" fill="white">Home</text>
                  
                  {/* Main Sections */}
                  <rect x="150" y="120" width="100" height="40" rx="5" fill="#6366F1" />
                  <rect x="300" y="120" width="100" height="40" rx="5" fill="#6366F1" />
                  <rect x="450" y="120" width="100" height="40" rx="5" fill="#6366F1" />
                  <rect x="600" y="120" width="100" height="40" rx="5" fill="#6366F1" />
                  
                  <text x="200" y="145" textAnchor="middle" fill="white">About</text>
                  <text x="350" y="145" textAnchor="middle" fill="white">Services</text>
                  <text x="500" y="145" textAnchor="middle" fill="white">Blog</text>
                  <text x="650" y="145" textAnchor="middle" fill="white">Contact</text>
                  
                  {/* Connecting Lines */}
                  <line x1="400" y1="60" x2="200" y2="120" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="400" y1="60" x2="350" y2="120" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="400" y1="60" x2="500" y2="120" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="400" y1="60" x2="650" y2="120" stroke="#94A3B8" strokeWidth="2" />
                  
                  {/* Sub Sections */}
                  <rect x="250" y="220" width="100" height="40" rx="5" fill="#818CF8" />
                  <rect x="400" y="220" width="100" height="40" rx="5" fill="#818CF8" />
                  <rect x="550" y="220" width="100" height="40" rx="5" fill="#818CF8" />
                  
                  <text x="300" y="245" textAnchor="middle" fill="white">Features</text>
                  <text x="450" y="245" textAnchor="middle" fill="white">Schedule</text>
                  <text x="600" y="245" textAnchor="middle" fill="white">Charts</text>
                  
                  {/* Sub Connecting Lines */}
                  <line x1="350" y1="160" x2="300" y2="220" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="350" y1="160" x2="450" y2="220" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="350" y1="160" x2="600" y2="220" stroke="#94A3B8" strokeWidth="2" />
                </svg>
              </div>
              <div className="mt-4 text-neutral-600">
                <h3 className="text-xl font-semibold mb-2">Website Structure</h3>
                <p>This sitemap illustrates the hierarchical structure of our website, showing the relationships between different pages and sections.</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="flowchart">
            <Card className="p-6">
              <div className="overflow-auto">
                <svg width="800" height="600" className="mx-auto">
                  {/* Start */}
                  <circle cx="400" cy="50" r="30" fill="#4F46E5" />
                  <text x="400" y="55" textAnchor="middle" fill="white">Start</text>
                  
                  {/* User Actions */}
                  <rect x="350" y="120" width="100" height="50" rx="5" fill="#6366F1" />
                  <rect x="350" y="220" width="100" height="50" rx="5" fill="#6366F1" />
                  <rect x="350" y="320" width="100" height="50" rx="5" fill="#6366F1" />
                  <rect x="350" y="420" width="100" height="50" rx="5" fill="#6366F1" />
                  
                  <text x="400" y="145" textAnchor="middle" fill="white">Visit Site</text>
                  <text x="400" y="245" textAnchor="middle" fill="white">Browse</text>
                  <text x="400" y="345" textAnchor="middle" fill="white">Schedule</text>
                  <text x="400" y="445" textAnchor="middle" fill="white">Contact</text>
                  
                  {/* Arrows */}
                  <line x1="400" y1="80" x2="400" y2="120" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="400" y1="170" x2="400" y2="220" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="400" y1="270" x2="400" y2="320" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="400" y1="370" x2="400" y2="420" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  
                  {/* Arrow Marker */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#94A3B8" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <div className="mt-4 text-neutral-600">
                <h3 className="text-xl font-semibold mb-2">System Flow</h3>
                <p>The flowchart demonstrates the step-by-step process flow of key features in our system, including user interactions and system responses.</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="usecase">
            <Card className="p-6">
              <div className="overflow-auto">
                <svg width="800" height="600" className="mx-auto">
                  {/* System Boundary */}
                  <rect x="200" y="50" width="400" height="500" rx="10" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
                  <text x="400" y="80" textAnchor="middle" fill="#4B5563" fontSize="16">System</text>
                  
                  {/* Actors */}
                  <circle cx="100" cy="200" r="30" fill="#4F46E5" />
                  <text x="100" y="240" textAnchor="middle" fill="#4B5563">User</text>
                  
                  <circle cx="700" cy="200" r="30" fill="#4F46E5" />
                  <text x="700" y="240" textAnchor="middle" fill="#4B5563">Admin</text>
                  
                  {/* Use Cases */}
                  <ellipse cx="400" cy="150" rx="80" ry="30" fill="#6366F1" />
                  <ellipse cx="400" cy="250" rx="80" ry="30" fill="#6366F1" />
                  <ellipse cx="400" cy="350" rx="80" ry="30" fill="#6366F1" />
                  <ellipse cx="400" cy="450" rx="80" ry="30" fill="#6366F1" />
                  
                  <text x="400" y="155" textAnchor="middle" fill="white">View Services</text>
                  <text x="400" y="255" textAnchor="middle" fill="white">Schedule Demo</text>
                  <text x="400" y="355" textAnchor="middle" fill="white">Contact Support</text>
                  <text x="400" y="455" textAnchor="middle" fill="white">Manage Content</text>
                  
                  {/* Connections */}
                  <line x1="130" y1="200" x2="320" y2="150" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="130" y1="200" x2="320" y2="250" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="130" y1="200" x2="320" y2="350" stroke="#94A3B8" strokeWidth="2" />
                  
                  <line x1="670" y1="200" x2="480" y2="450" stroke="#94A3B8" strokeWidth="2" />
                </svg>
              </div>
              <div className="mt-4 text-neutral-600">
                <h3 className="text-xl font-semibold mb-2">User Interactions</h3>
                <p>This use case diagram shows the various ways users and administrators interact with the system, highlighting key functionality and user roles.</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="er">
            <Card className="p-6">
              <div className="overflow-auto">
                <svg width="800" height="600" className="mx-auto">
                  {/* Entities */}
                  <rect x="100" y="100" width="150" height="200" rx="5" fill="#4F46E5" />
                  <rect x="350" y="100" width="150" height="200" rx="5" fill="#4F46E5" />
                  <rect x="600" y="100" width="150" height="200" rx="5" fill="#4F46E5" />
                  
                  {/* Entity Headers */}
                  <rect x="100" y="100" width="150" height="40" rx="5" fill="#818CF8" />
                  <rect x="350" y="100" width="150" height="40" rx="5" fill="#818CF8" />
                  <rect x="600" y="100" width="150" height="40" rx="5" fill="#818CF8" />
                  
                  <text x="175" y="125" textAnchor="middle" fill="white">Users</text>
                  <text x="425" y="125" textAnchor="middle" fill="white">Services</text>
                  <text x="675" y="125" textAnchor="middle" fill="white">Inquiries</text>
                  
                  {/* Attributes */}
                  <text x="110" y="160" fill="white">id (PK)</text>
                  <text x="110" y="190" fill="white">name</text>
                  <text x="110" y="220" fill="white">email</text>
                  <text x="110" y="250" fill="white">role</text>
                  
                  <text x="360" y="160" fill="white">id (PK)</text>
                  <text x="360" y="190" fill="white">title</text>
                  <text x="360" y="220" fill="white">description</text>
                  <text x="360" y="250" fill="white">features</text>
                  
                  <text x="610" y="160" fill="white">id (PK)</text>
                  <text x="610" y="190" fill="white">user_id (FK)</text>
                  <text x="610" y="220" fill="white">subject</text>
                  <text x="610" y="250" fill="white">message</text>
                  
                  {/* Relationships */}
                  <line x1="250" y1="200" x2="350" y2="200" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="500" y1="200" x2="600" y2="200" stroke="#94A3B8" strokeWidth="2" />
                </svg>
              </div>
              <div className="mt-4 text-neutral-600">
                <h3 className="text-xl font-semibold mb-2">Data Structure</h3>
                <p>The Entity-Relationship diagram visualizes how different data entities in our system are related and structured in the database.</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Charts;