import { defineNuxtConfig, NuxtConfig } from "nuxt3";
import {} from "nuxt-windicss";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

const graphqlUri =
  process.env["GRAPHQL_URI"] || "http://localhost:8000/graphql/";

const graphqlWsUri =
  process.env["GRAPHQL_WS_URI"] || "ws://localhost:8000/subscriptions";

const blogRootPage = process.env["BLOG_ROOT_PAGE"] ?? "my-blog";

export default defineNuxtConfig({
  build: {
    transpile: ["@apollo/client", "ts-invariant", "tslib"],
  },
  alias: {
    tslib: "tslib/tslib.es6.js",
  },
  publicRuntimeConfig: {
    graphqlUri,
    graphqlWsUri,
    blogRootPage
  },
  privateRuntimeConfig: {},
  nitro: {
    sourceMap: true,
  },
  vue: {
    config: {
      devtools: true,
    },
  },
  dev: true,
  debug: true,
  ssr: true,
  css: [
    "@/assets/css/main.scss",
    // '@/css/global.scss',
  ],
});
