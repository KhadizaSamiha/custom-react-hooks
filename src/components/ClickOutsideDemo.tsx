import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className="text-center space-y-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition"
      >
        Show Modal
      </button>

      {isOpen && (
        <div
          ref={ref}
          className="mx-auto mt-4 max-w-sm bg-white border border-gray-300 rounded-xl shadow-lg p-4"
        >
          <h3 className="text-lg font-medium mb-2 text-gray-800">Dropdown Menu</h3>
          <p className="text-gray-600 text-sm">
            Click outside this box to close it.
          </p>
        </div>
      )}
    </div>
  );
}
