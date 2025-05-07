import { useState } from "react";
import LocalStorageDemo from "./components/LocalStorageDemo";
import DebounceDemo from "./components/DebounceDemo";
import ClickOutsideDemo from "./components/ClickOutsideDemo";
import WindowSizeDemo from "./components/WindowSizeDemo";
import { FaDatabase, FaMousePointer, FaSearch } from "react-icons/fa";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FiTool } from "react-icons/fi";

const tabs = [
  { label: "useLocalStorage", value: "local", icon: <FaDatabase /> },
  { label: "useDebounce", value: "debounce", icon: <FaSearch /> },
  { label: "useClickOutside", value: "click", icon: <FaMousePointer /> },
  { label: "useWindowSize", value: "window", icon: <AiOutlineFullscreen /> },
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
      case "window":
        return <WindowSizeDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-10 md:px-8 lg:px-20">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-8 text-gray-700">
          <FiTool className="text-4xl mt-2" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Custom React Hook
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-2 sm:gap-3 md:gap-4 rounded-xl bg-white p-2 sm:p-3 shadow-md mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base md:text-lg rounded-lg font-medium transition-colors duration-300 ${
                activeTab === tab.value
                  ? "bg-gray-700 text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
