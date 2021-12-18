import { defineNuxtPlugin } from "#app";
import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client/core/";

export default defineNuxtPlugin((nuxtApp) => {
  const apolloUri = "";
  const apolloClient = new ApolloClient({
    uri: apolloUri,
    cache: new InMemoryCache(),
  });

  return {
    provide: {
      DefaultApolloClient: apolloClient,
    },
  };
});
