
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
      {/* Top-right semi-circular spotlight */}
      <div 
        className="fixed top-0 right-0 w-[300px] h-[300px] opacity-20 z-0"
        style={{
          background: 'radial-gradient(circle at 100% 0%, #3B0764 0%, #B32C76 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Bottom-left semi-circular spotlight */}
      <div 
        className="fixed bottom-0 left-0 w-[300px] h-[300px] opacity-20 z-0"
        style={{
          background: 'radial-gradient(circle at 0% 100%, #3B0764 0%, #B32C76 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content with top padding to account for fixed nav */}
      <div className="relative z-10 pt-20">
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
