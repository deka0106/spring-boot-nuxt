import { Configuration } from '@nuxt/types'

export default {
  mode: 'spa',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  typescript: { typeCheck: { eslint: true } },
  plugins: ['@/plugins/composition-api'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': 'http://localhost:8080',
  },
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    defaultAssets: {
      icons: 'fa',
    },
    treeShake: true,
  },
} as Configuration
