import { Message } from "@/types/chat";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={`mb-6 ${
        message.role === "user" ? "ml-auto" : "mr-auto"
      }`}
    >
      <div
        className={`max-w-[85%] p-4 rounded-xl shadow-lg backdrop-blur-sm ${
          message.role === "user"
            ? "bg-[#9b87f5] text-white ml-auto"
            : message.role === "error"
            ? "bg-red-500/10 text-red-500 border border-red-500/20"
            : "bg-[#403E43]/50 text-[#aaadb0] border border-[#403E43]/20"
        }`}
      >
        <p className="text-sm leading-relaxed font-medium whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};
