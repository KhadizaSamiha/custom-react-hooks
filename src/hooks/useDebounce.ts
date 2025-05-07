import { useEffect, useState } from "react"; 

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Create a timer that updates the debounced value after the specified delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout when the component unmounts or when `value` or `delay` changes
    return () => clearTimeout(timer);
  }, [value, delay]); 

  return debouncedValue;
}
