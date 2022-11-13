import { defineNuxtConfig, NuxtConfig } from "nuxt3";
import {ModuleOptions as Windi} from "nuxt-windicss";

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
    'virtual:windi-base.css',
    // your stylesheets which overrides the preflight
    // '@/css/main.css', 
    // windi extras
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    'virtual:windi-devtools',
  ],
  modules: [
    'nuxt-windicss'
  ],
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      // see https://github.com/unjs/listhen#options
      server: {
        port: 4444,
        open: true,
      }
    }
  }
} as NuxtConfig & {windicss: Windi});
