import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth, 
    height: window.innerHeight, 
  });

  useEffect(() => {
    // Function to update the window size state on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth, 
        height: window.innerHeight, 
      });
    };

    // Add the resize event listener to update the state on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
