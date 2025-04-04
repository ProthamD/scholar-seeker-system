
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Find Your Perfect Scholarship Match
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
          Discover scholarships tailored to your academic profile and needs for the 2025-26 academic year
        </p>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex flex-col md:flex-row gap-3 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search scholarships by name, field of study, etc."
              className="pl-10 h-12 bg-white text-black w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit" className="h-12 px-8">Search</Button>
        </form>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 rounded-full px-4 py-2">Engineering</span>
          <span className="bg-white/20 rounded-full px-4 py-2">Medicine</span>
          <span className="bg-white/20 rounded-full px-4 py-2">Arts & Humanities</span>
          <span className="bg-white/20 rounded-full px-4 py-2">First Generation</span>
          <span className="bg-white/20 rounded-full px-4 py-2">Merit-Based</span>
          <span className="bg-white/20 rounded-full px-4 py-2">Need-Based</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
