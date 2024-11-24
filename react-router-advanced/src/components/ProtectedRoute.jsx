import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Access authentication status

  return isAuthenticated ? children : <Navigate to="/" />; // Redirect to home if not authenticated
};

export default ProtectedRoute;
