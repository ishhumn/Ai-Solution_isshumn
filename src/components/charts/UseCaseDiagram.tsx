import { Card } from "@/components/ui/card";

const UseCaseDiagram = () => {
  return (
    <Card className="p-6">
      <div className="overflow-auto">
        <svg width="800" height="600" className="mx-auto">
          {/* System Boundary */}
          <rect x="200" y="50" width="400" height="500" rx="10" fill="none" stroke="#D6BCFA" strokeWidth="2" strokeDasharray="5,5" />
          <text x="400" y="80" textAnchor="middle" fill="#6E59A5" className="text-lg font-semibold">System</text>
          
          {/* Actors */}
          <circle cx="100" cy="200" r="30" fill="#8B5CF6" />
          <text x="100" y="240" textAnchor="middle" fill="#6E59A5" className="text-sm">User</text>
          
          <circle cx="700" cy="200" r="30" fill="#D946EF" />
          <text x="700" y="240" textAnchor="middle" fill="#6E59A5" className="text-sm">Admin</text>
          
          {/* Use Cases */}
          <ellipse cx="400" cy="150" rx="100" ry="30" fill="#6366F1" />
          <ellipse cx="400" cy="250" rx="100" ry="30" fill="#6366F1" />
          <ellipse cx="400" cy="350" rx="100" ry="30" fill="#6366F1" />
          <ellipse cx="400" cy="450" rx="100" ry="30" fill="#6366F1" />
          
          <text x="400" y="155" textAnchor="middle" fill="white" className="text-sm">View Products</text>
          <text x="400" y="255" textAnchor="middle" fill="white" className="text-sm">Browse Gallery</text>
          <text x="400" y="355" textAnchor="middle" fill="white" className="text-sm">Contact Support</text>
          <text x="400" y="455" textAnchor="middle" fill="white" className="text-sm">Manage Content</text>
          
          {/* Connections */}
          <line x1="130" y1="200" x2="300" y2="150" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="130" y1="200" x2="300" y2="250" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="130" y1="200" x2="300" y2="350" stroke="#D6BCFA" strokeWidth="2" />
          
          <line x1="670" y1="200" x2="500" y2="150" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="670" y1="200" x2="500" y2="250" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="670" y1="200" x2="500" y2="350" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="670" y1="200" x2="500" y2="450" stroke="#D6BCFA" strokeWidth="2" />
        </svg>
      </div>
      <div className="mt-4 text-neutral-600">
        <h3 className="text-xl font-semibold mb-2">System Interactions</h3>
        <p>This use case diagram demonstrates how different users interact with our system. It shows the relationship between users, administrators, and various system features, highlighting the different levels of access and functionality available to each role.</p>
      </div>
    </Card>
  );
};

export default UseCaseDiagram;