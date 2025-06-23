import React, { useState, useEffect } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate, Link } from "react-router";
import { useAuth } from "./context/AuthContext";
import { toast } from "react-toastify";

const Blog = () => {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogPosts");
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  
  const categories = ['All', 'General', 'Technology', 'Design', 'Development', 'Business', 'Lifestyle'];

   
  useEffect(() => {
    const savedBlogs = localStorage.getItem("blogPosts");
    if (savedBlogs) {
      const parsedBlogs = JSON.parse(savedBlogs);
      setBlogs(parsedBlogs);
      setOriginalBlogs(parsedBlogs);
      setFilteredBlogs(parsedBlogs);
    }
  }, []);

  // Update localStorage when blogs change
  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(blogs));
  }, [blogs]);

  // Update filteredBlogs when search or filter criteria change
   useEffect(() => {
  const filtered = originalBlogs.filter(blog => {
    const categoryMatch = filterCategory === "All" || blog.category?.toLowerCase() === filterCategory.toLowerCase();
    const searchMatch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        blog.content?.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  setFilteredBlogs(filtered);
}, [originalBlogs, filterCategory, searchTerm]);


  const handleDelete = (id) => {
    // Check if user is logged in
    if (!currentUser) {
      navigate('/login', { state: { from: location } });
      return;
    }
    
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const blogToDelete = blogs.find(blog => blog.id === id);
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      setOriginalBlogs(updatedBlogs);
      
      // Show success toast
      toast.success(`Blog "${blogToDelete?.title || 'Post'}" has been deleted`, {
        position: "top-right",
        autoClose: 3000
      });
    }
  };

  const handleEdit = (id) => {
    // Check if user is logged in
    if (!currentUser) {
      navigate('/login', { state: { from: location } });
      return;
    }
    
    const blogToEdit = blogs.find(blog => blog.id === id);
    
    if (window.confirm(`Are you sure you want to edit "${blogToEdit?.title}"?`)) {
      navigate(`/blog/edit/${id}`);
    }
  };

  const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

  
   const  generateColorFromText = (text) => {
  if (!text) return 'hsl(0, 0%, 95%)';

  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash += text.charCodeAt(i);
  }

  let hue = hash % 360;
  return `hsl(${hue}, 70%, 80%)`;
}


  return (
    <div className="max-w-6xl mx-auto p-4 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Blog Posts</h1>
        
        {/* Create Blog Button - Only show if user is logged in */}
        {currentUser && (
          <Link
            to="/blog/create"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center"
          >
            <FaPlus className="mr-2" /> Create New Blog
          </Link>
        )}
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="md:w-2/3">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="md:w-2/3">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="bg-white rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold p-4 border-b">
          {filterCategory === "All" ? "All Blog Posts" : `${filterCategory} Posts`}
          <span className="text-gray-500 text-sm ml-2">
            ({filteredBlogs.length} {filteredBlogs.length === 1 ? 'post' : 'posts'})
          </span>
        </h2>
        
         
        <div className="min-h-[600px] w-full">
          {filteredBlogs.length === 0 ? (
            <div className="p-10 text-center text-gray-500 h-full flex flex-col items-center justify-center">
              <div className="mb-4 text-5xl opacity-50">📝</div>
              <p className="text-lg mb-4">No blogs found.</p>
              {currentUser ? (
                <div>
                  <p className="mb-4">
                    {filterCategory !== "All" 
                      ? `No posts found in the "${filterCategory}" category.` 
                      : 'Create your first blog post!'}
                  </p>
                  {filterCategory !== "All" ? (
                    <div className="flex flex-wrap gap-2 justify-center mt-2">
                      <button 
                        onClick={() => setFilterCategory("All")}
                        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                      >
                        View All Posts
                      </button>
                      <Link
                        to="/blog/create"
                        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center"
                      >
                        <FaPlus className="mr-2" /> Create New Post
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to="/blog/create"
                      className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center"
                    >
                      <FaPlus className="mr-2" /> Create New Post
                    </Link>
                  )}
                </div>
              ) : (
                <div>
                  <p className="mb-4">Please login to create a blog post.</p>
                  <button 
                    onClick={() => navigate('/login')}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBlogs.map(blog => (
                  <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow h-[480px] flex flex-col w-full">
                     
                    <div 
                      className="h-48 flex items-center justify-center w-full"
                      style={{ backgroundColor: blog.bgColor || generateColorFromText(blog.title) }}
                    >
                      <Link to={`/blog/${blog.id}`} className="w-full h-full flex items-center justify-center">
                        <h3 className="text-xl font-semibold text-center px-4 text-gray-800">
                          {blog.title}
                        </h3>
                      </Link>
                    </div>

                    <div className="p-4 flex flex-col flex-grow w-full">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-gray-500">
                          {formatDate(blog.date)} • {blog.readTime}
                        </p>
                        <p className="text-sm font-medium">By {blog.author}</p>
                      </div>

                      <div className="mb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                          {blog.category}
                        </span>
                      </div>

                      {blog.tags?.length > 0 && (
                        <div className="flex flex-wrap mb-3">
                          {blog.tags.map((tag, index) => (
                            <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-2 mb-1">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{blog.excerpt}</p>

                      <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100 w-full">
                        <Link 
                          to={`/blog/${blog.id}`}
                          className="text-purple-600 hover:text-purple-800 font-medium"
                        >
                          Read More
                        </Link>
                        {currentUser && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(blog.id)}
                              className="bg-purple-600 text-white p-2 rounded
                               hover:bg-purple-700 transition-colors cursor-pointer"
                              title="Edit Blog"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="bg-purple-700 text-white p-2 rounded hover:bg-purple-800 transition-colors
                              cursor-pointer"
                              title="Delete Blog"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                 
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Login prompt for non-authenticated users */}
      {!currentUser && (
        <div className="text-center p-6 bg-purple-50 border border-purple-200 rounded-lg shadow-sm my-4">
          <h3 className="text-xl font-semibold mb-2">Want to share your thoughts?</h3>
          <p className="mb-4">Log in to create, edit, or delete blog posts.</p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;