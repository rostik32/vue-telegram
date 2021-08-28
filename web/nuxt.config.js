export default {
  router: {
    middleware: 'protect'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chat',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/global.scss', 'animate.css/animate.compat.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/components.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg-sprite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  axios: {
    baseURL: 'http://localhost:5000/api', // Used as fallback if no runtime config is provided
    credentials: true,
  },

  auth: {
    redirect: {
      login: '/?auth=login',
      logout: '/?auth=login',
      home: '/main'
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          global: true,
          type: 'Bearer',
          maxAge: 15 * 60,
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 30 * 24 * 60 * 60
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'get' },
          user: { url: '/user', method: 'get' },
          logout: { url: '/auth/logout', method: 'post' }
        },
      }
    }
  }
};
