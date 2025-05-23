import type { ChatMessage } from "./ChatMessage";

export interface Chat {
  id: string;
  title: string;
  messages: ChatMessage[];
  projectId?: string;
  createdAt: Date;
  updatedAt: Date;
}
