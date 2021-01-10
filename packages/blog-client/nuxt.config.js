import getenv from 'getenv';

const wagtailUrl = getenv('NUXT_WAGTAIL_URL', 'http://localhost:8000')

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '@sls-blog/blog-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [/*'~/plugins/strapi-auth'*/],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    proxyHeaders: true,
  },
  proxy: {
    '/cms/': {
      target: wagtailUrl,
      pathRewrite: { '^/cms/': '' },
    },
    '/graphql': {
      target: wagtailUrl,
    },
  },
  // Graphql client config https://github.com/nuxt-community/apollo-module

  apollo: {
    clientConfigs: {
      default: {
        // required
        httpEndpoint: getenv('NUXT_GRAPHQL_ENDPOINT', 'http://localhost:3000/graphql'),

        // override HTTP endpoint in browser only
        browserHttpEndpoint: '/graphql',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    parallel: true,
    cache: true,
  },
  publicRuntimeConfig: (() => {
    return {
      strapiPublicAuth: {
        identifier: getenv('NUXT_STRAPI_IDENTIFIER', 'public'),
        password: getenv('NUXT_STRAPI_PASSWORD', 'tryguest'),
      },
    };
  })(),
  privateRuntimeConfig: (() => {
    return {};
  })(),
};
