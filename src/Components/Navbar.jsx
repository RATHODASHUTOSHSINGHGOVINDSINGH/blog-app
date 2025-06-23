import React, { useState } from "react";
import { Link } from "react-router";
import { FaUserPlus, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-purple-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-12 items-center">
          <div className="flex ">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-shadow-md">BlogApp</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-shadow-md font-medium
                 hover:bg-purple-800"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="px-3 py-2 rounded-md text-shadow-md font-medium hover:bg-purple-800"
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-shadow-md font-medium hover:bg-purple-800"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-shadow-md  font-medium hover:bg-purple-800"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {currentUser ? (
              <>
                <span className="hidden md:inline-block mr-4 text-sm">
                  <FaUser className="inline-block mr-1" />
                  {currentUser.name || currentUser.email}
                </span>
                {/* Desktop logout button */}
                <button
                  onClick={logout}
                  className="flex items-center px-4 py-2 rounded-md text-sm font-medium bg-purple-700 hover:bg-purple-800
                    transition-colors cursor-pointer"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center px-4 py-2 rounded-md text-sm font-medium bg-purple-700 hover:bg-purple-800 mr-2 transition-colors"
                >
                  <FaSignInAlt className="mr-2" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center px-4 py-2 rounded-md text-sm font-medium bg-white text-purple-900 hover:bg-gray-100 transition-colors"
                >
                  <FaUserPlus className="mr-2" />
                  Sign Up
                </Link>
              </>
            )}
            <button
              className="md:hidden ml-2 p-2"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
                
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {currentUser ? (
              <div className="pt-4 pb-3 border-t border-purple-700">
                <div className="flex items-center px-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <FaUser />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium">{currentUser.name || currentUser.email}</div>
                  </div>
                </div>
                <div className="mt-3 px-2">
                  {/* Mobile logout button */}
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 rounded-md text-base 
                    font-medium bg-purple-700 hover:bg-purple-800 cursor-pointer"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex mt-4 space-x-2 px-3">
                <Link
                  to="/login"
                  className="flex items-center justify-center w-1/2 px-4 py-2 rounded-md text-sm font-medium bg-purple-700 hover:bg-purple-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaSignInAlt className="mr-2 " />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center justify-center w-1/2 px-4 py-2 rounded-md text-sm font-medium bg-white text-purple-900 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaUserPlus className="mr-2" />
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
