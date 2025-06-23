
import React, { useState } from 'react';
import { Send, Plus, Menu, X, Paperclip, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Textarea } from '../components/ui/textarea';
import Navigation from '../components/Navigation';

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  timestamp: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const EmailManagement = () => {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      title: 'Housewarming Ceremony',
      messages: [
        { id: '1', role: 'user', content: 'Help me create an invitation email for my housewarming ceremony', timestamp: '2 hours ago' },
        { id: '2', role: 'assistant', content: 'I\'d be happy to help you create a housewarming invitation email! Here\'s a warm and inviting template...', timestamp: '2 hours ago' }
      ],
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      title: 'Business Reply Email',
      messages: [
        { id: '3', role: 'user', content: 'Generate a professional reply to a business proposal', timestamp: '1 day ago' }
      ],
      timestamp: '1 day ago'
    },
    {
      id: '3',
      title: 'Email Summary',
      messages: [
        { id: '4', role: 'user', content: 'Please summarize this long email thread for me', timestamp: '3 days ago' }
      ],
      timestamp: '3 days ago'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      let chatId = activeChat;
      let updatedChats = [...chats];
      
      if (!activeChat) {
        // Create new chat with title from first message
        const newChatTitle = message.slice(0, 30).replace(/[^\w\s]/gi, '').trim() || 'New Chat';
        chatId = Date.now().toString();
        const newChat: Chat = {
          id: chatId,
          title: newChatTitle,
          messages: [],
          timestamp: 'now'
        };
        updatedChats = [newChat, ...chats];
        setActiveChat(chatId);
      }

      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: message,
        timestamp: 'now'
      };

      updatedChats = updatedChats.map(chat => 
        chat.id === chatId 
          ? { ...chat, messages: [...chat.messages, userMessage] }
          : chat
      );

      setChats(updatedChats);
      setMessage('');

      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'I\'ll help you with that! Let me analyze your request and provide you with the best solution.',
          timestamp: 'now'
        };

        setChats(prev => prev.map(chat => 
          chat.id === chatId 
            ? { ...chat, messages: [...chat.messages, aiMessage] }
            : chat
        ));
      }, 1000);
    }
  };

  const createNewChat = () => {
    setActiveChat(null);
    setSidebarOpen(false);
  };

  const getCurrentChat = () => {
    return chats.find(chat => chat.id === activeChat);
  };

  const getCurrentChatTitle = () => {
    const currentChat = getCurrentChat();
    return currentChat?.title || 'New Chat';
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative overflow-hidden flex flex-col`}>
      <Navigation />
      
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

      <div className="flex flex-1 pt-20 relative z-10">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 ${theme === 'dark' ? 'bg-black/40' : 'bg-white/40'} backdrop-blur-md border-r ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/30'} flex flex-col overflow-hidden`}>
          <div className="p-4 border-b border-inherit">
            <button 
              onClick={createNewChat}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Plus size={18} />
              New Chat
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => {
                    setActiveChat(chat.id);
                    setSidebarOpen(false);
                  }}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 group ${
                    activeChat === chat.id 
                      ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30' 
                      : theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-100/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'} truncate flex-1`}>
                      {chat.title}
                    </h4>
                    <ChevronRight size={14} className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} mt-1 block`}>
                    {chat.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/30'} ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-md`}>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100/50'} transition-colors`}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {getCurrentChatTitle()}
              </h1>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {!activeChat ? (
              /* Welcome Screen */
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="text-center mb-8">
                  <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
                    <span style={{ textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.7)' : 'none' }}>
                      Email Management
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Assistant
                    </span>
                  </h1>
                  <p 
                    className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
                    style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}
                  >
                    What are you working on?
                  </p>
                </div>
              </div>
            ) : (
              /* Chat Messages */
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-3xl mx-auto space-y-6">
                  {getCurrentChat()?.messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] ${msg.role === 'user' 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                        : theme === 'dark' ? 'bg-white/5 text-white' : 'bg-gray-100 text-gray-900'
                      } rounded-2xl px-4 py-3`}>
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-6">
              <div className="max-w-2xl mx-auto">
                <div className={`relative ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'} rounded-2xl focus-within:ring-0 focus-within:outline-none`}>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask anything..."
                    className={`min-h-[120px] max-h-[200px] resize-none border-none ${theme === 'dark' ? 'bg-transparent text-white placeholder-gray-400' : 'bg-transparent text-gray-800 placeholder-gray-500'} focus:ring-0 focus-visible:ring-0 focus-visible:outline-none pr-20 scrollbar-thin ${theme === 'dark' ? 'scrollbar-thumb-gray-600 scrollbar-track-transparent' : 'scrollbar-thumb-gray-400 scrollbar-track-transparent'}`}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    style={{ 
                      scrollbarWidth: '6px',
                      scrollbarColor: theme === 'dark' ? '#4B5563 transparent' : '#9CA3AF transparent'
                    }}
                  />
                  
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <button
                      className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}
                      aria-label="Upload file"
                    >
                      <Paperclip size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                    </button>
                    
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        message.trim() 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                          : theme === 'dark' ? 'bg-white/10 text-gray-500' : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
                
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-center mt-2`}>
                  Upload emails to generate replies or get summaries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailManagement;
