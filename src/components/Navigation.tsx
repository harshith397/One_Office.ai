
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <span style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Premium
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Contact
          </a>
          <button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-purple-500/20">
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block text-white hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#about" className="block text-white hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#contact" className="block text-white hover:text-purple-400 transition-colors">
              Contact
            </a>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
