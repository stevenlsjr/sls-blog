import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

const graphqlUri =
  process.env["GRAPHQL_URI"] || "http://localhost:8000/graphql/";

export default defineNuxtConfig({
  build: {
    transpile: ["@apollo/client", "ts-invariant", "tslib"],
  },
  alias: {
    tslib: "tslib/tslib.es6.js",
  },
  dev: true,
  publicRuntimeConfig: {
    graphqlUri,
  },
  privateRuntimeConfig: {},
  vue: {
    config: {
      devtools: true,
    },
  },
  debug: true
});
