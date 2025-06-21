"use client";

import { useState, useEffect } from "react";
import Loader from "../Loading";

export default function ClientSideWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is where all your client-side splash screen logic goes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Example: Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []); // Empty array ensures this runs only once on mount

  // Conditionally render the loader or the page content
  if (isLoading) {
    return <Loader />;
  }

  // Once loading is finished, render the actual page content
  return <>{children}</>;
}
