<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();

const isLoadingResponse = ref(false);

async function handleSendMessage(message: string) {
  isLoadingResponse.value = true;
  await sendMessage(message).finally(() => {
    isLoadingResponse.value = false;
  });
}

const appConfig = useAppConfig();
const title = computed(() =>
  chat.value.title
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
