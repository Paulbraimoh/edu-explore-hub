import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, DollarSign, GraduationCap, Building2 } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === Number(id));
  
  const feesNgn = course ? course.fees_usd * 1500 : 0;
  const formattedFees = course ? `$${course.fees_usd.toLocaleString()} per year (~₦${feesNgn.toLocaleString()})` : '';

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground py-8 px-4 mb-8">
        <div className="container mx-auto max-w-4xl">
          <Link to="/">
            <Button variant="secondary" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 pb-12">
        <Card className="shadow-[var(--shadow-card)] border-border/50">
          <CardHeader className="border-b border-border/50 pb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-3xl font-bold mb-2">{course.title}</CardTitle>
                <div className="flex items-center gap-2 text-lg text-muted-foreground">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{course.university}</span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6 space-y-8">
            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Location</p>
                  <p className="text-sm font-semibold">{course.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Clock className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Duration</p>
                  <p className="text-sm font-semibold">{course.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <DollarSign className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Tuition Fees</p>
                  <Badge variant="secondary" className="font-semibold text-xs leading-relaxed">
                    {formattedFees}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                About This Course
              </h2>
              <p className="text-base leading-relaxed text-foreground/90">
                {course.description}
              </p>
            </div>

            {/* Course Highlights */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/10">
              <h3 className="text-lg font-bold mb-3">Course Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-sm">Accredited program from a recognized Nigerian university</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-sm">Comprehensive curriculum with hands-on learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-sm">Experienced faculty and modern facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-sm">Strong career prospects and industry connections</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="flex-1">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Request More Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CourseDetail;

