// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  app: {
    baseURL: '/copy-things3/',
    // buildAssetsDir: '_nuxt/',
  },
  // build: {
  //   publicPath: '_nuxt/'
  // },
  router: {
    base: '/copy-things3/',
  },
  // ssr: false,
  // nitro: {
  //   preset: 'service-worker'
  // },
  // target: 'static',
  generate:{
    nojekyll: true, //not working on this version
  },
  // ssr: false,
  target: 'static',
  // nitro: {
  //   output: {
  //     dir: '.output',
  //     serverDir: '.output/server',
  //     publicDir: '.output/public'
  //   }
  // },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/style.css'
  ],
  modules: [
    '@pinia/nuxt',
  ],
})
