import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { makeClient } from "../services/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  const client = makeClient();
  return (
    <ApolloProvider client={client}>
      {" "}
      <Component {...pageProps} />{" "}
    </ApolloProvider>
  );
}

export default MyApp;
