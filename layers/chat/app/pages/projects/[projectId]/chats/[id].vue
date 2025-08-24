<script setup lang="ts">
import type { Chat } from "~~/layers/chat/app/types";

const route = useRoute();
const {
  chat: chatFromChats,
  messages,
  sendMessage,
} = useChat(route.params.id as string);

if (!chatFromChats.value) {
  await navigateTo(`/projects/${route.params.projectId}`, {
    replace: true,
  });
}

const chat = computed(() => chatFromChats.value as Chat);
const isLoadingResponse = ref(false);

const handleSendMessage = async (message: string) => {
  isLoadingResponse.value = true;
  await sendMessage(message);
  isLoadingResponse.value = false;
};

const appConfig = useAppConfig();
const title = computed(() =>
  chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title
);

useHead({
  title,
});
</script>

<template>
  <ChatWindow
    :chat
    :messages
    :is-loading-response="isLoadingResponse"
    @send-message="handleSendMessage"
  />
</template>
