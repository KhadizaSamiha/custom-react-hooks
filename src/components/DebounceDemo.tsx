import { useDebounce } from "../hooks/useDebounce";
import { useState, useEffect } from "react";

export default function DebounceDemo() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 3000);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("Fake API Call with query:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">useDebounce Demo</h2>
      <input
        type="text"
        placeholder="Search something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-gray-600">
        <strong>Debounced value:</strong>{" "}
        <span className="text-black font-medium">{debouncedSearch || "None"}</span>
      </p>
    </div>
  );
}
