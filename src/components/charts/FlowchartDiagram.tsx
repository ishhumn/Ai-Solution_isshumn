import { Card } from "@/components/ui/card";

const FlowchartDiagram = () => {
  return (
    <Card className="p-6">
      <div className="overflow-auto">
        <svg width="800" height="1000" className="mx-auto">
          {/* Start Node */}
          <circle cx="400" cy="50" r="30" fill="#8B5CF6" />
          <text x="400" y="55" textAnchor="middle" fill="white" className="text-sm">Start</text>
          
          {/* Process Nodes - Initial Flow */}
          <rect x="325" y="120" width="150" height="50" rx="5" fill="#6366F1" />
          <rect x="325" y="220" width="150" height="50" rx="5" fill="#6366F1" />
          <rect x="325" y="320" width="150" height="50" rx="5" fill="#6366F1" />
          
          <text x="400" y="150" textAnchor="middle" fill="white" className="text-sm">Visit Website</text>
          <text x="400" y="250" textAnchor="middle" fill="white" className="text-sm">Browse Content</text>
          <text x="400" y="350" textAnchor="middle" fill="white" className="text-sm">User Authentication</text>
          
          {/* Decision Diamond - Auth Status */}
          <path d="M 400 400 L 450 450 L 400 500 L 350 450 Z" fill="#7E69AB" />
          <text x="400" y="460" textAnchor="middle" fill="white" className="text-sm">Authenticated?</text>
          
          {/* Guest Flow */}
          <rect x="150" y="425" width="150" height="50" rx="5" fill="#0EA5E9" />
          <text x="225" y="455" textAnchor="middle" fill="white" className="text-sm">Limited Access</text>
          
          {/* Auth Flow Decision - Admin Check */}
          <path d="M 400 525 L 450 575 L 400 625 L 350 575 Z" fill="#7E69AB" />
          <text x="400" y="585" textAnchor="middle" fill="white" className="text-sm">Admin Role?</text>
          
          {/* Admin Features */}
          <rect x="500" y="600" width="150" height="50" rx="5" fill="#D946EF" />
          <rect x="500" y="675" width="150" height="50" rx="5" fill="#D946EF" />
          <rect x="500" y="750" width="150" height="50" rx="5" fill="#D946EF" />
          
          <text x="575" y="630" textAnchor="middle" fill="white" className="text-sm">Content Management</text>
          <text x="575" y="705" textAnchor="middle" fill="white" className="text-sm">User Management</text>
          <text x="575" y="780" textAnchor="middle" fill="white" className="text-sm">Analytics Dashboard</text>
          
          {/* User Features */}
          <rect x="150" y="600" width="150" height="50" rx="5" fill="#10B981" />
          <rect x="150" y="675" width="150" height="50" rx="5" fill="#10B981" />
          <rect x="150" y="750" width="150" height="50" rx="5" fill="#10B981" />
          
          <text x="225" y="630" textAnchor="middle" fill="white" className="text-sm">Full Access</text>
          <text x="225" y="705" textAnchor="middle" fill="white" className="text-sm">Profile Management</text>
          <text x="225" y="780" textAnchor="middle" fill="white" className="text-sm">Interaction Features</text>
          
          {/* End States */}
          <circle cx="225" y="850" r="30" fill="#F43F5E" />
          <circle cx="575" y="850" r="30" fill="#F43F5E" />
          <text x="225" y="855" textAnchor="middle" fill="white" className="text-sm">End</text>
          <text x="575" y="855" textAnchor="middle" fill="white" className="text-sm">End</text>
          
          {/* Connecting Arrows */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#D6BCFA" />
            </marker>
          </defs>
          
          {/* Main Flow Connections */}
          <line x1="400" y1="80" x2="400" y2="120" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="170" x2="400" y2="220" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="270" x2="400" y2="320" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="370" x2="400" y2="400" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Auth Decision Flows */}
          <line x1="350" y1="450" x2="300" y2="450" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="500" x2="400" y2="525" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Admin/User Split */}
          <line x1="350" y1="575" x2="225" y2="600" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="450" y1="575" x2="575" y2="600" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Feature Flows */}
          <line x1="225" y1="650" x2="225" y2="675" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="225" y1="725" x2="225" y2="750" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="225" y1="800" x2="225" y2="820" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          <line x1="575" y1="650" x2="575" y2="675" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="575" y1="725" x2="575" y2="750" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="575" y1="800" x2="575" y2="820" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
      </div>
      <div className="mt-4 text-neutral-600">
        <h3 className="text-xl font-semibold mb-2">Complete User Journey Flow</h3>
        <p>This comprehensive flowchart illustrates the complete user journey through the system:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Initial entry point and content browsing</li>
          <li>Authentication decision point with guest access option</li>
          <li>Role-based access control (Admin vs Regular User)</li>
          <li>Detailed admin features including content and user management</li>
          <li>User-specific features and interactions</li>
          <li>Clear end states for all possible paths</li>
          <li>Visual distinction between different types of actions</li>
        </ul>
      </div>
    </Card>
  );
};

export default FlowchartDiagram;