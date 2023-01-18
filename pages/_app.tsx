import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CssBaseline, Box } from "@material-ui/core";
import { Header } from "../src/components/Navbar";
import "../styles/globals.css";

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
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        flexDirection="row"
        style={{ backgroundColor: "#ffffed" }}
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          maxWidth="800px"
        >
          <Component {...pageProps} />
        </Box>
      </Box>
    </React.Fragment>
  );
}
