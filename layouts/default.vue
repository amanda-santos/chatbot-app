<template>
  <div class="layout-container">
    <main class="h-full mt-16">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  height: calc(100vh - 4rem);
  background-color: var(--ui-bg);
}
</style>
