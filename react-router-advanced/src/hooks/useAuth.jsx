import { useState, useEffect } from "react";

// Simple authentication hook
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  return { isAuthenticated };
};
