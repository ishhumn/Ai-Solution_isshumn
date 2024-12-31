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
              <img 
                src="/sitemap.png" 
                alt="Website Sitemap" 
                className="w-full max-w-4xl mx-auto"
              />
              <div className="mt-4 text-neutral-600">
                <h3 className="text-xl font-semibold mb-2">Website Structure</h3>
                <p>This sitemap illustrates the hierarchical structure of our website, showing the relationships between different pages and sections.</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="flowchart">
            <Card className="p-6">
              <img 
                src="/flowchart.png" 
                alt="System Flowchart" 
                className="w-full max-w-4xl mx-auto"
              />
              <div className="mt-4 text-neutral-600">
                <h3 className="text-xl font-semibold mb-2">System Flow</h3>
                <p>The flowchart demonstrates the step-by-step process flow of key features in our system, including user interactions and system responses.</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="usecase">
            <Card className="p-6">
              <img 
                src="/usecase.png" 
                alt="Use Case Diagram" 
                className="w-full max-w-4xl mx-auto"
              />
              <div className="mt-4 text-neutral-600">
                <h3 className="text-xl font-semibold mb-2">User Interactions</h3>
                <p>This use case diagram shows the various ways users and administrators interact with the system, highlighting key functionality and user roles.</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="er">
            <Card className="p-6">
              <img 
                src="/er-diagram.png" 
                alt="ER Diagram" 
                className="w-full max-w-4xl mx-auto"
              />
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