
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Top-right semi-circular spotlight */}
      <div 
        className="absolute top-0 right-0 w-[300px] h-[300px] opacity-20"
        style={{
          background: 'radial-gradient(circle at 100% 0%, #3B0764 0%, #B32C76 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Bottom-left semi-circular spotlight */}
      <div 
        className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-20"
        style={{
          background: 'radial-gradient(circle at 0% 100%, #3B0764 0%, #B32C76 40%, transparent 70%)',
          filter: 'blur(20px)',
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
