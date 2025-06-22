
import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-8 left-8 right-8 z-50 px-6 py-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl font-regular`}>
          <span style={{ textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
            One_Office.ai
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
            style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
          >
            Features
          </a>
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
            className={`p-2 ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'} transition-colors duration-300 rounded-full hover:bg-white/10`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-purple-500/20 rounded-b-2xl mt-2">
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className={`block ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'} transition-colors`}>
              Features
            </a>
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
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
