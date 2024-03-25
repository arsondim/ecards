// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({




  devtools: { enabled: true },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: 'tailwind.config.js',
   },

  modules: [
    "@nuxt/ui",
    "nuxt-feather-icons",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-swiper",
  ],

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },


})