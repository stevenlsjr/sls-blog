import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export function provideApolloClient() {
  const nuxtApp = useNuxtApp();
  const isSSR = (nuxtApp.ssrContext ?? false) !== false;
  const { graphqlUri } = useRuntimeConfig();
  const cache = new InMemoryCache();
  if (!isSSR) {
    if (typeof window !== "undefined") {
      const state = (window as any).__APOLLO_STATE__;
      if (state) {
        // If you have multiple clients, use `state.<client_id>`
        cache.restore(state.defaultClient);
      }
    }
  }
  const apolloClient = new ApolloClient({
    uri: graphqlUri,
    cache,
    ...(isSSR
      ? {
          // Set this on the server to optimize queries when SSR
          ssrMode: true,
        }
      : {
          // This will temporary disable query force-fetching
          // ssrForceFetchDelay: 100,
        }),
  });


  provide(DefaultApolloClient, apolloClient);
  if (!isSSR && typeof window !== "undefined") {
    (window as any).APOLLO = apolloClient;
  }
}
