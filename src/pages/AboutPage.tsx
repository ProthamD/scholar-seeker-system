
import ScholarNavbar from "@/components/ScholarNavbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, Database, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScholarNavbar />
      <main className="flex-grow">
        <div className="bg-secondary/30 py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-3">About ScholarSeeker</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connecting students with scholarship opportunities for a brighter future
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                ScholarSeeker was founded with a simple mission: to make education more accessible by connecting students with scholarship opportunities that match their unique profiles and needs.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that financial constraints should never prevent talented and motivated students from pursuing their educational dreams. Our platform is designed to simplify the scholarship search process, making it easier for students to find and apply for financial aid.
              </p>
              <p className="text-muted-foreground">
                By leveraging technology and data analytics, we create personalized scholarship recommendations that consider each student's academic background, interests, and goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-primary/5 border-none">
                <CardContent className="pt-6 text-center">
                  <Search className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-xl mb-1">Smart Matching</h3>
                  <p className="text-sm text-muted-foreground">Algorithm-based scholarship recommendations</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="pt-6 text-center">
                  <Database className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-xl mb-1">Comprehensive</h3>
                  <p className="text-sm text-muted-foreground">Thousands of scholarships in our database</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="pt-6 text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-xl mb-1">Student-First</h3>
                  <p className="text-sm text-muted-foreground">Built by students, for students</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="pt-6 text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-xl mb-1">Success-Focused</h3>
                  <p className="text-sm text-muted-foreground">Resources to improve application success</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                ScholarSeeker began as a college project by a group of engineering students who experienced firsthand the challenges of finding relevant scholarships. What started as a simple database of scholarship opportunities quickly evolved into a comprehensive platform with advanced matching capabilities.
              </p>
              <p>
                In 2023, we expanded our team to include educators, financial aid experts, and technology specialists to enhance our platform and provide more valuable resources to students. By 2025, ScholarSeeker had helped over 50,000 students find and secure scholarships worth more than ₹75 crore.
              </p>
              <p>
                Today, we continue to innovate and improve our services, forming partnerships with educational institutions, foundations, and corporate sponsors to bring more opportunities to deserving students across the country.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Amrita Patel", role: "Founder & CEO", image: "avatar" },
                { name: "Rahul Verma", role: "CTO", image: "avatar" },
                { name: "Priya Singh", role: "Head of Operations", image: "avatar" },
                { name: "Vikram Shah", role: "Scholarship Data Specialist", image: "avatar" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  We value your feedback and are here to answer any questions you might have about ScholarSeeker. Feel free to reach out to us through any of the following channels:
                </p>
                <div className="space-y-3 mt-6">
                  <p className="flex items-center">
                    <span className="font-medium w-24">Email:</span>
                    <span className="text-muted-foreground">support@scholarseeker.com</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">Phone:</span>
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">Address:</span>
                    <span className="text-muted-foreground">123 Education St, Academic City</span>
                  </p>
                </div>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">For Scholarship Providers</h3>
                  <p className="text-muted-foreground mb-4">
                    If you represent an organization that offers scholarships and would like to list them on our platform, please contact our partnerships team at partners@scholarseeker.com.
                  </p>
                  <h3 className="font-semibold mb-4 mt-6">For Educational Institutions</h3>
                  <p className="text-muted-foreground">
                    Schools and universities interested in providing ScholarSeeker services to their students can reach out to our institutional relations team at institutions@scholarseeker.com.
                  </p>
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

export default AboutPage;
