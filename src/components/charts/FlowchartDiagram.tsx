import { Card } from "@/components/ui/card";

const FlowchartDiagram = () => {
  return (
    <Card className="p-6">
      <div className="overflow-auto">
        <svg width="1000" height="1200" className="mx-auto">
          {/* Start Node */}
          <circle cx="500" cy="50" r="30" fill="#8B5CF6" />
          <text x="500" y="55" textAnchor="middle" fill="white" className="text-sm">Start</text>
          
          {/* Initial Navigation */}
          <rect x="425" y="120" width="150" height="50" rx="5" fill="#6366F1" />
          <text x="500" y="150" textAnchor="middle" fill="white" className="text-sm">Visit Website</text>
          
          {/* Main Navigation Options */}
          <rect x="200" y="220" width="150" height="50" rx="5" fill="#6366F1" />
          <rect x="400" y="220" width="150" height="50" rx="5" fill="#6366F1" />
          <rect x="600" y="220" width="150" height="50" rx="5" fill="#6366F1" />
          
          <text x="275" y="250" textAnchor="middle" fill="white" className="text-sm">Products/Services</text>
          <text x="475" y="250" textAnchor="middle" fill="white" className="text-sm">Blog/Gallery</text>
          <text x="675" y="250" textAnchor="middle" fill="white" className="text-sm">Contact/Events</text>
          
          {/* Products & Services Flow */}
          <rect x="150" y="320" width="130" height="40" rx="5" fill="#0EA5E9" />
          <rect x="300" y="320" width="130" height="40" rx="5" fill="#0EA5E9" />
          
          <text x="215" y="345" textAnchor="middle" fill="white" className="text-sm">Browse Products</text>
          <text x="365" y="345" textAnchor="middle" fill="white" className="text-sm">View Services</text>
          
          {/* Blog & Gallery Flow */}
          <rect x="450" y="320" width="130" height="40" rx="5" fill="#0EA5E9" />
          <rect x="600" y="320" width="130" height="40" rx="5" fill="#0EA5E9" />
          
          <text x="515" y="345" textAnchor="middle" fill="white" className="text-sm">Read Blog Posts</text>
          <text x="665" y="345" textAnchor="middle" fill="white" className="text-sm">Browse Gallery</text>
          
          {/* Contact & Events Flow */}
          <rect x="750" y="320" width="130" height="40" rx="5" fill="#0EA5E9" />
          <rect x="750" y="380" width="130" height="40" rx="5" fill="#0EA5E9" />
          
          <text x="815" y="345" textAnchor="middle" fill="white" className="text-sm">Contact Form</text>
          <text x="815" y="405" textAnchor="middle" fill="white" className="text-sm">Event Registration</text>
          
          {/* AI Assistant Integration */}
          <rect x="50" y="400" width="130" height="40" rx="5" fill="#D946EF" />
          <text x="115" y="425" textAnchor="middle" fill="white" className="text-sm">AI Assistant Chat</text>
          
          {/* Authentication Decision */}
          <path d="M 475 450 L 525 500 L 475 550 L 425 500 Z" fill="#7E69AB" />
          <text x="475" y="510" textAnchor="middle" fill="white" className="text-sm">Login Required?</text>
          
          {/* User Authentication Flow */}
          <rect x="325" y="575" width="130" height="40" rx="5" fill="#10B981" />
          <rect x="500" y="575" width="130" height="40" rx="5" fill="#10B981" />
          
          <text x="390" y="600" textAnchor="middle" fill="white" className="text-sm">Login</text>
          <text x="565" y="600" textAnchor="middle" fill="white" className="text-sm">Register</text>
          
          {/* Admin Features */}
          <rect x="675" y="575" width="130" height="40" rx="5" fill="#F43F5E" />
          <text x="740" y="600" textAnchor="middle" fill="white" className="text-sm">Admin Dashboard</text>
          
          {/* User Actions After Auth */}
          <rect x="325" y="650" width="130" height="40" rx="5" fill="#10B981" />
          <rect x="500" y="650" width="130" height="40" rx="5" fill="#10B981" />
          
          <text x="390" y="675" textAnchor="middle" fill="white" className="text-sm">Schedule Demo</text>
          <text x="565" y="675" textAnchor="middle" fill="white" className="text-sm">Event Registration</text>
          
          {/* Admin Actions */}
          <rect x="675" y="650" width="130" height="40" rx="5" fill="#F43F5E" />
          <rect x="675" y="725" width="130" height="40" rx="5" fill="#F43F5E" />
          <rect x="675" y="800" width="130" height="40" rx="5" fill="#F43F5E" />
          
          <text x="740" y="675" textAnchor="middle" fill="white" className="text-sm">Manage Content</text>
          <text x="740" y="750" textAnchor="middle" fill="white" className="text-sm">Handle Inquiries</text>
          <text x="740" y="825" textAnchor="middle" fill="white" className="text-sm">Event Management</text>
          
          {/* End States */}
          <circle cx="390" cy="750" r="25" fill="#F43F5E" />
          <circle cx="565" cy="750" r="25" fill="#F43F5E" />
          <circle cx="740" cy="900" r="25" fill="#F43F5E" />
          
          <text x="390" y="755" textAnchor="middle" fill="white" className="text-sm">End</text>
          <text x="565" y="755" textAnchor="middle" fill="white" className="text-sm">End</text>
          <text x="740" y="905" textAnchor="middle" fill="white" className="text-sm">End</text>
          
          {/* Connecting Lines */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#D6BCFA" />
            </marker>
          </defs>
          
          {/* Main Flow Connections */}
          <line x1="500" y1="80" x2="500" y2="120" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="500" y1="170" x2="500" y2="220" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Navigation Split */}
          <line x1="500" y1="170" x2="275" y2="220" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="500" y1="170" x2="675" y2="220" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Feature Connections */}
          <line x1="275" y1="270" x2="215" y2="320" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="275" y1="270" x2="365" y2="320" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          <line x1="475" y1="270" x2="515" y2="320" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="475" y1="270" x2="665" y2="320" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          <line x1="675" y1="270" x2="815" y2="320" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="815" y1="360" x2="815" y2="380" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* AI Assistant Connection */}
          <line x1="215" y1="360" x2="115" y2="400" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Auth Flow */}
          <line x1="475" y1="550" x2="390" y2="575" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="475" y1="550" x2="565" y2="575" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="475" y1="550" x2="740" y2="575" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Post-Auth Actions */}
          <line x1="390" y1="615" x2="390" y2="650" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="565" y1="615" x2="565" y2="650" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="740" y1="615" x2="740" y2="650" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Admin Flow */}
          <line x1="740" y1="690" x2="740" y2="725" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="740" y1="765" x2="740" y2="800" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="740" y1="840" x2="740" y2="875" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* End State Connections */}
          <line x1="390" y1="690" x2="390" y2="725" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="565" y1="690" x2="565" y2="725" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
      </div>
      <div className="mt-4 text-neutral-600">
        <h3 className="text-xl font-semibold mb-2">Complete System Flow</h3>
        <p>This comprehensive flowchart illustrates the complete user journey through the system:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Main navigation paths including Products, Blog, Gallery, Events, and Contact</li>
          <li>AI Assistant integration for user support</li>
          <li>Authentication flows for both users and administrators</li>
          <li>Event registration and demo scheduling processes</li>
          <li>Administrative functions including content management</li>
          <li>Clear end states for all possible user journeys</li>
        </ul>
      </div>
    </Card>
  );
};

export default FlowchartDiagram;