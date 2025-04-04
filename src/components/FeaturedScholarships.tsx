
import { ArrowRight, CalendarIcon, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder data until we connect to the API
const featuredScholarships = [
  {
    id: 1,
    name: "National Merit Scholarship",
    provider: "National Merit Scholarship Corporation",
    amount: "$2,500",
    deadline: "October 15, 2025",
    eligibility: "High academic achievement, PSAT/NMSQT test scores",
    category: "Merit-based"
  },
  {
    id: 2,
    name: "Future Engineers Scholarship",
    provider: "Engineering Foundation",
    amount: "$5,000",
    deadline: "December 1, 2025",
    eligibility: "Engineering majors, minimum 3.5 GPA",
    category: "Field-specific"
  },
  {
    id: 3,
    name: "First Generation Student Grant",
    provider: "Education Access Foundation",
    amount: "$3,000",
    deadline: "January 15, 2026",
    eligibility: "First-generation college students, demonstrated financial need",
    category: "Need-based"
  }
];

const FeaturedScholarships = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Scholarships</h2>
            <p className="text-muted-foreground">Opportunities that match your profile</p>
          </div>
          <Link to="/search">
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredScholarships.map((scholarship) => (
            <Card key={scholarship.id} className="scholarship-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">{scholarship.name}</CardTitle>
                  <span className="inline-flex items-center px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                    {scholarship.category}
                  </span>
                </div>
                <CardDescription className="text-sm mt-1">{scholarship.provider}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2 space-y-4">
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
              </CardContent>
              <CardFooter>
                <Link to={`/scholarship/${scholarship.id}`} className="w-full">
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/search">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              View All Scholarships <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedScholarships;
