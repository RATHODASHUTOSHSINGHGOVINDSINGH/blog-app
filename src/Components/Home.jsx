import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight, FaBlog, FaUserFriends, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-purple-700 to-purple-900 min-h-screen text-white">
      {/* Hero Section */}
      <div className=" hero container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Your Ultimate Blog Platform</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-50">Share your stories, connect with readers, and explore new ideas.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/blog" className="bg-white text-purple-900 px-6 py-3 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-purple-100 transition-colors">
              Explore Blogs <FaArrowRight className="ml-2" />
            </Link>
            <Link to="/signup" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-purple-500 transition-colors border border-purple-400">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-900 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaBlog className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-purple-900">Engaging Content</h3>
              <p className="text-center text-gray-600">Discover articles on a wide range of topics written by passionate authors and experts.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-900 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaUserFriends className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-purple-900">Community</h3>
              <p className="text-center text-gray-600">Join a thriving community of readers and writers who share your interests.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-900 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-purple-900">Newsletter</h3>
              <p className="text-center text-gray-600">Subscribe to our newsletter to receive the latest articles directly in your inbox.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-purple-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to start your blogging journey?</h2>
          <Link to="/signup" className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-100 transition-colors">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
