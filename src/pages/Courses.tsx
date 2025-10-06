import { useState, useMemo } from "react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";

const COURSES_PER_PAGE = 5;

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique values for filters
  const universities = useMemo(
    () => Array.from(new Set(courses.map((c) => c.university))),
    []
  );
  const locations = useMemo(
    () => Array.from(new Set(courses.map((c) => c.location))),
    []
  );
  const durations = useMemo(
    () => Array.from(new Set(courses.map((c) => c.duration))),
    []
  );

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesUniversity =
        selectedUniversity === "all" || course.university === selectedUniversity;

      const matchesLocation =
        selectedLocation === "all" || course.location === selectedLocation;

      const matchesDuration =
        selectedDuration === "all" || course.duration === selectedDuration;

      return matchesSearch && matchesUniversity && matchesLocation && matchesDuration;
    });
  }, [searchQuery, selectedUniversity, selectedLocation, selectedDuration]);

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedUniversity, selectedLocation, selectedDuration]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground py-16 px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Course Finder</h1>
          </div>
          <p className="text-center text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Discover the perfect university program for your future. Browse courses from top Nigerian universities.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 pb-12">
        {/* Search and Filter Section */}
        <div className="bg-card rounded-lg shadow-[var(--shadow-card)] p-6 mb-8 border border-border/50">
          <div className="space-y-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterBar
              universities={universities}
              locations={locations}
              durations={durations}
              selectedUniversity={selectedUniversity}
              selectedLocation={selectedLocation}
              selectedDuration={selectedDuration}
              onUniversityChange={setSelectedUniversity}
              onLocationChange={setSelectedLocation}
              onDurationChange={setSelectedDuration}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground text-sm">
            Showing <span className="font-semibold text-foreground">{startIndex + 1}-{Math.min(endIndex, filteredCourses.length)}</span> of{" "}
            <span className="font-semibold text-foreground">{filteredCourses.length}</span> courses
          </p>
        </div>

        {/* Course Grid */}
        {paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No courses found matching your criteria.</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters or search query.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="min-w-[2.5rem]"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Courses;

