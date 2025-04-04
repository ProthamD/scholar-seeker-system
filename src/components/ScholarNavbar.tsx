
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ScholarNavbar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary rounded-md p-1.5">
            <Search className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">ScholarSeeker</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/search" className="text-foreground hover:text-primary font-medium">
            Find Scholarships
          </Link>
          <Link to="/resources" className="text-foreground hover:text-primary font-medium">
            Resources
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary font-medium">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default ScholarNavbar;
