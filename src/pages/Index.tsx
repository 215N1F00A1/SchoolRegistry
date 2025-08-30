import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Plus, Grid, School, Users, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-10 w-10 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">SchoolRegistry</h1>
                <p className="text-sm text-muted-foreground">Educational Institution Management</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link to="/add-school">
                <Button className="flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Add School</span>
                </Button>
              </Link>
              
              <Link to="/schools">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Grid className="h-4 w-4" />
                  <span>View Schools</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Comprehensive School
            <span className="text-primary block">Registry System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Streamline school management with our modern, responsive platform. 
            Register educational institutions, manage data, and explore our comprehensive directory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/add-school">
              <Button size="lg" className="w-full sm:w-auto px-8 py-3">
                <Plus className="h-5 w-5 mr-2" />
                Register New School
              </Button>
            </Link>
            
            <Link to="/schools">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-3">
                <Grid className="h-5 w-5 mr-2" />
                Browse Schools
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <School className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Easy Registration</CardTitle>
              <CardDescription>
                Simple, intuitive form with validation to register schools quickly and accurately
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <CardTitle>Comprehensive Directory</CardTitle>
              <CardDescription>
                Browse and search through a complete database of registered educational institutions
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>Location Based</CardTitle>
              <CardDescription>
                Find schools by location with detailed address and contact information
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join hundreds of educational institutions in our comprehensive registry. 
            Register your school today or explore our existing network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/add-school">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Registration
              </Button>
            </Link>
            
            <Link to="/schools">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                Explore Directory
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
