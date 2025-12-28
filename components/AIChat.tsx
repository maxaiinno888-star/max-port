
import React, { useState, useRef, useEffect } from 'react';
import { askUXAssistant } from '../services/geminiService';
import { Send, User, Bot, X, MessageSquare } from 'lucide-react';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Alex's AI assistant. Ask me anything about their design projects or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await askUXAssistant(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', text: response || '' }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-zinc-900 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 z-50 w-80 sm:w-96 bg-white border border-zinc-200 rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-900 text-white rounded-t-2xl">
          <div className="flex items-center gap-2">
            <Bot size={20} className="text-zinc-400" />
            <span className="font-bold text-sm tracking-widest uppercase">UX Assistant</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-zinc-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-900 text-white'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 text-zinc-400 rounded-2xl p-3 text-xs animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-zinc-100 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about my work..."
            className="flex-1 text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="bg-zinc-900 text-white p-2 rounded-xl hover:bg-zinc-700 disabled:bg-zinc-300 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default AIChat;
