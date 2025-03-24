
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div
      className={`relative flex items-center transition-all duration-300 ${
        isFocused 
        ? "w-64 border-primary" 
        : "w-56 border-border/50"
      } rounded-full px-3 py-1.5 border bg-background/50`}
    >
      <Search className="h-4 w-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search docs..."
        className="flex-1 bg-transparent border-0 outline-none pl-2 text-sm focus:ring-0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className={`absolute inset-0 -z-10 rounded-full transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"} bg-muted/30`}></div>
    </div>
  );
}
