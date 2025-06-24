import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus, Menu, X, Paperclip, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Textarea } from '../components/ui/textarea';
import { ScrollArea } from '../components/ui/scroll-area';

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
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      title: 'Housewarming Ceremony',
      messages: [
        { id: '1', role: 'user', content: 'Help me create an invitation email for my housewarming ceremony', timestamp: '2 hours ago' },
        { id: '2', role: 'assistant', content: 'I\'d be happy to help you create a housewarming invitation email! Here\'s a warm and inviting template:\n\nSubject: You\'re Invited to Our Housewarming Celebration! 🏡\n\nDear [Name],\n\nWe\'re excited to invite you to celebrate our new home with us! After months of planning and decorating, we\'re finally ready to share our space with the people who matter most to us.\n\n📅 Date: [Date]\n⏰ Time: [Time]\n📍 Address: [Your Address]\n\nJoin us for an evening of good food, great company, and a tour of our new place. We\'ll have appetizers, drinks, and plenty of stories about our moving adventures!\n\nPlease RSVP by [Date] so we can plan accordingly.\n\nWe can\'t wait to see you and share this special milestone with you!\n\nWarm regards,\n[Your Names]', timestamp: '2 hours ago' },
        { id: '3', role: 'user', content: 'That\'s perfect! Can you make it a bit more casual and add something about bringing a dish?', timestamp: '2 hours ago' },
        { id: '4', role: 'assistant', content: 'Absolutely! Here\'s a more casual version with a potluck element:\n\nSubject: Come Party at Our New Place! 🎉\n\nHey [Name]!\n\nGuess what? We finally got all our boxes unpacked (well, mostly 😅) and we\'re ready to show off our new digs!\n\nYou\'re invited to our housewarming party:\n📅 [Date]\n⏰ [Time] \n📍 [Your Address]\n\nWe\'re doing a casual potluck style - if you could bring a dish to share, that would be awesome! We\'ve got drinks covered and will have some snacks, but the more food the merrier!\n\nCome ready to eat, drink, laugh, and get the full house tour (including the closet we\'re pretending is organized).\n\nJust shoot us a text to let us know you\'re coming!\n\nCan\'t wait to celebrate with you!\n\n[Your Names]', timestamp: '2 hours ago' }
      ],
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      title: 'Business Reply Email',
      messages: [
        { id: '5', role: 'user', content: 'Generate a professional reply to a business proposal', timestamp: '1 day ago' },
        { id: '6', role: 'assistant', content: 'I\'d be happy to help you craft a professional business proposal reply. Here\'s a template:\n\nSubject: Re: [Original Proposal Subject]\n\nDear [Name],\n\nThank you for taking the time to present your proposal for [project/service]. We appreciate the detailed information and the effort you\'ve put into understanding our needs.\n\nAfter careful review with our team, we are [interested in moving forward/need some clarifications/have some concerns]. \n\n[If interested]: We would like to schedule a follow-up meeting to discuss the next steps and finalize the details.\n\n[If need clarifications]: We have a few questions regarding [specific areas] that we\'d like to address before making a decision.\n\n[If declining]: While your proposal has merit, we\'ve decided to pursue a different direction at this time.\n\nWe will be in touch by [date] with our decision/next steps.\n\nThank you again for your time and consideration.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Name]', timestamp: '1 day ago' }
      ],
      timestamp: '1 day ago'
    },
    {
      id: '3',
      title: 'Email Summary',
      messages: [
        { id: '7', role: 'user', content: 'Please summarize this long email thread for me', timestamp: '3 days ago' },
        { id: '8', role: 'assistant', content: 'I\'d be happy to help summarize your email thread! Please paste the email content you\'d like me to summarize, and I\'ll provide you with:\n\n• Key points and decisions made\n• Action items and deadlines\n• Important participants and their roles\n• Next steps or follow-up required\n\nJust share the email thread and I\'ll create a clear, concise summary for you.', timestamp: '3 days ago' }
      ],
      timestamp: '3 days ago'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollToBottom(!isNearBottom && getCurrentChat()?.messages.length > 0);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, activeChat]);

  // Focus textarea after sending message
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [chats]);

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

  return (
    <div className={`h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative overflow-hidden flex flex-col`}>
      {/* Background gradients - same as main page */}
      <div className="fixed top-0 right-0 w-[300px] h-[300px] opacity-20 z-0" style={{ background: 'radial-gradient(circle at 100% 0%, #3B0764 0%, #B32C76 40%, transparent 70%)', filter: 'blur(20px)' }} />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] opacity-20 z-0" style={{ background: 'radial-gradient(circle at 0% 100%, #3B0764 0%, #B32C76 40%, transparent 70%)', filter: 'blur(20px)' }} />

      {/* Custom scrollbar styles for both themes */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${theme === 'dark' ? '#ffffff' : '#6b7280'} !important;
          border-radius: 3px;
          transition: background 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${theme === 'dark' ? '#e5e7eb' : '#4b5563'} !important;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: ${theme === 'dark' ? '#ffffff transparent' : '#6b7280 transparent'};
        }
      `}</style>

      {/* Header */}
      <nav className={`flex-shrink-0 px-4 sm:px-6 py-4 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-md ${theme === 'dark' ? 'border-white/10' : 'border-gray-200/30'} border-b w-full relative z-50`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100/50 text-gray-800'} transition-colors`}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a href="/" className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xl sm:text-2xl font-regular`}>
              <span style={{ textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
                One_Office.ai
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'} transition-colors duration-300 rounded-full ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100/50'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 relative z-10 overflow-hidden">
        {/* Sidebar - Responsive */}
        <div className={`${sidebarOpen ? 'w-full sm:w-80' : 'w-0'} transition-all duration-300 ${theme === 'dark' ? 'bg-black/40' : 'bg-white/40'} backdrop-blur-md border-r ${theme === 'dark' ? 'border-white/20' : 'border-gray-200/40'} flex flex-col overflow-hidden flex-shrink-0 ${sidebarOpen ? 'absolute sm:relative z-20 h-full' : ''}`}>
          <div className="p-4 border-b border-inherit flex-shrink-0">
            <button onClick={createNewChat} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg text-sm sm:text-base">
              <Plus size={18} />
              New Chat
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <div className="space-y-2">
              {chats.map((chat) => (
                <div key={chat.id} onClick={() => { setActiveChat(chat.id); setSidebarOpen(false); }} className={`p-3 rounded-lg cursor-pointer transition-all duration-200 group ${activeChat === chat.id ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30' : theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100/60'}`}>
                  <div className="flex items-center justify-between">
                    <h4 className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'} truncate flex-1`}>
                      {chat.title}
                    </h4>
                  </div>
                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1 block`}>
                    {chat.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Responsive */}
        <div className="flex-1 flex flex-col min-w-0">
          {!activeChat ? (
            /* Welcome Screen */
            <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
              <div className="text-center mb-8">
                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
                  <span style={{ textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.7)' : 'none' }}>
                    Email Management
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Assistant
                  </span>
                </h1>
                <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto px-4`} style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}>
                  What are you working on?
                </p>
              </div>
            </div>
          ) : (
            /* Chat Interface */
            <>
              {/* Chat Messages Area */}
              <div className="flex-1 overflow-hidden relative">
                <div 
                  ref={chatContainerRef} 
                  onScroll={handleScroll} 
                  className="h-full overflow-y-auto custom-scrollbar"
                  style={{ 
                    scrollBehavior: 'smooth',
                    paddingBottom: '1rem'
                  }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="max-w-3xl mx-auto space-y-6">
                      {getCurrentChat()?.messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] sm:max-w-[80%] ${msg.role === 'user' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : theme === 'dark' ? 'bg-white/10 text-white backdrop-blur-sm' : 'bg-gray-100/80 text-gray-900 backdrop-blur-sm'} rounded-xl px-4 py-3`}>
                            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{msg.content}</p>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>
                </div>

                {/* Scroll to bottom button */}
                {showScrollToBottom && (
                  <button 
                    onClick={scrollToBottom} 
                    className={`absolute bottom-4 right-4 sm:right-6 p-3 rounded-full ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100/80 hover:bg-gray-200/80'} backdrop-blur-sm transition-all duration-300 shadow-lg z-10`}
                  >
                    <ChevronDown size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-800'} />
                  </button>
                )}
              </div>

              {/* Input Area - Fixed width container */}
              <div className="flex-shrink-0 p-4 sm:p-6">
                <div className="w-full max-w-3xl mx-auto">
                  <div className="relative p-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <div className={`relative ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm rounded-lg`}>
                      <Textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask anything..."
                        className={`w-full min-h-[60px] max-h-[200px] resize-none border-none bg-transparent
                          ${theme === 'dark' ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'}
                          focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pr-16 sm:pr-20 rounded-lg custom-scrollbar
                        `}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 sm:gap-2">
                        <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200/50'} transition-colors`} aria-label="Upload file">
                          <Paperclip size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                        </button>
                        
                        <button onClick={handleSendMessage} disabled={!message.trim()} className={`p-2 rounded-lg transition-all duration-300 ${message.trim() ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' : theme === 'dark' ? 'bg-white/10 text-gray-500' : 'bg-gray-200/50 text-gray-400'}`}>
                          <Send size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-center mt-2`}>
                    Upload emails to generate replies or get summaries
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Input Area for Welcome Screen - Fixed width container */}
          {!activeChat && (
            <div className="flex-shrink-0 p-4 sm:p-6">
              <div className="w-full max-w-2xl mx-auto">
                <div className="relative p-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <div className={`relative ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm rounded-lg`}>
                    <Textarea
                      ref={textareaRef}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask anything..."
                      className={`w-full min-h-[60px] max-h-[200px] resize-none border-none bg-transparent
                        ${theme === 'dark' ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'}
                        focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pr-16 sm:pr-20 rounded-lg custom-scrollbar
                      `}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      style={{
                        lineHeight: '1.5',
                        minHeight: '60px',
                        maxHeight: `${8 * 1.5 * 16 + 24}px`,
                      }}
                    />
                    
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 sm:gap-2">
                      <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200/50'} transition-colors`} aria-label="Upload file">
                        <Paperclip size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                      </button>
                      
                      <button onClick={handleSendMessage} disabled={!message.trim()} className={`p-2 rounded-lg transition-all duration-300 ${message.trim() ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' : theme === 'dark' ? 'bg-white/10 text-gray-500' : 'bg-gray-200/50 text-gray-400'}`}>
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-center mt-2`}>
                  Upload emails to generate replies or get summaries
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailManagement;