// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  app: {
    baseURL: 'copy-things3'
  },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/style.css'
  ],
  modules: [
    '@pinia/nuxt',
  ],
})
