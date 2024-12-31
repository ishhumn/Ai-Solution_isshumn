import { ChartBar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SitemapDiagram from "@/components/charts/SitemapDiagram";
import FlowchartDiagram from "@/components/charts/FlowchartDiagram";
import UseCaseDiagram from "@/components/charts/UseCaseDiagram";
import ERDiagram from "@/components/charts/ERDiagram";

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
            <SitemapDiagram />
          </TabsContent>

          <TabsContent value="flowchart">
            <FlowchartDiagram />
          </TabsContent>

          <TabsContent value="usecase">
            <UseCaseDiagram />
          </TabsContent>

          <TabsContent value="er">
            <ERDiagram />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Charts;