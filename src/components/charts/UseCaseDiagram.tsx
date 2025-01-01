import { Card } from "@/components/ui/card";

const UseCaseDiagram = () => {
  return (
    <Card className="p-6">
      <div className="overflow-auto">
        <svg width="1000" height="1000" className="mx-auto">
          {/* System Boundary */}
          <rect x="200" y="50" width="600" height="900" rx="10" fill="none" stroke="#D6BCFA" strokeWidth="2" strokeDasharray="5,5" />
          <text x="500" y="80" textAnchor="middle" fill="#6E59A5" className="text-lg font-semibold">System Boundary</text>
          
          {/* Actors */}
          <circle cx="100" cy="300" r="30" fill="#8B5CF6" />
          <text x="100" y="350" textAnchor="middle" fill="#6E59A5" className="text-sm">Guest User</text>
          
          <circle cx="100" cy="500" r="30" fill="#8B5CF6" />
          <text x="100" y="550" textAnchor="middle" fill="#6E59A5" className="text-sm">Auth User</text>
          
          <circle cx="900" cy="400" r="30" fill="#D946EF" />
          <text x="900" y="450" textAnchor="middle" fill="#6E59A5" className="text-sm">Admin</text>
          
          {/* Guest Use Cases */}
          <ellipse cx="400" cy="150" rx="100" ry="30" fill="#6366F1" />
          <ellipse cx="400" cy="220" rx="100" ry="30" fill="#6366F1" />
          <ellipse cx="400" cy="290" rx="100" ry="30" fill="#6366F1" />
          <ellipse cx="400" cy="360" rx="100" ry="30" fill="#6366F1" />
          <ellipse cx="400" cy="430" rx="100" ry="30" fill="#6366F1" />
          
          <text x="400" y="155" textAnchor="middle" fill="white" className="text-sm">Browse Products</text>
          <text x="400" y="225" textAnchor="middle" fill="white" className="text-sm">View Gallery</text>
          <text x="400" y="295" textAnchor="middle" fill="white" className="text-sm">Read Blog Posts</text>
          <text x="400" y="365" textAnchor="middle" fill="white" className="text-sm">Contact Support</text>
          <text x="400" y="435" textAnchor="middle" fill="white" className="text-sm">Use AI Assistant</text>
          
          {/* Authenticated User Use Cases */}
          <ellipse cx="400" cy="500" rx="100" ry="30" fill="#10B981" />
          <ellipse cx="400" cy="570" rx="100" ry="30" fill="#10B981" />
          <ellipse cx="400" cy="640" rx="100" ry="30" fill="#10B981" />
          
          <text x="400" y="505" textAnchor="middle" fill="white" className="text-sm">Schedule Demo</text>
          <text x="400" y="575" textAnchor="middle" fill="white" className="text-sm">Register for Events</text>
          <text x="400" y="645" textAnchor="middle" fill="white" className="text-sm">Manage Profile</text>
          
          {/* Admin Use Cases */}
          <ellipse cx="700" cy="150" rx="100" ry="30" fill="#F43F5E" />
          <ellipse cx="700" cy="220" rx="100" ry="30" fill="#F43F5E" />
          <ellipse cx="700" cy="290" rx="100" ry="30" fill="#F43F5E" />
          <ellipse cx="700" cy="360" rx="100" ry="30" fill="#F43F5E" />
          <ellipse cx="700" cy="430" rx="100" ry="30" fill="#F43F5E" />
          <ellipse cx="700" cy="500" rx="100" ry="30" fill="#F43F5E" />
          <ellipse cx="700" cy="570" rx="100" ry="30" fill="#F43F5E" />
          
          <text x="700" y="155" textAnchor="middle" fill="white" className="text-sm">Manage Products</text>
          <text x="700" y="225" textAnchor="middle" fill="white" className="text-sm">Manage Gallery</text>
          <text x="700" y="295" textAnchor="middle" fill="white" className="text-sm">Manage Blog Posts</text>
          <text x="700" y="365" textAnchor="middle" fill="white" className="text-sm">Handle Inquiries</text>
          <text x="700" y="435" textAnchor="middle" fill="white" className="text-sm">Manage Events</text>
          <text x="700" y="505" textAnchor="middle" fill="white" className="text-sm">View Analytics</text>
          <text x="700" y="575" textAnchor="middle" fill="white" className="text-sm">User Management</text>
          
          {/* Include/Extend Relationships */}
          <path d="M 500 150 Q 550 185 500 220" fill="none" stroke="#D6BCFA" strokeWidth="2" strokeDasharray="5,5" />
          <text x="570" y="185" fill="#6E59A5" className="text-xs">«include»</text>
          
          <path d="M 500 500 Q 550 535 500 570" fill="none" stroke="#D6BCFA" strokeWidth="2" strokeDasharray="5,5" />
          <text x="570" y="535" fill="#6E59A5" className="text-xs">«extend»</text>
          
          {/* Connections - Guest User */}
          <line x1="130" y1="300" x2="300" y2="150" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="130" y1="300" x2="300" y2="220" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="130" y1="300" x2="300" y2="290" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="130" y1="300" x2="300" y2="360" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="130" y1="300" x2="300" y2="430" stroke="#D6BCFA" strokeWidth="2" />
          
          {/* Connections - Auth User */}
          <line x1="130" y1="500" x2="300" y2="500" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="130" y1="500" x2="300" y2="570" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="130" y1="500" x2="300" y2="640" stroke="#D6BCFA" strokeWidth="2" />
          
          {/* Connections - Admin */}
          <line x1="870" y1="400" x2="800" y2="150" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="870" y1="400" x2="800" y2="220" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="870" y1="400" x2="800" y2="290" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="870" y1="400" x2="800" y2="360" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="870" y1="400" x2="800" y2="430" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="870" y1="400" x2="800" y2="500" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="870" y1="400" x2="800" y2="570" stroke="#D6BCFA" strokeWidth="2" />
        </svg>
      </div>
      <div className="mt-4 text-neutral-600">
        <h3 className="text-xl font-semibold mb-2">Complete System Use Cases</h3>
        <p>This comprehensive use case diagram illustrates all possible interactions within the system:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Guest user capabilities: browsing products, viewing gallery, reading blog posts, contacting support, and using AI assistant</li>
          <li>Authenticated user features: scheduling demos, event registration, and profile management</li>
          <li>Administrative functions: complete content management, inquiry handling, event management, analytics, and user management</li>
          <li>Clear relationship indicators showing dependencies between different use cases</li>
          <li>Distinct actor roles with their specific system interactions</li>
        </ul>
      </div>
    </Card>
  );
};

export default UseCaseDiagram;