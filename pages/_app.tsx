import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CssBaseline } from "@material-ui/core";
import { Header } from "../src/components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Will Haeck</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
