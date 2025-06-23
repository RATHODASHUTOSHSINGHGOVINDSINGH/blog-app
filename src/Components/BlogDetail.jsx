import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { FaCalendarAlt, FaClock, FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the post with the matching ID
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts);
      const foundPost = parsedPosts.find(p => p.id === id);
      
      if (foundPost) {
        setPost(foundPost);
        setLoading(false);
      } else {
        // If no post is found, set loading to false to display the not found message
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleEdit = () => {
    if (!currentUser) {
      navigate('/login', { state: { from: location } });
      return;
    }

    if (window.confirm(`Are you sure you want to edit "${post.title}"?`)) {
      navigate(`/blog/edit/${id}`);
    }
  };

  const handleDelete = () => {
    if (!currentUser) {
      navigate('/login', { state: { from: location } });
      return;
    }

    if (window.confirm('Are you sure you want to delete this post?')) {
      const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
      const updatedPosts = savedPosts.filter(p => p.id !== id);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      
      // Show success toast notification
      toast.success(`Blog "${post.title}" has been deleted`, {
        position: "top-right",
        autoClose: 3000
      });
      
      navigate('/blog');
    }
  };

    const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

  // Generate a background color based on the text
   const  generateColorFromText = (text) => {
  if (!text) return 'hsl(0, 0%, 95%)';

  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash += text.charCodeAt(i);
  }

  let hue = hash % 360;
  return `hsl(${hue}, 70%, 80%)`;
}

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-10">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
        <div className="text-center py-10">
          <div className="text-5xl mb-4 opacity-50">🔍</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <Link to="/blog" className="text-purple-600 hover:underline mb-4 flex items-center">
        ← Back to all posts
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
        {/* Header with colored background */}
        <div 
          className="h-64 relative flex items-center justify-center"
          style={{ backgroundColor: post.bgColor || generateColorFromText(post.title) }}
        >
          <h1 className="text-3xl font-bold text-center px-6 text-gray-800">
            {post.title}
          </h1>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center mb-6 text-sm text-gray-600">
            <div className="flex items-center mb-2 md:mb-0">
              <FaCalendarAlt className="mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            
            <div className="flex items-center mb-2 md:mb-0">
              <span className="inline-block bg-gray-200 rounded-full 
              m-2 px-3 py-1 text-sm font-semibold text-gray-700">
                {post.category}
              </span>
            </div>
            
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <FaUser className="mr-2 text-gray-500" />
            <span className="font-medium">Written by {post.author}</span>
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap mb-6">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-purple-100 text-purple-800
                 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="prose max-w-none mb-8">
            {post.content.split('\n').map((paragraph, index) => (
              paragraph ? <p key={index} className="mb-4">{paragraph}</p> : <br key={index} />
            ))}
          </div>
          
          {currentUser && (
            <div className="flex space-x-4 mt-6 pt-6 border-t">
              <button 
                onClick={handleEdit} 
                className="bg-purple-600 text-white px-4 py-2 
                rounded-md hover:bg-purple-700 flex items-center
                cursor-pointer "
              >
                <FaEdit className="mr-2" /> Edit Post
              </button>
              <button 
                onClick={handleDelete} 
                className="bg-purple-700
                 text-white px-4 py-2 rounded-md hover:bg-purple-800 
                 flex items-center cursor-pointer"
              >
                <FaTrash className="mr-2" /> Delete Post
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
