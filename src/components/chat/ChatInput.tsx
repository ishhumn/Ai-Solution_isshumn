import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const ChatInput = ({ input, setInput, handleSubmit, isLoading, handleKeyPress }: ChatInputProps) => {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        disabled={isLoading}
        className="flex-1 bg-[#403E43]/20 border-[#403E43]/20 text-[#aaadb0] focus:border-[#9b87f5] focus:ring-[#9b87f5] placeholder:text-[#8E9196]/50 text-sm font-medium"
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-[#9b87f5] hover:bg-[#7E69AB] shadow-lg"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};
