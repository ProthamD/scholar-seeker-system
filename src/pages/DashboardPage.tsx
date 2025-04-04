
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScholarNavbar from "@/components/ScholarNavbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  BookmarkCheck, 
  Calendar, 
  Clock, 
  ClipboardCheck, 
  ExternalLink, 
  Search, 
  Star, 
  Trash, 
  XCircle 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { toast } from "sonner";

// Mock data for demonstration
const savedScholarships = [
  {
    id: 1,
    name: "National Merit Scholarship",
    provider: "National Merit Scholarship Corporation",
    amount: "₹50,000",
    deadline: "October 15, 2025",
    eligibility: "High academic achievement, PSAT/NMSQT test scores",
    category: "Merit-based",
    saved: true
  },
  {
    id: 3,
    name: "First Generation Student Grant",
    provider: "Education Access Foundation",
    amount: "₹45,000",
    deadline: "January 15, 2026",
    eligibility: "First-generation college students, demonstrated financial need",
    category: "Need-based",
    saved: true
  }
];

const applicationStatuses = {
  1: "Saved",
  3: "Applied",
  4: "Under Review",
  7: "Documents Submitted",
  8: "Interview Scheduled"
};

const upcomingDeadlines = [
  {
    id: 1,
    name: "National Merit Scholarship",
    deadline: "October 15, 2025",
    daysLeft: 45
  },
  {
    id: 3,
    name: "First Generation Student Grant",
    deadline: "January 15, 2026",
    daysLeft: 120
  }
];

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if not logged in
  if (!user) {
    navigate("/auth");
    return null;
  }
  
  const [activeTab, setActiveTab] = useState("overview");
  
  const [savedList, setSavedList] = useState(savedScholarships);
  
  const removeScholarship = (id: number) => {
    setSavedList(savedList.filter(item => item.id !== id));
    toast.success("Scholarship removed from saved list");
  };
  
  const updateApplicationStatus = (id: number, status: string) => {
    // In a real app, this would update the database
    toast.success(`Application status updated to: ${status}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScholarNavbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
            <p className="text-muted-foreground">
              Track your scholarships, applications, and deadlines
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Saved Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{savedList.length}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a href="#saved">View All</a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{Object.keys(applicationStatuses).length}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a href="#applications">Manage Applications</a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{upcomingDeadlines.length}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a href="#deadlines">View Calendar</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome back, {user.name}!</CardTitle>
                  <CardDescription>
                    Here's an overview of your scholarship journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Upcoming Deadlines
                    </h3>
                    <div className="space-y-2">
                      {upcomingDeadlines.map((item) => (
                        <div 
                          key={item.id} 
                          className="flex justify-between items-center border rounded-lg p-3"
                        >
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Due: {item.deadline}</p>
                          </div>
                          <Badge variant={item.daysLeft < 60 ? "destructive" : "outline"}>
                            {item.daysLeft} days left
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <ClipboardCheck className="h-4 w-4 mr-2" />
                      Application Status
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Scholarship</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(applicationStatuses).map(([id, status]) => (
                          <TableRow key={id}>
                            <TableCell className="font-medium">
                              {savedScholarships.find(s => s.id === Number(id))?.name}
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">{status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" asChild>
                                <a href={`/scholarship/${id}`}>
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="justify-between border-t pt-6">
                  <Button variant="outline" asChild>
                    <a href="/search">
                      <Search className="h-4 w-4 mr-2" />
                      Find More Scholarships
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="/dashboard/calendar">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Calendar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scholarship Applications</CardTitle>
                  <CardDescription>
                    Track and manage your active scholarship applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Scholarship</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(applicationStatuses).map(([id, status]) => {
                        const scholarship = savedScholarships.find(s => s.id === Number(id));
                        return (
                          <TableRow key={id}>
                            <TableCell className="font-medium">
                              {scholarship?.name}
                            </TableCell>
                            <TableCell>{scholarship?.amount}</TableCell>
                            <TableCell>{scholarship?.deadline}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm" asChild>
                                  <a href={`/scholarship/${id}`}>View</a>
                                </Button>
                                <Button 
                                  variant="destructive" 
                                  size="sm"
                                  onClick={() => {
                                    // In a real app, we'd remove this application 
                                    toast.success("Application removed");
                                  }}
                                >
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="saved" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Scholarships</CardTitle>
                  <CardDescription>
                    Scholarships you've saved for future reference
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedList.map((scholarship) => (
                      <Card key={scholarship.id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                              <CardDescription>{scholarship.provider}</CardDescription>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => removeScholarship(scholarship.id)}
                            >
                              <Trash className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex flex-col space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Amount:</span>
                              <span className="font-medium">{scholarship.amount}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Deadline:</span>
                              <span className="font-medium">{scholarship.deadline}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Category:</span>
                              <span className="font-medium">{scholarship.category}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-4">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            asChild
                          >
                            <a href={`/scholarship/${scholarship.id}`}>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Details
                            </a>
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => {
                              updateApplicationStatus(scholarship.id, "Applied");
                              toast.success("Marked as applied!");
                            }}
                          >
                            <BookmarkCheck className="h-4 w-4 mr-2" />
                            Apply
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-center border-t pt-6">
                  <Button asChild>
                    <a href="/search">
                      <Search className="h-4 w-4 mr-2" />
                      Find More Scholarships
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
