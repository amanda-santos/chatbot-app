import { updateChat } from "../../../repository/chatRepository";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const title = "A random new title";

  return updateChat(id, { title });
});
