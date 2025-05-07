import { useDebounce } from "../hooks/useDebounce";
import { useState, useEffect } from "react";

export default function DebounceDemo() {
  const [search, setSearch] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 
  const [apiResult, setApiResult] = useState<string | null>(null); 
  const debouncedSearch = useDebounce(search, 1000); 

  // Simulate fake API call when debounced value changes
  useEffect(() => {
    if (debouncedSearch) {
      setIsLoading(true);
      setApiResult(null); 

      // Simulate an API call (Fake API call simulation)
      setTimeout(() => {
        setIsLoading(false); // Stop loading after "API call"
        setApiResult(`Fake API response for: ${debouncedSearch}`); 
        console.log("Fake API Call with query:", debouncedSearch);
      }, 1000); 
    } else {
      // Reset the API result if the search input is cleared
      setApiResult(null);
    }
  }, [debouncedSearch]); 

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update search value on input change
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Display Debounced Value */}
      <p className="text-gray-600">
        Debounced value:{" "}
        <span className="text-gray-700 font-medium">{debouncedSearch || "None"}</span>
      </p>

      {/* Display Loading Indicator */}
      {isLoading && (
        <p className="text-blue-500">Loading...</p>
      )}

      {/* Display API Result */}
      {apiResult && !isLoading && (
        <p className="text-green-500">
          <strong>API Response:</strong> {apiResult}
        </p>
      )}
    </div>
  );
}
