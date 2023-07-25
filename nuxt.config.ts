// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/style.css'
  ],
  modules: [
    '@pinia/nuxt',
  ],
  target: 'static',
  app: {
    baseURL: 'copy-things3'
  }
})
