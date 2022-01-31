import { defineNuxtConfig, NuxtConfig } from "nuxt3";
import type { NuxtWindiOptions } from "nuxt-windicss";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

const graphqlUri =
  process.env["GRAPHQL_URI"] || "http://localhost:8000/graphql/";

const graphqlWsUri =
  process.env["GRAPHQL_WS_URI"] || "ws://localhost:8000/subscriptions";

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
  },
  privateRuntimeConfig: {},
  vue: {
    config: {
      devtools: true,
    },
  },
  dev: true,
  debug: true,
  ssr: false,
  css: [
    "@/assets/css/main.css",
    // '@/css/global.scss',
  ],
  windicss: {
    analyze: {
      server: {
        port: 4444,
        open: false,
      },
    },
    preflight: {
      alias: {
        // add nuxt aliases
        'nuxt-link': 'a',
        // @nuxt/image module
        'nuxt-img': 'img',
      },
    },
  },
  buildModules: ["nuxt-windicss"],
} as NuxtConfig & { windicss: NuxtWindiOptions });
