import Navigation from "@/components/Navigation";
import AddSchoolForm from "@/components/AddSchoolForm";

const AddSchool = () => {
  const handleSchoolSubmit = async (schoolData: any) => {
    // For demo purposes, we'll simulate saving to localStorage
    // In a real app, this would save to your database via API
    
    const existingSchools = JSON.parse(localStorage.getItem("schools") || "[]");
    const newSchool = {
      id: Date.now(),
      ...schoolData,
      image: schoolData.image ? URL.createObjectURL(schoolData.image) : "/placeholder.svg"
    };
    
    const updatedSchools = [...existingSchools, newSchool];
    localStorage.setItem("schools", JSON.stringify(updatedSchools));
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Register Your School
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our network of educational institutions. Fill out the form below 
              to add your school to our comprehensive directory.
            </p>
          </div>
          
          <AddSchoolForm onSubmit={handleSchoolSubmit} />
        </div>
      </main>
    </div>
  );
};

export default AddSchool;