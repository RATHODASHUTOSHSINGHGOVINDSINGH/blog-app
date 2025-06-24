import React, { useState } from "react";
import { FaUserPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add validation to check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    try {
      // Create user with Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      // Show success notification
      toast.success(
        `Account created successfully! Welcome, ${formData.name}!`,
        {
          position: "top-right",
          autoClose: 3000,
        }
      );

      // Redirect to login page after successful signup
      navigate("/login");
    } catch (error) {
      // Show error notification
      toast.error(
        error.message || "Failed to create account. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="******************"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="******************"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-purple-800 hover:bg-purple-900 text-white font-bold 
              py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center cursor-pointer transition-colors duration-300"
              type="submit"
            >
              <FaUserPlus className="mr-2" />
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-800 font-bold">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
