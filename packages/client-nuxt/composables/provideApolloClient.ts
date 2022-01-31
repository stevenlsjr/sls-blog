import { provide, Ref } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  ApolloLink,
  NormalizedCacheObject,
} from "@apollo/client/core";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

function getLinks(
  graphqlUri: string,
  graphqlWsUri: string,
  isSSR: boolean
): ApolloLink {
  const httpLink = new HttpLink({
    uri: graphqlUri,
  });
  if (!isSSR) {
    const wsLink = new WebSocketLink({
      uri: graphqlWsUri,
    });
    const link = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    );
    return link;
  } else {
    return httpLink;
  }
}

export function setupApolloClient() {
  const apolloState: Ref<NormalizedCacheObject | undefined > = useState("__APOLLO_STATE__", ()=>undefined)
  const nuxtApp = useNuxtApp();
  const isSSR = (nuxtApp.ssrContext ?? false) !== false;
  const { graphqlUri, graphqlWsUri } = useRuntimeConfig();
  const cache = new InMemoryCache();
  if (!isSSR) {
    if (typeof window !== "undefined") {
      const state = apolloState.value;

      if (state) {
        console.log(state)
        // If you have multiple clients, use `state.<client_id>`
        cache.restore(state);
      }
    }
  }

  const link = getLinks(graphqlUri, graphqlWsUri, isSSR);
  const apolloClient = new ApolloClient({
    link,
    cache,
    ...(isSSR
      ? {
          // Set this on the server to optimize queries when SSR
          ssrMode: true,
        }
      : {
          // This will temporary disable query force-fetching
          ssrForceFetchDelay: 100,
        }),
  });

  provide(DefaultApolloClient, apolloClient);
  if (!isSSR && typeof window !== "undefined") {
    (window as any).APOLLO = apolloClient;
  }
  if (isSSR){
    // setup hook to serialize apollo state after render
    nuxtApp.hook('app:rendered', ()=>{
      const state = apolloClient.cache.extract();
      apolloState.value = state
    })
  }
}
