<script setup lang="ts">
const route = useRoute();
const { chat, messages, sendMessage } = useChat(route.params.id as string);

const isLoadingResponse = ref(false);

async function handleSendMessage(message: string) {
  isLoadingResponse.value = true;
  await sendMessage(message).finally(() => {
    isLoadingResponse.value = false;
  });
}

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
    v-if="chat"
    :chat
    :messages
    :is-loading-response="isLoadingResponse"
    @send-message="handleSendMessage"
  />
</template>
