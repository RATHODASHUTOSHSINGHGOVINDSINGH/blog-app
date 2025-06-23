 import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return currentUser ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
