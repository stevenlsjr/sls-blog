import "../styles/globals.css";
import type { AppProps } from "next/app";
import { makeQueryClient } from "../api/query-client";

import { QueryClientProvider } from "react-query";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => makeQueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
