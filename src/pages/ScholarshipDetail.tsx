
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarIcon, DollarSign, Users, ExternalLink, BookOpen, Share2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import ScholarNavbar from "@/components/ScholarNavbar";
import Footer from "@/components/Footer";
import { Scholarship } from "@/components/ScholarshipList";

// Mock scholarship data - would be replaced with API calls
const mockScholarships: Scholarship[] = [
  {
    id: 1,
    name: "National Merit Scholarship",
    provider: "National Merit Scholarship Corporation",
    amount: "₹50,000",
    deadline: "October 15, 2025",
    eligibility: "High academic achievement, PSAT/NMSQT test scores",
    category: "Merit-based",
    description: "The National Merit Scholarship Program is an academic competition for recognition and scholarships that began in 1955. High school students enter the National Merit Program by taking the Preliminary SAT/National Merit Scholarship Qualifying Test (PSAT/NMSQT), which serves as an initial screen of approximately 1.5 million entrants each year, and by meeting published program entry and participation requirements.",
    link: "#"
  },
  {
    id: 2,
    name: "Future Engineers Scholarship",
    provider: "Engineering Foundation",
    amount: "₹75,000",
    deadline: "December 1, 2025",
    eligibility: "Engineering majors, minimum 3.5 GPA",
    category: "Field-specific",
    description: "The Future Engineers Scholarship is designed to support outstanding students pursuing degrees in engineering fields. Recipients are selected based on academic achievement, leadership potential, and commitment to making a positive impact in the engineering profession. This scholarship aims to address the growing need for qualified engineers in various industries.",
    link: "#"
  }
];

const ScholarshipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [scholarship, setScholarship] = useState<Scholarship | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScholarship = async () => {
      setLoading(true);
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const foundScholarship = mockScholarships.find(s => s.id === parseInt(id || "0"));
        if (foundScholarship) {
          setScholarship(foundScholarship);
        }
      } catch (error) {
        console.error("Error fetching scholarship details:", error);
        toast.error("Failed to load scholarship details");
      } finally {
        setLoading(false);
      }
    };

    fetchScholarship();
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${scholarship?.name} Scholarship`,
        text: `Check out this scholarship: ${scholarship?.name} by ${scholarship?.provider}`,
        url: window.location.href,
      }).catch(err => {
        console.error("Error sharing:", err);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScholarNavbar />
      <main className="flex-grow">
        <div className="bg-secondary/30 py-6">
          <div className="container mx-auto px-4">
            <Link to="/search" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to search
            </Link>
            
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            ) : !scholarship ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-2">Scholarship Not Found</h2>
                <p className="text-muted-foreground mb-4">The scholarship you're looking for doesn't exist or has been removed.</p>
                <Button asChild>
                  <Link to="/search">Browse Scholarships</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{scholarship.name}</h1>
                    <p className="text-lg text-muted-foreground">{scholarship.provider}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-2" /> Share
                    </Button>
                    <Button size="sm" onClick={() => window.open(scholarship.link || "#", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" /> Apply
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {!loading && scholarship && (
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                    <TabsTrigger value="application">Application</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-3">About this Scholarship</h2>
                      <p className="text-muted-foreground">{scholarship.description}</p>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Key Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <Award className="h-5 w-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Award Amount</h3>
                            <p>{scholarship.amount}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CalendarIcon className="h-5 w-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Application Deadline</h3>
                            <p>{scholarship.deadline}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <BookOpen className="h-5 w-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Category</h3>
                            <p>{scholarship.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="eligibility" className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Eligibility Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {scholarship.eligibility.split(",").map((item, index) => (
                          <li key={index} className="text-muted-foreground">{item.trim()}</li>
                        ))}
                        <li className="text-muted-foreground">Must be enrolled or planning to enroll in an accredited institution</li>
                        <li className="text-muted-foreground">Must be a citizen or permanent resident</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Selection Criteria</h2>
                      <p className="text-muted-foreground mb-4">
                        Selection is based on a combination of academic achievement, financial need, community involvement, and personal essays.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="application" className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Application Process</h2>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li className="text-muted-foreground">Complete the online application form</li>
                        <li className="text-muted-foreground">Submit academic transcripts</li>
                        <li className="text-muted-foreground">Provide proof of enrollment or acceptance letter</li>
                        <li className="text-muted-foreground">Submit a personal statement or essay</li>
                        <li className="text-muted-foreground">Provide letters of recommendation</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Important Dates</h2>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="font-medium w-48">Application Opens:</span>
                          <span className="text-muted-foreground">August 1, 2025</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium w-48">Application Deadline:</span>
                          <span className="text-muted-foreground">{scholarship.deadline}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium w-48">Notification Date:</span>
                          <span className="text-muted-foreground">January 15, 2026</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium w-48">Award Date:</span>
                          <span className="text-muted-foreground">February 1, 2026</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button onClick={() => window.open(scholarship.link || "#", "_blank")}>
                        <ExternalLink className="h-4 w-4 mr-2" /> Apply Now
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Quick Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-500 mr-3" />
                        <div>
                          <p className="text-sm text-muted-foreground">Amount</p>
                          <p className="font-medium">{scholarship.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 text-orange-500 mr-3" />
                        <div>
                          <p className="text-sm text-muted-foreground">Deadline</p>
                          <p className="font-medium">{scholarship.deadline}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Eligibility</p>
                          <p>{scholarship.eligibility}</p>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full mt-4" 
                        onClick={() => window.open(scholarship.link || "#", "_blank")}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-4">Similar Scholarships</h3>
                  <div className="space-y-4">
                    {mockScholarships
                      .filter(s => s.id !== scholarship.id)
                      .slice(0, 2)
                      .map(s => (
                        <Card key={s.id} className="scholarship-card">
                          <CardContent className="pt-6">
                            <h4 className="font-medium mb-2">{s.name}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{s.provider}</p>
                            <div className="flex items-center text-sm mb-2">
                              <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                              <span>{s.amount}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <CalendarIcon className="h-4 w-4 mr-2 text-orange-500" />
                              <span>Deadline: {s.deadline}</span>
                            </div>
                            <Link to={`/scholarship/${s.id}`} className="text-primary text-sm mt-3 inline-block">
                              View Details →
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ScholarshipDetail;
