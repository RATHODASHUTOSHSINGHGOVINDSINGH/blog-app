import React, { useContext, useState, useEffect, createContext } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);
 
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On app load, check localStorage for user
  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login user and save to localStorage
  function login(userData) {
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }

  // Logout user and clear localStorage
  function logout() {
    const userName = currentUser?.name || 'User';
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    
    // Show toast notification
    toast.info(`Goodbye, ${userName}! You've been logged out.`, {
      position: "top-right",
      autoClose: 3000
    });
  }

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}
