// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/mdc",
  ],
  future: {
    compatibilityVersion: 4,
  },
  mdc: {
    highlight: {
      theme: "github-dark",
      langs: ["html", "markdown", "vue", "typescript", "javascript"],
    },
  },
});
