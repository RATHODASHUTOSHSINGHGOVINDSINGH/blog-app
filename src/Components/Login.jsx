import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FaSignInAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path or default to home
  const from = location.state?.from?.pathname || "/";
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Get user data from Firebase
      const userData = {
        id: userCredential.user.uid,
        name: userCredential.user.displayName || "User",
        email: userCredential.user.email,
      };

      // Update auth context
      login(userData);

      // Clear any previous errors
      setError("");

      // Show success toast notification
      toast.success(`Welcome back, ${userData.name}!`, {
        position: "top-right",
        autoClose: 3000,
      });

      // Navigate to the page they tried to visit or home
      navigate(from, { replace: true });
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
      // Show error toast
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Login error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-purple-900 mb-6">
        <FaSignInAlt className="inline-block mr-2 mb-1" />
        Log In to Your Account
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 px-4 rounded-md
           hover:bg-purple-800 focus:outline-none focus:ring-2
            focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer mt-4"
        >
          Log In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-700 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
