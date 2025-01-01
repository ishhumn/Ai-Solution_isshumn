import { Card } from "@/components/ui/card";

const ERDiagram = () => {
  return (
    <Card className="p-6">
      <div className="overflow-auto">
        <svg width="1000" height="1200" className="mx-auto">
          {/* User/Profile Entity */}
          <rect x="50" y="100" width="200" height="320" rx="5" fill="#8B5CF6" />
          <rect x="50" y="100" width="200" height="40" rx="5" fill="#6366F1" />
          <text x="150" y="125" textAnchor="middle" fill="white" className="text-sm font-medium">Users/Profiles</text>
          <text x="70" y="160" fill="white" className="text-sm">• id (PK)</text>
          <text x="70" y="190" fill="white" className="text-sm">• email</text>
          <text x="70" y="220" fill="white" className="text-sm">• role</text>
          <text x="70" y="250" fill="white" className="text-sm">• first_name</text>
          <text x="70" y="280" fill="white" className="text-sm">• last_name</text>
          <text x="70" y="310" fill="white" className="text-sm">• avatar_url</text>
          <text x="70" y="340" fill="white" className="text-sm">• created_at</text>
          <text x="70" y="370" fill="white" className="text-sm">• updated_at</text>
          
          {/* Services Entity */}
          <rect x="300" y="100" width="200" height="320" rx="5" fill="#8B5CF6" />
          <rect x="300" y="100" width="200" height="40" rx="5" fill="#6366F1" />
          <text x="400" y="125" textAnchor="middle" fill="white" className="text-sm font-medium">Services</text>
          <text x="320" y="160" fill="white" className="text-sm">• id (PK)</text>
          <text x="320" y="190" fill="white" className="text-sm">• title</text>
          <text x="320" y="220" fill="white" className="text-sm">• description</text>
          <text x="320" y="250" fill="white" className="text-sm">• icon</text>
          <text x="320" y="280" fill="white" className="text-sm">• features[]</text>
          <text x="320" y="310" fill="white" className="text-sm">• created_at</text>
          <text x="320" y="340" fill="white" className="text-sm">• updated_at</text>
          
          {/* Blog Posts Entity */}
          <rect x="550" y="100" width="200" height="320" rx="5" fill="#8B5CF6" />
          <rect x="550" y="100" width="200" height="40" rx="5" fill="#6366F1" />
          <text x="650" y="125" textAnchor="middle" fill="white" className="text-sm font-medium">Blog Posts</text>
          <text x="570" y="160" fill="white" className="text-sm">• id (PK)</text>
          <text x="570" y="190" fill="white" className="text-sm">• title</text>
          <text x="570" y="220" fill="white" className="text-sm">• content</text>
          <text x="570" y="250" fill="white" className="text-sm">• image_url</text>
          <text x="570" y="280" fill="white" className="text-sm">• author_id (FK)</text>
          <text x="570" y="310" fill="white" className="text-sm">• created_at</text>
          <text x="570" y="340" fill="white" className="text-sm">• updated_at</text>
          
          {/* Gallery Entity */}
          <rect x="50" y="500" width="200" height="320" rx="5" fill="#8B5CF6" />
          <rect x="50" y="500" width="200" height="40" rx="5" fill="#6366F1" />
          <text x="150" y="525" textAnchor="middle" fill="white" className="text-sm font-medium">Gallery Items</text>
          <text x="70" y="560" fill="white" className="text-sm">• id (PK)</text>
          <text x="70" y="590" fill="white" className="text-sm">• title</text>
          <text x="70" y="620" fill="white" className="text-sm">• description</text>
          <text x="70" y="650" fill="white" className="text-sm">• image_url</text>
          <text x="70" y="680" fill="white" className="text-sm">• category</text>
          <text x="70" y="710" fill="white" className="text-sm">• created_at</text>
          <text x="70" y="740" fill="white" className="text-sm">• updated_at</text>
          
          {/* Events Entity */}
          <rect x="300" y="500" width="200" height="320" rx="5" fill="#8B5CF6" />
          <rect x="300" y="500" width="200" height="40" rx="5" fill="#6366F1" />
          <text x="400" y="525" textAnchor="middle" fill="white" className="text-sm font-medium">Events</text>
          <text x="320" y="560" fill="white" className="text-sm">• id (PK)</text>
          <text x="320" y="590" fill="white" className="text-sm">• title</text>
          <text x="320" y="620" fill="white" className="text-sm">• description</text>
          <text x="320" y="650" fill="white" className="text-sm">• date</text>
          <text x="320" y="680" fill="white" className="text-sm">• location</text>
          <text x="320" y="710" fill="white" className="text-sm">• created_at</text>
          <text x="320" y="740" fill="white" className="text-sm">• updated_at</text>
          
          {/* Event Registrations Entity */}
          <rect x="550" y="500" width="200" height="320" rx="5" fill="#8B5CF6" />
          <rect x="550" y="500" width="200" height="40" rx="5" fill="#6366F1" />
          <text x="650" y="525" textAnchor="middle" fill="white" className="text-sm font-medium">Event Registrations</text>
          <text x="570" y="560" fill="white" className="text-sm">• id (PK)</text>
          <text x="570" y="590" fill="white" className="text-sm">• event_id (FK)</text>
          <text x="570" y="620" fill="white" className="text-sm">• user_id (FK)</text>
          <text x="570" y="650" fill="white" className="text-sm">• status</text>
          <text x="570" y="680" fill="white" className="text-sm">• tickets</text>
          <text x="570" y="710" fill="white" className="text-sm">• created_at</text>
          <text x="570" y="740" fill="white" className="text-sm">• updated_at</text>
          
          {/* Contact Inquiries Entity */}
          <rect x="800" y="500" width="200" height="320" rx="5" fill="#8B5CF6" />
          <rect x="800" y="500" width="200" height="40" rx="5" fill="#6366F1" />
          <text x="900" y="525" textAnchor="middle" fill="white" className="text-sm font-medium">Contact Inquiries</text>
          <text x="820" y="560" fill="white" className="text-sm">• id (PK)</text>
          <text x="820" y="590" fill="white" className="text-sm">• name</text>
          <text x="820" y="620" fill="white" className="text-sm">• email</text>
          <text x="820" y="650" fill="white" className="text-sm">• message</text>
          <text x="820" y="680" fill="white" className="text-sm">• status</text>
          <text x="820" y="710" fill="white" className="text-sm">• created_at</text>
          <text x="820" y="740" fill="white" className="text-sm">• updated_at</text>
          
          {/* Demo Requests Entity */}
          <rect x="300" y="900" width="200" height="250" rx="5" fill="#8B5CF6" />
          <rect x="300" y="900" width="200" height="40" rx="5" fill="#6366F1" />
          <text x="400" y="925" textAnchor="middle" fill="white" className="text-sm font-medium">Demo Requests</text>
          <text x="320" y="960" fill="white" className="text-sm">• id (PK)</text>
          <text x="320" y="990" fill="white" className="text-sm">• user_id (FK)</text>
          <text x="320" y="1020" fill="white" className="text-sm">• preferred_date</text>
          <text x="320" y="1050" fill="white" className="text-sm">• notes</text>
          <text x="320" y="1080" fill="white" className="text-sm">• status</text>
          
          {/* Relationships */}
          <line x1="250" y1="280" x2="550" y2="280" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="250" y1="280" x2="300" y2="990" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="500" y1="650" x2="550" y2="620" stroke="#D6BCFA" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Cardinality Markers */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#D6BCFA" />
            </marker>
          </defs>
        </svg>
      </div>
      <div className="mt-4 text-neutral-600">
        <h3 className="text-xl font-semibold mb-2">Complete Database Structure</h3>
        <p>This detailed ER diagram shows the complete database structure with all entities and their relationships:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Users/Profiles: Core user data and authentication information</li>
          <li>Services: Product and service offerings with features</li>
          <li>Blog Posts: Content management with author relationships</li>
          <li>Gallery Items: Media management with categorization</li>
          <li>Events: Event management with registration tracking</li>
          <li>Event Registrations: User event participation records</li>
          <li>Contact Inquiries: User support and contact management</li>
          <li>Demo Requests: Demo scheduling and management</li>
          <li>All entities include audit fields (created_at, updated_at)</li>
          <li>Proper foreign key relationships maintain data integrity</li>
        </ul>
      </div>
    </Card>
  );
};

export default ERDiagram;