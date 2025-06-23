import React from 'react';
import { FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-3 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Learn about our mission, vision, and the story behind this blog platform.</p>
        </div>
      </div>
      
      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-purple-900 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At BlogApp, we believe in the power of words to inspire, educate, and connect people from all walks of life. Our mission is to create a platform where writers can share their unique perspectives and readers can discover content that resonates with them.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Founded in 2025, BlogApp has grown from a small community of passionate writers to a global platform hosting thousands of articles on diverse topics. We're committed to fostering a space for meaningful conversations and knowledge sharing.
          </p>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-purple-900 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-900">Community First</h3>
              <p className="text-gray-600">We prioritize building a supportive community where everyone feels welcome and valued.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-900">Innovation</h3>
              <p className="text-gray-600">We're constantly exploring new ways to improve the blogging experience for our users.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-900">Passion</h3>
              <p className="text-gray-600">We're passionate about writing and believe in the transformative power of sharing stories.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-purple-900 text-center">Our Journey</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Since our inception, we've been dedicated to creating a platform that celebrates diversity of thought and expression. Our blog platform has evolved through continuous feedback from our community and a commitment to providing the best user experience possible.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Today, BlogApp serves users from over 150 countries, with content available in multiple languages. We're proud of the community we've built and excited about the future as we continue to grow and innovate.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Whether you're a seasoned writer or just starting your blogging journey, we invite you to join our community and share your unique voice with the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
