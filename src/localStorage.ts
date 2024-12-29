export interface Message {
    role: "user" | "assistant" | "error";
    content: string;
  }
  
  export interface Chat {
    id: string;
    title: string;
    messages: Message[];
  }
