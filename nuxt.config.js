const nodeExternals = require('webpack-node-externals')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'try1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Narnikgamarnik personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000000' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend (config, { isServer }) {
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-awesome/]
          })
        ]
      }
    },
    vendor: ['axios', 'vue-awesome']
  },
  plugins: ['~plugins/vue-awesome.js'],
  css: [
    'assets/main.sass'
  ],
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070',
    name: 'Narnik Gamarnik PWA',
    lang: 'en'
  },
  /*
  ** Modules
  */
  modules: [
    ['@nuxtjs/pwa']
  ]
}