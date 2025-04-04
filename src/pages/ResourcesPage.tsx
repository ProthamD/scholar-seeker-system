
import ScholarNavbar from "@/components/ScholarNavbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video, Laptop, BookOpen, PenTool, Calendar, Award } from "lucide-react";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScholarNavbar />
      <main className="flex-grow">
        <div className="bg-secondary/30 py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-3">Scholarship Resources</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance and tools to help you apply for and win scholarships
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Essay Writing Guide
                </CardTitle>
                <CardDescription>Perfect your scholarship essays</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn how to craft compelling scholarship essays that highlight your strengths, experiences, and goals.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">• Structuring your essay effectively</li>
                  <li className="text-sm">• Common essay prompts and approaches</li>
                  <li className="text-sm">• Storytelling techniques that stand out</li>
                  <li className="text-sm">• Proofreading and editing tips</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="h-5 w-5 mr-2 text-primary" />
                  Interview Preparation
                </CardTitle>
                <CardDescription>Ace your scholarship interviews</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Prepare for scholarship interviews with confidence through our comprehensive guides and practice resources.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">• Common interview questions</li>
                  <li className="text-sm">• Virtual interview best practices</li>
                  <li className="text-sm">• Body language and presentation tips</li>
                  <li className="text-sm">• Follow-up strategies</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Laptop className="h-5 w-5 mr-2 text-primary" />
                  Application Checklist
                </CardTitle>
                <CardDescription>Stay organized and on track</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Keep your scholarship applications organized with our comprehensive checklists and tracking tools.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">• Required documents checklist</li>
                  <li className="text-sm">• Application timeline planner</li>
                  <li className="text-sm">• Recommendation letter tips</li>
                  <li className="text-sm">• Submission verification process</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Scholarship eBooks
                </CardTitle>
                <CardDescription>In-depth guides for applicants</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download our comprehensive eBooks covering all aspects of the scholarship application process.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">• The Complete Scholarship Guide</li>
                  <li className="text-sm">• Financial Aid Fundamentals</li>
                  <li className="text-sm">• International Student Scholarships</li>
                  <li className="text-sm">• Graduate Funding Opportunities</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PenTool className="h-5 w-5 mr-2 text-primary" />
                  Personal Statement Workshop
                </CardTitle>
                <CardDescription>Craft your compelling story</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn how to write powerful personal statements that effectively communicate your unique story.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">• Finding your unique angle</li>
                  <li className="text-sm">• Structuring your personal narrative</li>
                  <li className="text-sm">• Connecting experiences to goals</li>
                  <li className="text-sm">• Examples of successful statements</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Scholarship Calendar
                </CardTitle>
                <CardDescription>Never miss important deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay on top of important scholarship application deadlines with our customizable calendar tool.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">• Major scholarship deadlines</li>
                  <li className="text-sm">• Monthly application reminders</li>
                  <li className="text-sm">• Preparation timeline templates</li>
                  <li className="text-sm">• Academic year planning guide</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Scholarship Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Rajesh's Journey
                  </CardTitle>
                  <CardDescription>Engineering Excellence Scholarship Winner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Using ScholarSeeker's resources, I was able to find and successfully apply for three scholarships that covered 80% of my tuition. The essay writing guide and application checklist were game-changers for my application strategy."
                  </p>
                  <p className="mt-4 text-sm font-medium">Rajesh M., Engineering Student</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Priya's Success
                  </CardTitle>
                  <CardDescription>Women in STEM Scholarship Recipient</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The interview preparation resources helped me feel confident during my scholarship interviews. I received three scholarship offers and was able to choose the best one for my academic goals."
                  </p>
                  <p className="mt-4 text-sm font-medium">Priya K., Computer Science Student</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
