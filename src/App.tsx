import { useState } from "react";
import LocalStorageDemo from "./components/LocalStorageDemo";
import DebounceDemo from "./components/DebounceDemo";
import ClickOutsideDemo from "./components/ClickOutsideDemo";
// Future: import ClickOutsideDemo, WindowSizeDemo

const tabs = [
  { label: "useLocalStorage", value: "local" },
  { label: "useDebounce", value: "debounce" },
  { label: " useClickOutside", value: "click" },
  // { label: "🖥️ useWindowSize", value: "window" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("local");

  const renderTabContent = () => {
    switch (activeTab) {
      case "local":
        return <LocalStorageDemo />;
      case "debounce":
        return <DebounceDemo />;
      case "click":
        return <ClickOutsideDemo />;
      // case "window":
      //   return <WindowSizeDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-10 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
          Custom Hook Demos
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 rounded-xl bg-white p-2 shadow-md mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base rounded-lg font-semibold transition-colors duration-300 ${
                activeTab === tab.value
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Container */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
