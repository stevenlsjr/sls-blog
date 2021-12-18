import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant',
      'tslib',
    ]
  },
  alias: {
    tslib: 'tslib/tslib.es6.js'
  }
});
