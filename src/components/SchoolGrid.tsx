import SchoolCard, { School } from "./SchoolCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter, SortAsc, SortDesc, X } from "lucide-react";
import { useState, useMemo } from "react";

interface SchoolGridProps {
  schools: School[];
}

type SortOption = "name-asc" | "name-desc" | "city-asc" | "city-desc" | "state-asc" | "state-desc";

const SchoolGrid = ({ schools }: SchoolGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");

  // Get unique states for filter dropdown
  const uniqueStates = useMemo(() => {
    const states = Array.from(new Set(schools.map(school => school.state)));
    return states.sort();
  }, [schools]);

  const filteredAndSortedSchools = useMemo(() => {
    let filtered = schools;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((school) =>
        school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply state filter
    if (selectedState !== "all") {
      filtered = filtered.filter(school => school.state === selectedState);
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "city-asc":
          return a.city.localeCompare(b.city);
        case "city-desc":
          return b.city.localeCompare(a.city);
        case "state-asc":
          return a.state.localeCompare(b.state);
        case "state-desc":
          return b.state.localeCompare(a.state);
        default:
          return 0;
      }
    });

    return sorted;
  }, [schools, searchTerm, selectedState, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedState("all");
    setSortBy("name-asc");
  };

  const hasActiveFilters = searchTerm || selectedState !== "all" || sortBy !== "name-asc";

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search schools by name, city, state, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* State Filter */}
          <div className="w-full lg:w-48">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                {uniqueStates.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sort Options */}
          <div className="w-full lg:w-48">
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger>
                {sortBy.includes("desc") ? (
                  <SortDesc className="h-4 w-4 mr-2" />
                ) : (
                  <SortAsc className="h-4 w-4 mr-2" />
                )}
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name A-Z</SelectItem>
                <SelectItem value="name-desc">Name Z-A</SelectItem>
                <SelectItem value="city-asc">City A-Z</SelectItem>
                <SelectItem value="city-desc">City Z-A</SelectItem>
                <SelectItem value="state-asc">State A-Z</SelectItem>
                <SelectItem value="state-desc">State Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="flex items-center space-x-2"
            >
              <X className="h-4 w-4" />
              <span>Clear</span>
            </Button>
          )}
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div>
            Showing {filteredAndSortedSchools.length} of {schools.length} schools
            {hasActiveFilters && (
              <span className="text-primary font-medium ml-1">(filtered)</span>
            )}
          </div>
          
          {hasActiveFilters && (
            <div className="flex items-center space-x-4">
              {searchTerm && (
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedState !== "all" && (
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">
                  State: {selectedState}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Schools Grid */}
      {filteredAndSortedSchools.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground text-lg">
            {searchTerm || selectedState !== "all" 
              ? "No schools found matching your search criteria." 
              : "No schools available yet."}
          </div>
          {(searchTerm || selectedState !== "all") && (
            <div className="mt-4">
              <Button onClick={clearFilters} variant="outline">
                Clear filters to see all schools
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedSchools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SchoolGrid;