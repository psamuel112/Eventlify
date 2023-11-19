
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
     transpile: ["vuetify"],
   },
   modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'

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
