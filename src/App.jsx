import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";  
import Home from "./Components/Home";
import Blog from "./Blog";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import CreateEditBlog from "./Components/CreateEditBlog";
import { AuthProvider } from "./context/AuthContext";
import BlogDetail from "./Components/BlogDetail";
import About from "./Components/About";
import ProtectedRoute from "./context/ProtectedRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  // Load posts from localStorage on initial render
  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      try {
        setBlogPosts(JSON.parse(savedPosts));
      } catch (error) {
        console.error("Error parsing saved posts:", error);
      }
    }
  }, []);

  return (
    <AuthProvider>
      <div className="flex flex-col p-0 bg-purple-50 w-screen min-h-screen">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected routes */}
            <Route
              path="/blog/create"
              element={
                <ProtectedRoute> 
                  <CreateEditBlog setPosts={setBlogPosts} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog/edit/:id"
              element={
                <ProtectedRoute> 
                  <CreateEditBlog editMode={true} setPosts={setBlogPosts} />
                </ProtectedRoute>
              }
            />
          </Routes>
          
          {/* Toast Container */}
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
          />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
