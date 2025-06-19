import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="px-6 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8">
          <Sparkles size={16} className="text-purple-400" />
          <span 
            className="text-sm text-white"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Premium Experience Awaits
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
            Transform Your
          </span>
          <br />
          <span 
            className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ textShadow: 'none' }}
          >
            Enterprise Workflow
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
        >
          Experience the perfect blend of sophistication and innovation. 
          Our premium solutions are crafted for those who demand excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 flex items-center gap-2">
            <span className="font-semibold">Start Your Journey</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm font-semibold"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              99.9%
            </div>
            <div 
              className="text-gray-400"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
            >
              Uptime Guaranteed
            </div>
          </div>
          
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              10k+
            </div>
            <div 
              className="text-gray-400"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
            >
              Happy Clients
            </div>
          </div>
          
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              24/7
            </div>
            <div 
              className="text-gray-400"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
            >
              Premium Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
