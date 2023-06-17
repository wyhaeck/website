import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Paper } from "@mui/material";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Will Haeck</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Paper
        sx={{
          height: "100vh",
          overflowY: "scroll",
          backgroundColor: "#ffffed",
          borderRadius: 0,
        }}
      >
        <Component {...pageProps} />
      </Paper>
    </>
  );
};

export default App;
