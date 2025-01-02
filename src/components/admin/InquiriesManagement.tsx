import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { getInquiries, setInquiries, type InquiryStatus } from "@/utils/localStorage";

const InquiriesManagement = () => {
  const { toast } = useToast();
  const inquiries = getInquiries();
  const demoRequests = JSON.parse(localStorage.getItem('demoRequests') || '[]');

  const updateInquiryStatus = (id: string, status: InquiryStatus) => {
    const updated = inquiries.map(inquiry =>
      inquiry.id === id ? { ...inquiry, status } : inquiry
    );
    setInquiries(updated);
    toast({
      title: "Status Updated",
      description: "The inquiry status has been updated successfully.",
    });
  };

  return (
    <div className="glass-card rounded-lg p-6">
      <Tabs defaultValue="inquiries">
        <TabsList className="mb-4">
          <TabsTrigger value="inquiries">General Inquiries</TabsTrigger>
          <TabsTrigger value="demos">Demo Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="inquiries">
          <h2 className="text-xl font-semibold mb-4">General Inquiries</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.map((inquiry) => (
                  <TableRow key={inquiry.id}>
                    <TableCell>{inquiry.date}</TableCell>
                    <TableCell>{inquiry.name}</TableCell>
                    <TableCell>{inquiry.email}</TableCell>
                    <TableCell>{inquiry.message}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        inquiry.status === 'New' ? 'bg-green-500' :
                        inquiry.status === 'In Progress' ? 'bg-blue-500' :
                        inquiry.status === 'Pending' ? 'bg-yellow-500' :
                        'bg-purple-500'
                      } text-white`}>
                        {inquiry.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={inquiry.status}
                        onValueChange={(value: InquiryStatus) => updateInquiryStatus(inquiry.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Update status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="In Progress">In Progress</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Done">Done</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="demos">
          <h2 className="text-xl font-semibold mb-4">Demo Requests</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Preferred Date</TableHead>
                  <TableHead>Preferred Time</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demoRequests.map((request: any) => (
                  <TableRow key={request.id}>
                    <TableCell>{new Date(request.submittedAt).toLocaleDateString()}</TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{request.email}</TableCell>
                    <TableCell>{request.company}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>{request.time}</TableCell>
                    <TableCell>{request.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InquiriesManagement;