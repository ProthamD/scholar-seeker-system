
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon, DollarSign, Users, ExternalLink, BookOpen, Home } from "lucide-react";
import { toast } from "sonner";

// Type definition for scholarship data
export interface Scholarship {
  id: number;
  name: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string;
  educationLevel?: string;
  incomeRequired?: string;
  category: string;
  description?: string;
  link?: string;
}

// Enhanced mock scholarship data with education levels and income requirements
const mockScholarships: Scholarship[] = [
  {
    id: 1,
    name: "National Merit Scholarship",
    provider: "National Merit Scholarship Corporation",
    amount: "₹50,000",
    deadline: "October 15, 2025",
    eligibility: "High academic achievement, PSAT/NMSQT test scores",
    educationLevel: "undergraduate",
    incomeRequired: "any",
    category: "Merit-based",
    link: "#"
  },
  {
    id: 2,
    name: "Future Engineers Scholarship",
    provider: "Engineering Foundation",
    amount: "₹75,000",
    deadline: "December 1, 2025",
    eligibility: "Engineering majors, minimum 3.5 GPA",
    educationLevel: "undergraduate",
    incomeRequired: "any",
    category: "Field-specific",
    link: "#"
  },
  {
    id: 3,
    name: "First Generation Student Grant",
    provider: "Education Access Foundation",
    amount: "₹45,000",
    deadline: "January 15, 2026",
    eligibility: "First-generation college students, demonstrated financial need",
    educationLevel: "undergraduate",
    incomeRequired: "low",
    category: "Need-based",
    link: "#"
  },
  {
    id: 4,
    name: "Women in STEM Scholarship",
    provider: "STEM Education Alliance",
    amount: "₹100,000",
    deadline: "November 30, 2025",
    eligibility: "Female students pursuing degrees in Science, Technology, Engineering, or Mathematics",
    educationLevel: "undergraduate",
    incomeRequired: "any",
    category: "Diversity",
    link: "#"
  },
  {
    id: 5,
    name: "Community Service Award",
    provider: "Community Foundation",
    amount: "₹35,000",
    deadline: "February 28, 2026",
    eligibility: "Students with significant community service experience, minimum 3.0 GPA",
    educationLevel: "high school",
    incomeRequired: "middle",
    category: "Service-based",
    link: "#"
  },
  {
    id: 6,
    name: "Rural Students Scholarship",
    provider: "Rural Education Fund",
    amount: "₹60,000",
    deadline: "March 15, 2026",
    eligibility: "Students from rural communities with financial need",
    educationLevel: "undergraduate",
    incomeRequired: "low",
    category: "Need-based",
    link: "#"
  },
  {
    id: 7,
    name: "Creative Arts Fellowship",
    provider: "Arts Foundation",
    amount: "₹40,000",
    deadline: "December 15, 2025",
    eligibility: "Students pursuing visual arts, performing arts, creative writing, or related fields",
    educationLevel: "postgraduate",
    incomeRequired: "any",
    category: "Field-specific",
    link: "#"
  },
  {
    id: 8,
    name: "Future Entrepreneurs Grant",
    provider: "Business Innovation Center",
    amount: "₹55,000",
    deadline: "January 30, 2026",
    eligibility: "Business majors with entrepreneurial projects or plans",
    educationLevel: "postgraduate",
    incomeRequired: "any",
    category: "Field-specific",
    link: "#"
  },
  {
    id: 9,
    name: "Doctoral Research Fellowship",
    provider: "National Research Foundation",
    amount: "₹125,000",
    deadline: "November 15, 2025",
    eligibility: "PhD candidates with innovative research proposals",
    educationLevel: "phd",
    incomeRequired: "any",
    category: "Research-based",
    link: "#"
  },
  {
    id: 10,
    name: "Low-Income Achievement Scholarship",
    provider: "Equal Opportunity Foundation",
    amount: "₹80,000",
    deadline: "October 30, 2025",
    eligibility: "Students from low-income families with high academic achievement",
    educationLevel: "undergraduate",
    incomeRequired: "low",
    category: "Need-based",
    link: "#"
  }
];

const ScholarshipList = () => {
  const [searchParams] = useSearchParams();
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Extract filter parameters
        const query = searchParams.get("q")?.toLowerCase() || "";
        const community = searchParams.get("community")?.toLowerCase() || "";
        const education = searchParams.get("education")?.toLowerCase() || "";
        const income = searchParams.get("income")?.toLowerCase() || "";
        const maxAmount = parseInt(searchParams.get("maxAmount") || "100000");
        
        console.log("Filtering with:", { query, community, education, income, maxAmount });
        
        // Apply filters
        const filtered = mockScholarships.filter(scholarship => {
          // Text search filter
          const matchesQuery = !query || 
            scholarship.name.toLowerCase().includes(query) || 
            scholarship.provider.toLowerCase().includes(query) ||
            scholarship.eligibility.toLowerCase().includes(query);
          
          // Community filter
          const matchesCommunity = !community || 
            scholarship.eligibility.toLowerCase().includes(community);
          
          // Education level filter - now directly matching the educationLevel property
          const matchesEducation = !education || 
            scholarship.educationLevel === education;
          
          // Income level filter - now directly matching the incomeRequired property
          const matchesIncome = !income || 
            scholarship.incomeRequired === income || 
            scholarship.incomeRequired === "any";
          
          // Amount filter
          const scholarshipAmount = parseInt(scholarship.amount.replace(/[^0-9]/g, ""));
          const matchesAmount = !maxAmount || scholarshipAmount <= maxAmount;
          
          return matchesQuery && matchesCommunity && matchesEducation && matchesIncome && matchesAmount;
        });
        
        setScholarships(filtered);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
        toast.error("Failed to load scholarships. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="w-full">
            <CardHeader className="pb-2">
              <Skeleton className="h-7 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-9 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (scholarships.length === 0) {
    return (
      <div className="text-center py-12 bg-secondary/30 rounded-lg border">
        <h3 className="text-xl font-semibold mb-2">No scholarships found</h3>
        <p className="text-muted-foreground mb-4">
          Try adjusting your search filters to find more results.
        </p>
        <Button 
          variant="outline" 
          onClick={() => window.location.href = "/search"}
        >
          Clear filters
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">{scholarships.length} scholarships found</p>
      
      {scholarships.map((scholarship) => (
        <Card key={scholarship.id} className="scholarship-card">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                <CardDescription>{scholarship.provider}</CardDescription>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                {scholarship.category}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center text-sm">
              <DollarSign className="h-4 w-4 mr-2 text-green-500" />
              <span className="font-medium">{scholarship.amount}</span>
            </div>
            <div className="flex items-center text-sm">
              <CalendarIcon className="h-4 w-4 mr-2 text-orange-500" />
              <span>Deadline: {scholarship.deadline}</span>
            </div>
            <div className="flex items-start text-sm">
              <Users className="h-4 w-4 mr-2 text-blue-500 mt-0.5" />
              <span>{scholarship.eligibility}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {scholarship.educationLevel && (
                <div className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {scholarship.educationLevel.charAt(0).toUpperCase() + scholarship.educationLevel.slice(1)}
                </div>
              )}
              {scholarship.incomeRequired && scholarship.incomeRequired !== "any" && (
                <div className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                  <Home className="h-3 w-3 mr-1" />
                  {scholarship.incomeRequired.charAt(0).toUpperCase() + scholarship.incomeRequired.slice(1)} Income
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => window.open(scholarship.link || "#", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Apply Now
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto"
              onClick={() => window.location.href = `/scholarship/${scholarship.id}`}
            >
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ScholarshipList;
