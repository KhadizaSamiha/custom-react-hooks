import useWindowSize from "../hooks/useWindowSize"; 

export default function WindowSizeDemo() {
  // Destructure the width and height from the useWindowSize hook
  const { width, height } = useWindowSize();

  return (
    <div className="text-center space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Window Size Tracker</h2>
      
      {/* Display the window width and height in a styled container */}
      <div className="bg-blue-100 text-blue-800 px-6 py-4 rounded-xl shadow-md inline-block">
        <p className="text-lg font-medium">Width: {width}px</p>
        <p className="text-lg font-medium">Height: {height}px</p>
      </div>

      {/* Provide instructions for the user */}
      <p className="text-gray-500 text-sm">
        Resize the window to see changes in real-time.
      </p>
    </div>
  );
}
