import { Card } from "@/components/ui/card";

const ERDiagram = () => {
  return (
    <Card className="p-6">
      <div className="overflow-auto">
        <svg width="800" height="600" className="mx-auto">
          {/* Entities */}
          <rect x="50" y="100" width="200" height="200" rx="5" fill="#8B5CF6" />
          <rect x="300" y="100" width="200" height="200" rx="5" fill="#8B5CF6" />
          <rect x="550" y="100" width="200" height="200" rx="5" fill="#8B5CF6" />
          
          {/* Entity Headers */}
          <rect x="50" y="100" width="200" height="40" rx="5" fill="#6366F1" />
          <rect x="300" y="100" width="200" height="40" rx="5" fill="#6366F1" />
          <rect x="550" y="100" width="200" height="40" rx="5" fill="#6366F1" />
          
          <text x="150" y="125" textAnchor="middle" fill="white" className="text-sm font-medium">Users/Profiles</text>
          <text x="400" y="125" textAnchor="middle" fill="white" className="text-sm font-medium">Services</text>
          <text x="650" y="125" textAnchor="middle" fill="white" className="text-sm font-medium">Content</text>
          
          {/* Attributes */}
          <text x="70" y="160" fill="white" className="text-sm">• id (PK)</text>
          <text x="70" y="190" fill="white" className="text-sm">• role</text>
          <text x="70" y="220" fill="white" className="text-sm">• created_at</text>
          
          <text x="320" y="160" fill="white" className="text-sm">• id (PK)</text>
          <text x="320" y="190" fill="white" className="text-sm">• title</text>
          <text x="320" y="220" fill="white" className="text-sm">• description</text>
          <text x="320" y="250" fill="white" className="text-sm">• features[]</text>
          
          <text x="570" y="160" fill="white" className="text-sm">• id (PK)</text>
          <text x="570" y="190" fill="white" className="text-sm">• type</text>
          <text x="570" y="220" fill="white" className="text-sm">• data</text>
          <text x="570" y="250" fill="white" className="text-sm">• user_id (FK)</text>
          
          {/* Relationships */}
          <line x1="250" y1="200" x2="300" y2="200" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="500" y1="200" x2="550" y2="200" stroke="#D6BCFA" strokeWidth="2" />
          
          {/* Cardinality */}
          <circle cx="255" cy="200" r="5" fill="#D6BCFA" />
          <circle cx="295" cy="200" r="5" fill="#D6BCFA" />
          <circle cx="505" cy="200" r="5" fill="#D6BCFA" />
          <circle cx="545" cy="200" r="5" fill="#D6BCFA" />
        </svg>
      </div>
      <div className="mt-4 text-neutral-600">
        <h3 className="text-xl font-semibold mb-2">Database Structure</h3>
        <p>This Entity-Relationship diagram shows the database structure of our application. It illustrates the relationships between users, services, and content, with primary keys (PK) and foreign keys (FK) clearly marked. The diagram helps visualize how different data entities are connected and organized within the system.</p>
      </div>
    </Card>
  );
};

export default ERDiagram;