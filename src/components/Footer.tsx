
import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer id="contact" className="px-6 py-16 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl font-regular mb-4`}>
              <span style={{ textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
                One_Office.ai
              </span>
            </div>
            <p 
              className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}
              style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
            >
              Crafting exceptional digital experiences with uncompromising quality and innovation.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 
              className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold mb-4`}
              style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
            >
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
                  style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
                  style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
                  style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 
              className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold mb-4`}
              style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
                  style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
                  style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300`}
                  style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 
              className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold mb-4`}
              style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
            >
              Connect
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className={`${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors p-2 rounded-lg hover:bg-purple-600/10`}
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className={`${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors p-2 rounded-lg hover:bg-purple-600/10`}
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className={`${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors p-2 rounded-lg hover:bg-purple-600/10`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className={`${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors p-2 rounded-lg hover:bg-purple-600/10`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center">
          <p 
            className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4 md:mb-0`}
            style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
          >
            © 2024 Premium. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a 
              href="#" 
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
              style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
              style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
