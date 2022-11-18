import "../styles/globals.css";
import type { AppProps } from "next/app";
import { makeQueryClient } from "../api/query-client";
import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClientProvider, Hydrate } from "react-query";
import React from "react";

interface CustomAppProps {
  dehydratedState: any;
}

function MyApp({ Component, pageProps }: AppProps<CustomAppProps>) {
  const [queryClient] = React.useState(() => makeQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
