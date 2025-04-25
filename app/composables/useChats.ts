import type { Chat } from "../types";

export default function useChats(
  options: {
    projectId?: string;
  } = {}
) {
  const chats = useState<Chat[]>("chats", () => [MOCKED_CHAT]);

  function createChat() {
    const id = (chats.value.length + 1).toString();
    const chat = {
      id,
      title: "New Chat",
      messages: [],
      projectId: options.projectId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    chats.value.push(chat);

    return chat;
  }

  function chatsInProject(projectId: string) {
    return chats.value.filter((chat) => chat.projectId === projectId);
  }

  return {
    chats,
    createChat,
    chatsInProject,
  };
}
