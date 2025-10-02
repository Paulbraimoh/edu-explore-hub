import { Course } from "@/data/courses";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const feesNgn = course.fees_usd * 1500;
  const formattedFees = `$${course.fees_usd.toLocaleString()} per year (~₦${feesNgn.toLocaleString()})`;

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-[var(--shadow-hover)] border-border/50 bg-gradient-to-b from-card to-card/95">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
            {course.title}
          </CardTitle>
        </div>
        <CardDescription className="text-base font-medium text-foreground/80">
          {course.university}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{course.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-secondary" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-start gap-2">
          <DollarSign className="w-4 h-4 text-accent mt-0.5" />
          <Badge variant="secondary" className="font-semibold text-xs leading-relaxed">
            {formattedFees}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/course/${course.id}`} className="w-full">
          <Button className="w-full" variant="default">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
