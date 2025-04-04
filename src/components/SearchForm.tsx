
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, X } from "lucide-react";

const SearchForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [community, setCommunity] = useState(searchParams.get("community") || "");
  const [educationLevel, setEducationLevel] = useState(searchParams.get("education") || "");
  const [maxAmount, setMaxAmount] = useState(parseInt(searchParams.get("maxAmount") || "100000"));
  const [showFilters, setShowFilters] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (searchQuery) params.append("q", searchQuery);
    if (community) params.append("community", community);
    if (educationLevel) params.append("education", educationLevel);
    if (maxAmount !== 100000) params.append("maxAmount", maxAmount.toString());
    
    navigate(`/search?${params.toString()}`);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCommunity("");
    setEducationLevel("");
    setMaxAmount(100000);
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8 border">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search scholarships..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button type="submit">Search</Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {showFilters && (
        <div className="mt-4 space-y-6 p-4 bg-secondary/50 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Filter Options</h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-8 text-sm flex items-center gap-1"
            >
              <X className="h-3 w-3" /> Clear filters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="community">Community</Label>
              <Select value={community} onValueChange={setCommunity}>
                <SelectTrigger id="community">
                  <SelectValue placeholder="Select community" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="sc">SC</SelectItem>
                  <SelectItem value="st">ST</SelectItem>
                  <SelectItem value="obc">OBC</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="minority">Minority</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="education">Education Level</Label>
              <Select value={educationLevel} onValueChange={setEducationLevel}>
                <SelectTrigger id="education">
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="postgraduate">Postgraduate</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="high school">High School</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="amount">Max Amount</Label>
                <span className="text-sm font-medium">₹{maxAmount.toLocaleString()}</span>
              </div>
              <Slider
                id="amount"
                min={1000}
                max={100000}
                step={1000}
                value={[maxAmount]}
                onValueChange={(value) => setMaxAmount(value[0])}
                className="py-4"
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
