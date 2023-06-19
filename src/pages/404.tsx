import React from "react";
import Head from "next/head";
import { Box, Button } from "@mui/material";
import { PageText } from "../components";
import { ButtonTypography } from "../components";
import Link from "next/link";

export const FourOFourPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box p={2} display="flex" flexDirection="column" alignItems="center">
          <PageText variant="h2">404 Unknown Page</PageText>
          <PageText variant="h4">
            Check out one of the other pages on the site!
          </PageText>
          <Box pt={2}>
            <Link href="/">
              <Button
                sx={{
                  backgroundColor: "#00274C",
                  "&:hover": {
                    backgroundColor: "#293d55",
                  },
                }}
              >
                <ButtonTypography>Click Here for Home Page</ButtonTypography>
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FourOFourPage;
