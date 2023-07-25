// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  app: {
    baseURL: '/copy-things3/'
  },
  // generate:{
  //   nojekyll: true, //not working on this version
  // },
  ssr: false,
  target: 'static',
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/style.css'
  ],
  modules: [
    '@pinia/nuxt',
  ],
})
