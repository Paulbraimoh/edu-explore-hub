import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface FilterBarProps {
  universities: string[];
  locations: string[];
  durations: string[];
  selectedUniversity: string;
  selectedLocation: string;
  selectedDuration: string;
  onUniversityChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onDurationChange: (value: string) => void;
}

export const FilterBar = ({
  universities,
  locations,
  durations,
  selectedUniversity,
  selectedLocation,
  selectedDuration,
  onUniversityChange,
  onLocationChange,
  onDurationChange,
}: FilterBarProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="university-filter" className="text-sm font-medium">
          University
        </Label>
        <Select value={selectedUniversity} onValueChange={onUniversityChange}>
          <SelectTrigger id="university-filter" className="h-11 border-border/50">
            <SelectValue placeholder="All Universities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Universities</SelectItem>
            {universities.map((uni) => (
              <SelectItem key={uni} value={uni}>
                {uni}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location-filter" className="text-sm font-medium">
          Location
        </Label>
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger id="location-filter" className="h-11 border-border/50">
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration-filter" className="text-sm font-medium">
          Duration
        </Label>
        <Select value={selectedDuration} onValueChange={onDurationChange}>
          <SelectTrigger id="duration-filter" className="h-11 border-border/50">
            <SelectValue placeholder="All Durations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Durations</SelectItem>
            {durations.map((dur) => (
              <SelectItem key={dur} value={dur}>
                {dur}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

