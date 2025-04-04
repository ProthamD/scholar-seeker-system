
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary rounded-md p-1.5">
                <Search className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">ScholarSeeker</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Helping students find and secure scholarships to achieve their academic goals.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">Home</Link></li>
              <li><Link to="/search" className="text-muted-foreground hover:text-primary text-sm">Find Scholarships</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary text-sm">Resources</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/application-tips" className="text-muted-foreground hover:text-primary text-sm">Application Tips</Link></li>
              <li><Link to="/resources/essay-writing" className="text-muted-foreground hover:text-primary text-sm">Essay Writing</Link></li>
              <li><Link to="/resources/interviews" className="text-muted-foreground hover:text-primary text-sm">Interview Preparation</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary text-sm">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">support@scholarseeker.com</li>
              <li className="text-muted-foreground text-sm">+1 (555) 123-4567</li>
              <li className="text-muted-foreground text-sm">123 Education St, Academic City</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 ScholarSeeker. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
