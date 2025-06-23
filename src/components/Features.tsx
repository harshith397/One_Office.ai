
import React from 'react';
import { FileText, MessageSquare, Shield, Zap, Globe, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Features = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'AI Email Management',
      description: 'Transform your email workflow with intelligent composition, smart replies, and automated summarization.',
      clickable: true,
      onClick: () => navigate('/email-management')
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Document Conversion',
      description: 'Convert documents seamlessly across formats with AI-powered precision and formatting preservation.',
      clickable: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption with fully offline capabilities ensuring your data never leaves your environment.',
      clickable: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'RAG Technology',
      description: 'Advanced retrieval-augmented generation for intelligent document analysis and contextual responses.',
      clickable: false
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Language Support',
      description: 'Process documents and emails in over 50 languages with native AI understanding.',
      clickable: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Streamlined workflows with role-based access controls and collaborative document management.',
      clickable: false
    }
  ];

  return (
    <section id="features" className="px-6 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`} style={{ textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Enterprise Success</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`} style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}>
            Discover the comprehensive suite of AI-powered tools designed to revolutionize your business operations and boost productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={feature.clickable ? feature.onClick : undefined}
              className={`group p-8 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'} hover:border-purple-500/50 transition-all duration-300 ${feature.clickable ? 'cursor-pointer hover:scale-105' : ''}`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300`} style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}>
                {feature.title}
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`} style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}>
                {feature.description}
              </p>

              {feature.clickable && (
                <div className="mt-4 text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Click to explore →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
