
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  build: {
     transpile: ["vuetify"],
   },
   vite: {
    define: {
        'process.env.DEBUG': false,
    },
 
  },
  css: [
    "vuetify/lib/styles/main.sass", 
    "@/assets/styles/global.scss",
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    "@pinia/nuxt",
  ],
})
