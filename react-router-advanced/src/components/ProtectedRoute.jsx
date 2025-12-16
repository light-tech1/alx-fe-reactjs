import React from "react";
import { Navigate } from "react-router-dom";

// Simulate authentication
const isAuthenticated = () => {
  return localStorage.getItem("authenticated") === "true";
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
