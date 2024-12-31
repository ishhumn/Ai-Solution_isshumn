import { Card } from "@/components/ui/card";

const SitemapDiagram = () => {
  return (
    <Card className="p-6">
      <div className="overflow-auto">
        <svg width="800" height="600" className="mx-auto">
          {/* Main Header - Home */}
          <rect x="350" y="20" width="100" height="40" rx="5" fill="#8B5CF6" />
          <text x="400" y="45" textAnchor="middle" fill="white" className="text-sm font-medium">Home</text>
          
          {/* Main Navigation Level */}
          <rect x="50" y="120" width="100" height="40" rx="5" fill="#6366F1" />
          <rect x="200" y="120" width="100" height="40" rx="5" fill="#6366F1" />
          <rect x="350" y="120" width="100" height="40" rx="5" fill="#6366F1" />
          <rect x="500" y="120" width="100" height="40" rx="5" fill="#6366F1" />
          <rect x="650" y="120" width="100" height="40" rx="5" fill="#6366F1" />
          
          <text x="100" y="145" textAnchor="middle" fill="white" className="text-sm">Products</text>
          <text x="250" y="145" textAnchor="middle" fill="white" className="text-sm">Gallery</text>
          <text x="400" y="145" textAnchor="middle" fill="white" className="text-sm">Blog</text>
          <text x="550" y="145" textAnchor="middle" fill="white" className="text-sm">Contact</text>
          <text x="700" y="145" textAnchor="middle" fill="white" className="text-sm">Admin</text>
          
          {/* Connecting Lines Level 1 */}
          <line x1="400" y1="60" x2="100" y2="120" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="400" y1="60" x2="250" y2="120" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="400" y1="60" x2="400" y2="120" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="400" y1="60" x2="550" y2="120" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="400" y1="60" x2="700" y2="120" stroke="#D6BCFA" strokeWidth="2" />
          
          {/* Sub Pages Level */}
          <rect x="50" y="220" width="100" height="40" rx="5" fill="#7E69AB" />
          <rect x="200" y="220" width="100" height="40" rx="5" fill="#7E69AB" />
          <rect x="350" y="220" width="100" height="40" rx="5" fill="#7E69AB" />
          <rect x="500" y="220" width="100" height="40" rx="5" fill="#7E69AB" />
          
          <text x="100" y="245" textAnchor="middle" fill="white" className="text-sm">Product List</text>
          <text x="250" y="245" textAnchor="middle" fill="white" className="text-sm">Image Grid</text>
          <text x="400" y="245" textAnchor="middle" fill="white" className="text-sm">Blog Posts</text>
          <text x="550" y="245" textAnchor="middle" fill="white" className="text-sm">Contact Form</text>
          
          {/* Connecting Lines Level 2 */}
          <line x1="100" y1="160" x2="100" y2="220" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="250" y1="160" x2="250" y2="220" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="400" y1="160" x2="400" y2="220" stroke="#D6BCFA" strokeWidth="2" />
          <line x1="550" y1="160" x2="550" y2="220" stroke="#D6BCFA" strokeWidth="2" />
        </svg>
      </div>
      <div className="mt-4 text-neutral-600">
        <h3 className="text-xl font-semibold mb-2">Website Structure</h3>
        <p>This sitemap provides a comprehensive overview of our website's architecture, showing the hierarchical relationship between different pages and sections. The color-coded structure helps visualize the main navigation paths and content organization.</p>
      </div>
    </Card>
  );
};

export default SitemapDiagram;