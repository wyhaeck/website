import React from "react";
import { Box, Grid } from "@mui/material";
import { PageText } from "../../components";

export const PortfolioView: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box display="flex" flexDirection="row" alignItems="center">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              p={2}
              pt={4}
              width="100%"
            >
              <Grid container direction="row">
                <Grid item xs={12}>
                  <Box p={2}>
                    <PageText variant="h3">Jobling</PageText>
                    <PageText>
                      <br />
                      {`In the fall of 2022, my teammates and I designed an app in Figma as a class project for EECS 493 - User Interface and User Experience Design. This app is meant to help students as they go into the job search, but more importantly we went through the entire process of bringing an idea to life: finding a user need, creating a solution, and getting user feedback to more effectively solve the problem. The video below is my presentation of our final product.`}
                      <br />
                    </PageText>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    height="100%"
                    p={2}
                  >
                    <Box>
                      <iframe
                        width="640px"
                        height="360px"
                        src="https://www.youtube.com/embed/y1J3Wb89szY"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Jobling Presentation"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={2} width="100%">
              <Grid container direction="row" spacing={3}>
                <Grid item xs={5}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    height="100%"
                    p={2}
                  >
                    <Box>
                      <img width="100%" src="github.png" />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={7}>
                  <Box pr={2} pl={2}>
                    <PageText variant="h3">This Website!</PageText>
                    <PageText>
                      <br />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        key={`connect`}
                        href={`https://github.com/wyhaeck/website`}
                      >
                        Website Repository
                      </a>
                      <br />
                      <br />
                      {`This website is quite possibly the best public example of my capabilities, both in development and design. This website has been built from the ground up, using React, Next.js, and Typescript. It represents the culmination of my time at Michigan and Legaci and the abilities I've gained and grown through my experience. The repository for the website is located above.`}
                      <br />
                    </PageText>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PortfolioView;
