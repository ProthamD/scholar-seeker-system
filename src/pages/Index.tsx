
import ScholarNavbar from "@/components/ScholarNavbar";
import HeroSection from "@/components/HeroSection";
import FeaturedScholarships from "@/components/FeaturedScholarships";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScholarNavbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <FeaturedScholarships />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
