import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  role: 'user' | 'assistant' | 'error';
  content: string;
}

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

const businessInfo = `
General Business Information:
Website: www.monet.com

Return Policy:
- 30-day return window with original receipt
- Items must be unused and in original packaging
- Refunds processed to original payment method

Support: support@monet.com

Hours of Operation:
Monday-Friday: 9:00 AM - 6:00 PM EST
Saturday: 10:00 AM - 4:00 PM EST
Sunday: Closed

Contact:
Phone: +1 (555) 123-4567
Email: hello@monet.com
`;

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessageToGemini = async (userMessage: string): Promise<Message> => {
    const API_KEY = 'AIzaSyAugm9XqkjYvCdis7hyd1q0NiAA8XOTA8w';
    const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${businessInfo}\n\nUser: ${userMessage}\nAssistant: Please provide a response based on the business information above. Keep responses concise and friendly.`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get response from API');
    }

    const data: GeminiResponse = await response.json();
    return {
      role: 'assistant',
      content: data.candidates[0].content.parts[0].text
    };
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { role: 'user', content: inputMessage }]);
      setInputMessage('');

      const response = await sendMessageToGemini(inputMessage);
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'error', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div 
        className={`fixed bottom-4 right-4 w-96 h-[600px] glass-card rounded-xl shadow-2xl transition-all duration-300 transform ${
          isChatOpen ? 'translate-y-0 opacity-100' : 'translate-y-[calc(100%+1rem)] opacity-0'
        } z-50`}
      >
        <div className="flex flex-col h-full border border-neutral-200/50 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-neutral-200/50 flex justify-between items-center bg-white/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <h2 className="text-lg font-semibold text-neutral-800">Business Assistant</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsChatOpen(false)}
              className="h-8 w-8 hover:bg-neutral-100/50"
            >
              <X className="h-4 w-4 text-neutral-600" />
            </Button>
          </div>
          
          <div 
            ref={chatRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50"
          >
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] animate-in slide-in-from-bottom-2 ${
                  message.role === 'user' 
                    ? 'ml-auto bg-accent text-white' 
                    : message.role === 'error'
                    ? 'bg-red-100 text-red-600 border border-red-200'
                    : 'bg-white border border-neutral-200/50 shadow-sm'
                } rounded-2xl p-3`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="flex space-x-2 justify-center p-4">
                <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-neutral-200/50 bg-white/50 backdrop-blur-sm">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our locations, hours, or policies..."
                className="flex-1 bg-white/70 border-neutral-200/50 focus:border-accent focus:ring-accent"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading}
                size="icon"
                className="bg-accent hover:bg-accent/90 text-white shadow-md"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg z-50 bg-accent hover:bg-accent/90 animate-float"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
};

export default ChatInterface;