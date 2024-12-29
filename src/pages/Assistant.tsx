import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle, Plus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { Chat, Message } from "@/types/chat";
import { generateGeminiResponse } from "@/services/geminiService";

const AIAssistant = () => {
  const [chats, setChats] = useState<Chat[]>(() => {
    const saved = localStorage.getItem("chats");
    return saved ? JSON.parse(saved) : [{ 
      id: "1", 
      title: "New Chat", 
      messages: [{ role: "assistant" as const, content: "Hi! How can I help you today?" }] 
    }];
  });
  const [currentChatId, setCurrentChatId] = useState<string>("1");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chats]);

  const getCurrentChat = () => {
    return chats.find((chat) => chat.id === currentChatId) || chats[0];
  };

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [{ role: "assistant", content: "Hi! How can I help you today?" }],
    };
    setChats([...chats, newChat]);
    setCurrentChatId(newChat.id);
  };

  const deleteChat = (chatId: string) => {
    if (chats.length === 1) {
      toast({
        title: "Cannot delete",
        description: "You must have at least one chat.",
        variant: "destructive",
      });
      return;
    }
    
    const newChats = chats.filter(chat => chat.id !== chatId);
    setChats(newChats);
    if (chatId === currentChatId) {
      setCurrentChatId(newChats[0].id);
    }
  };

  const updateChatMessages = (chatId: string, newMessages: Message[]) => {
    setChats(chats.map(chat => 
      chat.id === chatId 
        ? { ...chat, messages: newMessages, title: newMessages[1]?.content.slice(0, 30) || "New Chat" }
        : chat
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const currentChat = getCurrentChat();
    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...currentChat.messages, userMessage];
    updateChatMessages(currentChatId, updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await generateGeminiResponse(input.trim());
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
      };
      updateChatMessages(currentChatId, [...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to get response from AI assistant. Please try again later.",
        variant: "destructive",
      });
      updateChatMessages(currentChatId, [...updatedMessages, { 
        role: "error", 
        content: "Sorry, I encountered an error. Please try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex h-screen bg-[#1A1F2C]">
      <Sheet>
        <SheetTrigger asChild className="lg:hidden absolute left-4 top-4">
          <Button variant="outline" size="icon">
            <MessageCircle className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72 bg-[#1A1F2C] border-r border-[#403E43]/20">
          <div className="flex flex-col h-full p-4">
            <Button onClick={createNewChat} className="mb-4 bg-[#9b87f5] hover:bg-[#7E69AB] font-semibold">
              <Plus className="mr-2 h-4 w-4" /> New Chat
            </Button>
            <ScrollArea className="flex-1">
              {chats.map((chat) => (
                <div key={chat.id} className="group relative">
                  <Button
                    variant={chat.id === currentChatId ? "secondary" : "ghost"}
                    className="w-full justify-start mb-2 text-left text-[#aaadb0] hover:bg-[#403E43]/20 font-medium"
                    onClick={() => setCurrentChatId(chat.id)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span className="truncate">{chat.title}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteChat(chat.id)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/10 hover:text-red-500"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden lg:flex w-72 h-full p-4 border-r border-[#403E43]/20 bg-[#1A1F2C] flex-col">
        <Button onClick={createNewChat} className="mb-4 bg-[#9b87f5] hover:bg-[#7E69AB] font-semibold">
          <Plus className="mr-2 h-4 w-4" /> New Chat
        </Button>
        <ScrollArea className="flex-1">
          {chats.map((chat) => (
            <div key={chat.id} className="group relative">
              <Button
                variant={chat.id === currentChatId ? "secondary" : "ghost"}
                className="w-full justify-start mb-2 text-left text-[#aaadb0] hover:bg-[#403E43]/20 font-medium"
                onClick={() => setCurrentChatId(chat.id)}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="truncate">{chat.title}</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteChat(chat.id)}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/10 hover:text-red-500"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </ScrollArea>
      </div>

      <div className="flex-1 flex flex-col h-full">
        <ScrollArea className="flex-1 p-4" ref={chatRef}>
          {getCurrentChat().messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isLoading && (
            <div className="flex space-x-1.5 justify-center p-2">
              <div className="w-1.5 h-1.5 bg-[#9b87f5]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-[#9b87f5]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-[#9b87f5]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          )}
        </ScrollArea>
        <div className="p-4 border-t border-[#403E43]/20 bg-[#1A1F2C]">
          <ChatInput
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            handleKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
