import { Card } from "@/components/ui/card";

const FlowchartDiagram = () => {
  return (
    <Card className="p-6">
      <div className="overflow-auto">
        <svg width="800" height="600" className="mx-auto">
          {/* Start Node */}
          <circle cx="400" cy="50" r="30" fill="#8B5CF6" />
          <text x="400" y="55" textAnchor="middle" fill="white" className="text-sm">Start</text>
          
          {/* Process Nodes */}
          <rect x="325" y="120" width="150" height="50" rx="5" fill="#6366F1" />
          <rect x="325" y="220" width="150" height="50" rx="5" fill="#6366F1" />
          <rect x="325" y="320" width="150" height="50" rx="5" fill="#6366F1" />
          <rect x="325" y="420" width="150" height="50" rx="5" fill="#6366F1" />
          
          <text x="400" y="150" textAnchor="middle" fill="white" className="text-sm">Visit Website</text>
          <text x="400" y="250" textAnchor="middle" fill="white" className="text-sm">Browse Products/Gallery</text>
          <text x="400" y="350" textAnchor="middle" fill="white" className="text-sm">User Authentication</text>
          <text x="400" y="450" textAnchor="middle" fill="white" className="text-sm">Access Features</text>
          
          {/* Decision Diamond */}
          <path d="M 400 500 L 450 550 L 400 600 L 350 550 Z" fill="#7E69AB" />
          <text x="400" y="560" textAnchor="middle" fill="white" className="text-sm">Admin?</text>
          
          {/* Admin Path */}
          <rect x="500" y="525" width="150" height="50" rx="5" fill="#D946EF" />
          <text x="575" y="555" textAnchor="middle" fill="white" className="text-sm">Admin Dashboard</text>
          
          {/* User Path */}
          <rect x="150" y="525" width="150" height="50" rx="5" fill="#0EA5E9" />
          <text x="225" y="555" textAnchor="middle" fill="white" className="text-sm">User Dashboard</text>
          
          {/* Connecting Arrows */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#D6BCFA" />
            </marker>
          </defs>
          
          <line x1="400" y1="80" x2="400" y2="120" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="170" x2="400" y2="220" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="270" x2="400" y2="320" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="370" x2="400" y2="420" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="470" x2="400" y2="500" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="450" y1="550" x2="500" y2="550" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="350" y1="550" x2="300" y2="550" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
      </div>
      <div className="mt-4 text-neutral-600">
        <h3 className="text-xl font-semibold mb-2">User Journey Flow</h3>
        <p>This flowchart illustrates the user journey through our website, from initial visit to authentication and feature access. The diagram shows different paths for admin and regular users, with clear decision points and process flows.</p>
      </div>
    </Card>
  );
};

export default FlowchartDiagram;