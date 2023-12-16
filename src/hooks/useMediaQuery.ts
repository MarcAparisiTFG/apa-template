import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const getMatches = (query: string) => {
    // Get initial value directly from MediaQueryList
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Update state on change
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Subscribe to changes
    mediaQueryList.addEventListener("change", listener);

    // Cleanup
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
