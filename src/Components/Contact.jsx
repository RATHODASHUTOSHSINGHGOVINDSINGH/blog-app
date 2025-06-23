import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Connect with us through any of our
            channels.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-purple-900">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Have a question or suggestion? Our team is here to help. Contact
              us directly using the information below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-900 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-1">
                    Our Location
                  </h3>
                  <p className="text-gray-600">
                    123 Blog Street, Tech City, XYZ 123
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-1">
                    Phone Number
                  </h3>
                  <p className="text-gray-600">+91 1234578-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-1">
                    Email Address
                  </h3>
                  <a
                    href="mailto:info@blogapp.com"
                    className="text-gray-600 hover:text-purple-700"
                  >
                    info@blogapp.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Section*/}
          <div className="bg-purple-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-purple-900">
              Connect With Us
            </h2>

            
            <div className="mb-8 bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-800 font-bold text-xl">JD</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900">JD</h3>
                  <p className="text-gray-600">Chief Editor</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-gray-600">
                  <FaPhone className="inline mr-2 text-purple-800" />
                  <a href="tel:+911212443210" className="hover:text-purple-700">
                    +91 12124 43210
                  </a>
                </p>
                <p className="text-gray-600">
                  <FaEnvelope className="inline mr-2 text-purple-800" />
                  <a
                    href="mailto:john@blogapp.com"
                    className="hover:text-purple-700"
                  >
                    abc@blogapp.com
                  </a>
                </p>
              </div>

              <div className="flex space-x-3 mt-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>

             
            <div className="mb-8 bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-800 font-bold text-xl">JS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900">JS</h3>
                  <p className="text-gray-600">Content Manager</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-gray-600">
                  <FaPhone className="inline mr-2 text-purple-800" />
                  <a href="tel:+911212643210" className="hover:text-purple-700">
                    +91 12126 43210
                  </a>
                </p>
                <p className="text-gray-600">
                  <FaEnvelope className="inline mr-2 text-purple-800" />
                  <a
                    href="mailto:jane@blogapp.com"
                    className="hover:text-purple-700"
                  >
                    xyz@blogapp.com
                  </a>
                </p>
              </div>

              <div className="flex space-x-3 mt-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>

            {/* Company Social Links */}
            <div className="text-center mt-6">
              <h3 className="text-lg font-bold text-purple-900 mb-3">
                Follow Our Blog
              </h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-900 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
