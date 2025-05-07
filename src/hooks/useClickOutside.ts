import { useEffect, useRef } from "react";

// Define the type for the handler function which will be called when a click outside is detected
type Handler = (event: MouseEvent | TouchEvent) => void;

export default function useClickOutside<T extends HTMLElement>(
  handler: Handler // The handler function to call when a click outside is detected
) {
  
  const ref = useRef<T | null>(null);

  // Side effect to add event listeners for mouse and touch events
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // If the ref is null or the click/touch happened inside the referenced element, do nothing
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      // If the click/touch happened outside, call the handler function
      handler(event);
    };

    // Add event listeners for 'mousedown' (mouse click) and 'touchstart' (touch events)
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Clean up the event listeners on component unmount or when the effect dependencies change
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]); 

  return ref;
}
