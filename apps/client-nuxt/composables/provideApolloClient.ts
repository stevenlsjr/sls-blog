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
  const apolloState: Ref<NormalizedCacheObject | undefined> = useState(
    "__APOLLO_STATE__",
    () => undefined
  );
  const nuxt = useNuxtApp();
  const isSSR = process.server;
  const { graphqlUri, graphqlWsUri } = useRuntimeConfig();
  const cache = new InMemoryCache();
  const link = getLinks(graphqlUri, graphqlWsUri, isSSR);
  let apolloClient: ApolloClient<NormalizedCacheObject>;
  const key = "default";

  if (isSSR) {
    apolloClient = new ApolloClient({
      link,
      cache,
      // Set this on the server to optimize queries when SSR
      ssrMode: true,
    });
    nuxt.hook("app:rendered", () => {
      // serialize apollo state for browser
      nuxt.payload.data["apollo-" + key] = apolloClient.extract();
    });
  } else {
    const data = nuxt.payload.data["apollo-" + key];
    if (data) {
      // deserialize server-side apollo cache
      cache.restore(JSON.parse(JSON.stringify(data)));
    }
    apolloClient = new ApolloClient({
      link,
      cache,
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100,
    });
  }

  provide(DefaultApolloClient, apolloClient);
}
