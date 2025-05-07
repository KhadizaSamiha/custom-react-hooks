import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store the value, initialized from localStorage or fallback to initialValue
  const [value, setValue] = useState<T>(() => {
    try {
      // Retrieve item from localStorage
      const stored = localStorage.getItem(key);
      // If item exists, parse it, otherwise return the initial value
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      // Error handling if there's an issue reading from localStorage
      alert(error)
      console.error("Error reading localStorage key:", key);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      // Whenever the value or key changes, update localStorage
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Error handling if there's an issue writing to localStorage
      alert(error)
      console.error("Error setting localStorage key:", key);
    }
  }, [key, value]); 

  return [value, setValue] as const; 
}
