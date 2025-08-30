import { createMessageForChat } from "../../../../repository/chatRepository";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();
  const lastMessage = messages[messages.length - 1];

  return createMessageForChat({
    chatId: id,
    content: `(server) You said: ${lastMessage.content}`,
    role: "assistant",
  });
});
