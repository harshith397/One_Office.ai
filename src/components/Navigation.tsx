
import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-md ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/30'} border-b w-full`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl font-regular`}>
          <span style={{ textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
            One_Office.ai
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`${location.pathname === '/' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400' : theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
            style={{ textShadow: theme === 'dark' && location.pathname !== '/' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
          >
            Home
          </Link>
          <a 
            href="#about" 
            className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
            style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
            style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
          >
            Contact
          </a>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'} transition-colors duration-300 rounded-full ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100/50'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm ${theme === 'dark' ? 'border-purple-500/20' : 'border-gray-200/30'} border-b rounded-b-2xl mt-2`}>
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className={`block ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'} transition-colors`}>
              Home
            </Link>
            <a href="#about" className={`block ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'} transition-colors`}>
              About
            </a>
            <a href="#contact" className={`block ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'} transition-colors`}>
              Contact
            </a>
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'} transition-colors w-full text-left`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
