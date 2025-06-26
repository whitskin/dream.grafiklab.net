// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
   site: { 
 url: 'https://dream.grafiklab.net', 
 name: 'Dream41 | Full-Stack Developer Portfolio' 
 }, 
 vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'nuxt-og-image'
  ],
 
    ogImage: {
    defaults: {
      width: 1200,
      height: 630,
      renderer: 'satori',
    },
  },
})