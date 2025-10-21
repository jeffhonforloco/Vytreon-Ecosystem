import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const SireIQChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm SireIQ, your AI assistant. Ask me anything about coding, content creation, data analysis, or creative ideas!",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response (replace with actual SireIQ API call)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  // Demo responses - replace with actual API integration
  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('code') || lowerInput.includes('programming')) {
      return "I can help you with coding! Whether it's Python, JavaScript, React, or any other language, I can assist with debugging, writing functions, explaining concepts, or building entire applications. What would you like to code?";
    } else if (lowerInput.includes('content') || lowerInput.includes('write')) {
      return "I'm great at content creation! I can help you write blog posts, social media content, marketing copy, emails, or any other written content. Just tell me what you need and your target audience.";
    } else if (lowerInput.includes('data') || lowerInput.includes('analyze')) {
      return "I can analyze data for you! Whether it's creating visualizations, finding patterns, generating reports, or providing insights from your data, I'm here to help. What data would you like to analyze?";
    } else if (lowerInput.includes('idea') || lowerInput.includes('brainstorm')) {
      return "Let's brainstorm together! I can help generate creative ideas for projects, marketing campaigns, product features, content strategies, or business solutions. What are you working on?";
    } else if (lowerInput.includes('image') || lowerInput.includes('design')) {
      return "I can help with image generation and design! Describe what you'd like to create - whether it's logos, illustrations, UI mockups, or any visual content. I'll help bring your vision to life.";
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! 👋 I'm SireIQ, your AI creative assistant. I can help you with coding, content creation, data analysis, brainstorming ideas, and much more. What would you like to work on today?";
    } else if (lowerInput.includes('help') || lowerInput.includes('what can you do')) {
      return "I can help you with:\n\n🎨 Generate creative ideas\n💻 Write and debug code\n📝 Create engaging content\n📊 Analyze data and insights\n🖼️ Generate images and designs\n🎵 Compose music\n\nWhat interests you?";
    } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return "SireIQ is free to start! Create an account at sireiq.com to get started with our generous free tier. For advanced features and higher usage limits, we have affordable paid plans. Would you like to learn more?";
    } else {
      return `That's an interesting question! "${input}" - I'm a demo version right now, but the full SireIQ platform at sireiq.com can provide comprehensive AI assistance for all your creative and technical needs. Try the real thing for detailed, helpful responses!`;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Chat Container */}
      <div className="glass-strong rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent/20 to-accent-secondary/20 p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">SireIQ Assistant</h3>
              <p className="text-sm text-muted-foreground">AI-powered creative platform</p>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-background/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-accent to-accent-secondary text-white'
                    : 'glass-card text-foreground'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-accent" />
                <span className="text-sm text-muted-foreground">SireIQ is thinking...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-background/30">
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground px-4 py-3 glass-card rounded-xl"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-3 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <Send size={20} />
              )}
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            This is a demo. Visit{' '}
            <a href="https://sireiq.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              sireiq.com
            </a>
            {' '}for the full experience
          </p>
        </form>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "Help me write a blog post",
            "Debug my Python code",
            "Analyze sales data",
            "Generate a logo idea"
          ].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInputValue(suggestion)}
              className="glass-card px-4 py-2 rounded-full text-sm text-foreground hover:glass-strong transition-all duration-300 hover:scale-105"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SireIQChat;

