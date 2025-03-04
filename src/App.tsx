import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="font-sans bg-background text-text-primary">
        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-primary to-secondary py-4 shadow-md">
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Logo - Replace with your logo component */}
            <Link to="/" className="text-text-primary text-2xl font-bold flex items-center">
              {/* <img src="/harbor-ai-logo.svg" alt="Harbor AI Logo" className="h-8 mr-2" /> */}
              Harbor AI
            </Link>

            {/* Navigation Links */}
            <div className="space-x-6">
              <Link to="/" className="text-text-primary hover:text-gray-200">Home</Link>
              <Link to="/about" className="text-text-primary hover:text-gray-200">About</Link>
              <Link to="/services" className="text-text-primary hover:text-gray-200">Services</Link>
              <Link to="/contact" className="text-text-primary hover:text-gray-200">Contact</Link>
              <Link to="/blog" className="text-text-primary hover:text-gray-200">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 py-6 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Navigation Links in Footer */}
              <div className="mb-4 md:mb-0">
                <Link to="/" className="text-text-secondary hover:text-primary mr-4">Home</Link>
                <Link to="/about" className="text-text-secondary hover:text-primary mr-4">About</Link>
                <Link to="/services" className="text-text-secondary hover:text-primary mr-4">Services</Link>
                <Link to="/contact" className="text-text-secondary hover:text-primary mr-4">Contact</Link>
                <Link to="/blog" className="text-text-secondary hover:text-primary">Blog</Link>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 text-text-secondary">
                <a href="#" className="hover:text-primary"><Github size={20} /></a>
                <a href="#" className="hover:text-primary"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
              </div>
            </div>
            <p className="text-center text-text-secondary mt-4">&copy; {new Date().getFullYear()} Harbor AI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
