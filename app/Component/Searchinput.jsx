"use client";
import { Search } from "lucide-react";
import { useState } from "react";

function Searchinput() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full pl-10 placeholder:text-white pr-4 py-2 rounded-lg bg-white/20 dark:bg-black/30 
                  border border-gray-300 dark:border-gray-600 focus:outline-none 
                  focus:ring-2 focus:ring-cyan-500 text-gray-800 dark:text-white"
      />
      <Search className="absolute left-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
    </div>
  );
}

export default Searchinput;