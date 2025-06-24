🚀 **My Blog App with Firebase Auth is Live!**

I'm thrilled to share that I’ve built and deployed a secure and dynamic **Blog App** using **React + Firebase Authentication**! 🎉

🔹 **Tech Stack:** React + Vite, React Router, Firebase Auth, Tailwind CSS
🔹 **Hosted on:** Vercel
🔹 **Code:** https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH/blog-app
🔹 **Live:** https://blog-app-ashutosh-rathod-projects.vercel.app/

 

💡 **Real-world problem:**

Most blogging platforms either require complex setup or don’t offer personal control over content. People want a **secure, clean, and simple** place to publish their thoughts — where **only they** can manage their posts.

 

✅ **My solution:**

🔐 Firebase Auth for **secure login/signup**
📝 Only authenticated users can **Add ✍️ / Edit ✏️ / Delete ❌** their own blog posts
🧑‍💻 Full content ownership — no one else can modify your posts
🎨 Clean UI powered by Tailwind CSS
🌐 Hosted seamlessly on Vercel

---

✨ **Key Features:**

✅ Firebase Auth (Email/password sign-up and login)
✅ Protected Routes using `React Router`
✅ Add, Edit, Delete blogs — but **only if you're the owner**
✅ Responsive UI with Tailwind CSS
✅ Deployed on Vercel with blazing fast performance

---

📚 **What I learned while building this:**

🔐 Authentication & Authorization using Firebase
🔄 React hooks (useState, useEffect, useContext)
🚦 Route protection using `useNavigate` & `useLocation`
🧠 Real-world UX problems and how to solve them
💻 Clean, component-driven architecture with DRY code

---

# 📁 Portfolio Project Setup

## ✅ Installation

### 1. Install Vite with React

```bash
npm create vite@latest my-portfolio --template react
cd my-portfolio
npm install
npm run dev
```

### 2. Install Tailwind CSS v4

```bash
npm install tailwindcss @tailwindcss/vite
```

#### Configure `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Add Tailwind to `src/index.css`

```css
@import "tailwindcss";
```

### 3. Configure the Vite Plugin

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
```

### 4. Install React Router v7

```bash
npm install react-router
```

Wrap your app in `main.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 5. Initialize Git Repository

```bash
git init
git remote add origin <your-repo-url>
git add .
git commit -m "Initial commit"
git push origin main
```

### 6. Build and Deploy on Vercel

```bash
npm run build
```

Then:

1. Go to [Vercel](https://vercel.com/)
2. Import GitHub repo
3. Configure & Deploy

### 7. Add `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

# ✅ Firebase Auth Setup — Full Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Add project → Name it `vite-blog-auth`
3. Register Web App → Copy `firebaseConfig`

## Step 2: Install Firebase SDK

```bash
npm install firebase
```

## Step 3: Setup Firebase SDK

📄 **src/firebase.js**

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

## Step 4: Auth Pages

📄 **src/pages/Signup.jsx** and 📄 **src/pages/Login.jsx** (with React states and Firebase Auth methods)

## Step 5: App Routing

📄 **src/App.jsx**

```jsx
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

## Firebase Auth Configuration Error Fix:

✅ **Enable Email/Password Auth** in Firebase Console
✅ Add `localhost` and `vercel.app` to **Authorized Domains**

Restart server:

```bash
npm run dev
```

## 🌐 Deployment

1. Push to GitHub
2. Deploy from Vercel
3. Add domain in Firebase Auth → Authorized Domains
