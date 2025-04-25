<script setup lang="ts">
const route = useRoute();
const {
  chat: chatFromChats,
  messages,
  sendMessage,
} = useChat(route.params.id as string);

if (!chatFromChats.value) {
  await navigateTo("/", { replace: true });
}

const chat = computed(() => chatFromChats.value);

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
