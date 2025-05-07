import { useLocalStorage } from "../hooks/useLocalStorage"; 

export default function LocalStorageDemo() {
  const [storedText, setStoredText] = useLocalStorage("text", ""); // Manage "text" in localStorage

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Enter your name..." 
        value={storedText}
        onChange={(e) => setStoredText(e.target.value)} // Update localStorage on input change
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />
      
         {/* Display the search value */}
      <p className="text-gray-600">
        Value persisted in localStorage: <span className="font-medium text-gray-700">{storedText || "None"}</span>
      </p>
    </div>
  );
}
