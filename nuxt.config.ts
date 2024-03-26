// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({



    app: {
      head: {
        title: 'Card Respect Energy Group',
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
      }
    },

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