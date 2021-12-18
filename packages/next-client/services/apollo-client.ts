import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import getConfig from "next/config";


export function makeClient() {
  const {publicRuntimeConfig} = getConfig()
  const graphqlUri: string = publicRuntimeConfig.graphqlUri;
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    uri: graphqlUri,
    cache
  })
  return client
}