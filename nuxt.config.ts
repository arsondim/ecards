// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-feather-icons', "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  colorMode: {
    classSuffix: '',
    preference: 'light', 
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: 'tailwind.config.js',
   },
})