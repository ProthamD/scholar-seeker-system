
import ScholarNavbar from "@/components/ScholarNavbar";
import SearchForm from "@/components/SearchForm";
import ScholarshipList from "@/components/ScholarshipList";
import Footer from "@/components/Footer";

const SearchPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScholarNavbar />
      <main className="flex-grow">
        <div className="bg-secondary/30 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Find Scholarships</h1>
            <SearchForm />
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <ScholarshipList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
