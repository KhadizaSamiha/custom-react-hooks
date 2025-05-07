import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStorageDemo() {
  const [storedName, setStoredName] = useLocalStorage("name", "");

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">useLocalStorage Demo</h2>
      <input
        type="text"
        placeholder="Enter your name..."
        value={storedName}
        onChange={(e) => setStoredName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-gray-600">
        Value persisted in localStorage: <span className="font-medium text-black">{storedName || "None"}</span>
      </p>
    </div>
  );
}
