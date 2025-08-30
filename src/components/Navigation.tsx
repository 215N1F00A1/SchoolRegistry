import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Plus, Grid } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                SchoolRegistry
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/add-school">
              <Button 
                variant={location.pathname === "/add-school" ? "default" : "outline"}
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add School</span>
              </Button>
            </Link>
            
            <Link to="/schools">
              <Button 
                variant={location.pathname === "/schools" ? "default" : "outline"}
                className="flex items-center space-x-2"
              >
                <Grid className="h-4 w-4" />
                <span>View Schools</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;