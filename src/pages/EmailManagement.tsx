
import React, { useState } from 'react';
import { Send, Upload, FileText, MessageSquare, History, Plus, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';

const EmailManagement = () => {
  const { theme } = useTheme();
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([
    { id: '1', title: 'Email Summary Request', preview: 'Please summarize this email...', timestamp: '2 hours ago' },
    { id: '2', title: 'Reply Generation', preview: 'Generate a professional reply...', timestamp: '1 day ago' },
    { id: '3', title: 'Email Draft', preview: 'Create an email about...', timestamp: '3 days ago' },
  ]);

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Create Email',
      description: 'Generate professional emails with AI assistance',
      action: () => setMessage('Help me create a professional email about...')
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Generate Reply',
      description: 'Upload an email and get intelligent reply suggestions',
      action: () => setMessage('I need help generating a reply to this email...')
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Summarize Email',
      description: 'Get concise summaries of lengthy email threads',
      action: () => setMessage('Please summarize this email for me...')
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: 'Upload & Analyze',
      description: 'Upload emails for detailed analysis and insights',
      action: () => setMessage('I want to upload an email for analysis...')
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newChat = {
        id: Date.now().toString(),
        title: message.slice(0, 30) + '...',
        preview: message,
        timestamp: 'now'
      };
      setChats([newChat, ...chats]);
      setActiveChat(newChat.id);
      setMessage('');
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
      {/* Background gradients */}
      <div 
        className="fixed top-0 right-0 w-[300px] h-[300px] opacity-20 z-0"
        style={{
          background: 'radial-gradient(circle at 100% 0%, #3B0764 0%, #B32C76 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      <div 
        className="fixed bottom-0 left-0 w-[300px] h-[300px] opacity-20 z-0"
        style={{
          background: 'radial-gradient(circle at 0% 100%, #3B0764 0%, #B32C76 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <Navigation />

      <div className="flex pt-20 h-screen relative z-10">
        {/* Left Sidebar - Chat History */}
        <div className={`w-80 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-md ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/30'} border-r flex flex-col`}>
          <div className="p-6 border-b border-inherit">
            <button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
              onClick={() => setMessage('Start a new email task...')}
            >
              <Plus size={18} />
              New Chat
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex items-center gap-2 mb-4">
              <History size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-800'} />
              <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Recent Chats
              </h3>
            </div>
            
            <div className="space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    activeChat === chat.id 
                      ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30' 
                      : theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-100/50'
                  }`}
                >
                  <h4 className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-1`}>
                    {chat.title}
                  </h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1 line-clamp-2`}>
                    {chat.preview}
                  </p>
                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    {chat.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-inherit">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your email request..."
                className={`flex-1 px-3 py-2 rounded-lg border ${theme === 'dark' ? 'bg-black/30 border-white/20 text-white placeholder-gray-400' : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Dashboard */}
        <div className="flex-1 p-8">
          {!activeChat ? (
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                  <Sparkles size={16} className="text-purple-400" />
                  <span 
                    className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                    style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                  >
                    AI-Powered Email Assistant
                  </span>
                </div>

                <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
                  <span style={{ textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.7)' : 'none' }}>
                    Email Management
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </h1>

                <p 
                  className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
                  style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                >
                  Streamline your email workflow with AI-powered assistance for creating, replying, and analyzing emails.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    onClick={feature.action}
                    className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'} hover:border-purple-500/50 transition-all duration-300 cursor-pointer group hover:scale-105`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                        <div className="text-purple-400">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                          {feature.title}
                        </h3>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className={`flex-1 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50/50'} rounded-lg p-6 mb-4 backdrop-blur-sm border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    AI
                  </div>
                  <div>
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      AI Assistant
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Ready to help with your email task
                    </p>
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-black/20' : 'bg-white/50'} border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/30'}`}>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    I'm ready to help you with your email task. Please provide more details about what you'd like to do - create an email, generate a reply, summarize content, or analyze an uploaded email.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailManagement;
