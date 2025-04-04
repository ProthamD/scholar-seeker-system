
import { BookOpen, Filter, Award, Clock } from "lucide-react";

const features = [
  {
    icon: <Filter className="h-6 w-6 text-primary" />,
    title: "Smart Matching",
    description: "Our advanced algorithm matches your profile with scholarships that fit your specific qualifications."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Comprehensive Database",
    description: "Browse thousands of scholarships from local and national organizations updated regularly."
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Scholarship Guidance",
    description: "Get expert tips on applications, essays, and interviews to increase your chances of success."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Deadline Reminders",
    description: "Never miss an important scholarship deadline with our notification system."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">How ScholarSeeker Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform simplifies the scholarship search process, helping you find and apply
            for opportunities that align with your educational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
