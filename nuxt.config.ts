
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
     transpile: ["vuetify"],
   },
   modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    "vuetify/lib/styles/main.sass",
  ],
  vite: {
    define: {
        'process.env.DEBUG': false,
    },
  },
})
