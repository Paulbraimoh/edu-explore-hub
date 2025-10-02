import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
      <Input
        type="text"
        placeholder="Search courses..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 h-12 text-base border-border/50 focus:border-primary"
      />
    </div>
  );
};
