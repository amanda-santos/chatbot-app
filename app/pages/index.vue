<script setup lang="ts">
const { title } = useAppConfig();
const { createChat } = useChats();

function handleCreateChat() {
  createChat();
}

useHead({
  title,
});
</script>

<template>
  <UContainer class="page-container">
    <span class="text-2xl font-bold mb-2">{{ title }}</span>
    <UButton class="button" @click="handleCreateChat"> Start Chat </UButton>
  </UContainer>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  font-size: 2.25rem;
  font-weight: bold;
}

.button {
  margin-top: 1rem;
}
</style>
