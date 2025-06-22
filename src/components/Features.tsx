import React from 'react';
import { Shield, FileText, Headphones, BarChart2, MailOpen, Plug, BookOpen } from 'lucide-react'; // Added BookOpen for RAG Document Intelligence

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart Document Conversion",
      description: "Convert documents across 50+ formats with AI-powered accuracy. Maintain formatting, extract data intelligently, and process thousands of files simultaneously with enterprise-grade reliability."
    },
    {
      icon: MailOpen,
      title: "AI Email Management",
      description: "Generate contextual emails, automate responses, and manage communications with intelligent categorization. Our AI understands your business tone and maintains professional consistency."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Complete data sovereignty with on-premise deployment. Zero data leaves your infrastructure. Military-grade encryption ensures your sensitive information stays absolutely secure."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock premium support from our expert team whenever you need assistance."
    },
    {
      icon: BarChart2,
      title: "Advanced Analytics",
      description: "Comprehensive insights into document workflows, email patterns, and productivity metrics. Make data-driven decisions with detailed reports and real-time dashboards."
    },
    {
      icon: Plug,
      title: "Seamless Integration",
      description: "Connect with your existing enterprise tools via robust APIs. Works with Microsoft 365, Google Workspace, Slack, and 100+ business applications out of the box."
    },
    {
      icon: BookOpen,
      title: "RAG Document Intelligence",
      description: "Intelligent document summarization and Q&A with advanced RAG technology. Extract insights, generate summaries, and find information across your entire document ecosystem instantly."
    },
    {
      icon: Shield, // You can choose a more suitable icon if desired
      title: "Online & Offline Enterprise Access",
      description: "Enjoy uninterrupted productivity with both online and offline access to all enterprise tools. Our platform ensures seamless operation, robust security, and full functionality—whether you're connected to the cloud or working locally within your secure infrastructure."
    }
  ];

  return (
    <section id="features" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-5xl font-regular text-white mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}
          >
            Why Choose 
            <span
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-3"
              style={{ textShadow: 'none' }}
            >
              One_Office.ai
            </span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Discover the advanced AI capabilities that make us the preferred choice for enterprise leaders seeking secure, efficient, and intelligent office automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                
                <h3 
                  className="text-xl font-semibold text-white mb-3"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  className="text-gray-400 leading-relaxed"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 font-semibold">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
