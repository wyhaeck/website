import React from "react";
import type { NextPage } from "next";
import {
  ConnectView,
  ExperienceView,
  HomeView,
  PortfolioView,
  StoryView,
} from "../views";
import { Box } from "@mui/material";
import { Header } from "../components";
import useViewsStore from "../stores/useViewsStore";

const Home: NextPage = () => {
  const { view } = useViewsStore((state) => state);

  return (
    <>
      <Header />
      <Box
        width="100%"
        height="calc(100vh - 100px)"
        display="flex"
        justifyContent="center"
        flexDirection="row"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          maxWidth="800px"
          pt={8}
        >
          {view === "home" && <HomeView />}
          {view === "story" && <StoryView />}
          {view === "experience" && <ExperienceView />}
          {view === "portfolio" && <PortfolioView />}
          {view === "connect" && <ConnectView />}
        </Box>
      </Box>
    </>
  );
};

export default Home;
