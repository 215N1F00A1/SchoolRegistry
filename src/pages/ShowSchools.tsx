import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import SchoolGrid from "@/components/SchoolGrid";
import { School } from "@/components/SchoolCard";
import { Button } from "@/components/ui/button";
import { RefreshCw, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ShowSchools = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadSchools = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const storedSchools = JSON.parse(localStorage.getItem("schools") || "[]");
      setSchools(storedSchools);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadSchools();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              School Directory
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our network of {schools.length} registered schools
            </p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            <Button
              onClick={loadSchools}
              variant="outline"
              className="flex items-center space-x-2"
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </Button>
            
            <Link to="/add-school">
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add School</span>
              </Button>
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Loading schools...</p>
            </div>
          </div>
        ) : (
          <SchoolGrid schools={schools} />
        )}
      </main>
    </div>
  );
};

export default ShowSchools;