// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  build: {
    transpile: ["vuetify", "vue-toastification"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  css: ["vuetify/lib/styles/main.sass", "@/assets/styles/global.scss"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@nuxtjs/cloudinary",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  compatibilityDate: "2024-09-28",
});