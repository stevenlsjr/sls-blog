import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  NormalizedCacheObject,
} from "@apollo/client";
import getConfig from "next/config";
import { isSSR } from "./utils";

import { isNil } from "lodash";
import { useMemo } from "react";

let sharedClient: ApolloClient<NormalizedCacheObject> | undefined;

export function makeClient(): ApolloClient<NormalizedCacheObject> {
  const { publicRuntimeConfig } = getConfig();
  const graphqlUri: string = publicRuntimeConfig.graphqlUri;
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    ssrMode: isSSR(),
    uri: graphqlUri,
    cache,
  });
  return client;
}

export function initializeApollo<S = any>(
  initialState: S | null = null
): ApolloClient<NormalizedCacheObject> {
  const _client = sharedClient || makeClient();

  if (!isNil(initialState)) {
    const existingCache = _client.extract();
    _client.cache.restore({ ...existingCache, ...initialState });
  }

  if (isSSR()) {
    return _client;
  } else {
    if (!sharedClient) {
      sharedClient = _client;
    }
    return _client;
  }
}

export function useApollo<S = any>(initialState: S | null = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

import {DocumentNode} from 'graphql'
 