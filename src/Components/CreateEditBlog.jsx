import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { v4 as uuid } from 'uuid';
import { FaSave, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CreateEditBlog = ({ editMode = false, setPosts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [authorName, setAuthorName] = useState('');
  
  useEffect(() => {
  if (!editMode || !id) return;

  try {
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    const post = posts.find(p => p.id === id);

    if (post) {
      setTitle(post.title || '');
      setContent(post.content || '');
      setCategory(post.category || 'General');
      setTags(post.tags || []);
      setAuthorName(post.author || '');
    } else {
      toast.error("Blog post not found");
     
    }
  } catch (error) {
    toast.error("Error loading blog post data");
    console.error("Error parsing blog posts:", error);
     
  }
}, [editMode, id]);

   
  
  // Generate a background color based on the text
  const generateColorFromText = (text) => {
    if (!text) return 'hsl(0, 0%, 95%)';

    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash += text.charCodeAt(i);
    }

    let hue = hash % 360;
    return `hsl(${hue}, 70%, 80%)`;
  }
 
   const handleAddTag = () => {
  const newTag = tag.trim();
  if (newTag && !tags.includes(newTag)) {
    setTags([...tags, newTag]);
  }
  setTag('');
};


  const removeTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !content) {
      toast.error('Title and content are required');
      return;
    }
    
    if (!authorName.trim()) {
      toast.error('Author name is required');
      return;
    }
    
    try {
      // Create post object with UUID
      const postId = editMode && id ? id : uuid();
      
      const newPost = {
        id: postId,
        title,
        content,
        excerpt: content.substring(0, 150) + '...',
        category,
        tags,
        date: new Date().toISOString(),
        readTime: `${Math.max(1, Math.ceil(content.split(' ').length / 200))} min read`,
        author: authorName.trim(),
        comments: 0,
        bgColor: generateColorFromText(title)
      };
      
      // Save to localStorage and update state
      const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
      let updatedPosts;
      
      if (editMode) {
        // Update existing post
        updatedPosts = savedPosts.map(post => 
          post.id === postId ? newPost : post
        );
        toast.success('Blog post updated successfully!');
      } else {
        // Add new post
        updatedPosts = [newPost, ...savedPosts];
        toast.success('Blog post created successfully!');
      }
      
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      
      // If setPosts function is provided, update the state
      if (setPosts) {
        if (editMode) {
          setPosts(prevPosts => 
            prevPosts.map(post => 
              post.id === postId ? newPost : post
            )
          );
        } else {
          setPosts(prevPosts => [newPost, ...prevPosts]);
        }
      }
      
      // Navigate to the blog page
      navigate('/blog');
    } catch (err) {
      toast.error('Failed to save the blog post');
    }
  };

  // Categories
  const categories = ['General', 'Technology', 'Design', 'Development', 'Business', 'Lifestyle'];
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{editMode ? 'Edit Blog Post' : 'Create New Blog Post'}</h1>
        <Link to="/blog" className="text-purple-600 hover:text-purple-800">
          Back to Blog
        </Link>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter a compelling title for your blog"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
              Author Name
            </label>
            <input
              id="authorName"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your name"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
            Tags
          </label>
          <div className="flex">
            <input
              id="tags"
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Add a tag and press Enter"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap mb-6 p-2 bg-gray-50 rounded-md">
            {tags.map((t, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm mr-2 mb-2 flex items-center"
              >
                {t}
                <button
                  type="button"
                  onClick={() => removeTag(t)}
                  className="ml-2 text-xs text-purple-800 hover:bg-purple-200 rounded-full h-4 w-4 flex items-center justify-center"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            rows="12"
            placeholder="Write your blog post content here... Be creative and informative!"
            required
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <Link
            to="/blog"
            className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center"
          >
            <FaTimes className="mr-2" /> Cancel
          </Link>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 flex items-center cursor-pointer"
            disabled={!title || !content || !authorName.trim()}
          >
            <FaSave className="mr-2" /> {editMode ? 'Update' : 'Publish'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEditBlog;
