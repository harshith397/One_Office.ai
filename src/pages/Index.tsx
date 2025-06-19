
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Top-right spotlight */}
      <div 
        className="absolute top-0 right-0 w-[15%] h-[40%] opacity-30"
        style={{
          background: 'linear-gradient(90deg, #3B0764 0%, #B32C76 100%)',
          filter: 'blur(15px)',
          borderRadius: '0 0 0 100%'
        }}
      />
      
      {/* Bottom-left spotlight */}
      <div 
        className="absolute bottom-0 left-0 w-[15%] h-[40%] opacity-30"
        style={{
          background: 'linear-gradient(90deg, #3B0764 0%, #B32C76 100%)',
          filter: 'blur(15px)',
          borderRadius: '0 100% 0 0'
        }}
      />
      
      {/* Main content overlay */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
