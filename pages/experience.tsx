import React from "react";
import { Box, Grid } from "@material-ui/core";
import { PageText } from "../src/components";

export const ExperiencePage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box display="flex" flexDirection="row" alignItems="center">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Box p={2} pt={4} width="100%">
              <Grid container direction="row" spacing={3}>
                <Grid item xs={8}>
                  <Box p={2}>
                    <PageText variant="h3">School</PageText>
                    <PageText>
                      <br />
                      {`I was born and spent my entire childhood in Hull, MA, about an hour south of Boston. I never quite knew exactly what I wanted to be as a kid, but I absolutely loved building things. There's something incredible about seeing individual parts come together to create something far greater than their sum. I loved building Legos (particularly Star Wars) and creating all kinds of crazy structures in Minecraft on my Xbox.`}
                      <br />
                    </PageText>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    height="100%"
                    p={2}
                  >
                    <Box>
                      <img width="100%" height="100%" src="Block_M-Hex.png" />
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
                      <img width="100%" src="Legaci.png" />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={7}>
                  <Box p={2}>
                    <PageText variant="h3">Legaci</PageText>
                    <PageText>
                      <br />
                      {`I was born and spent my entire childhood in Hull, MA, about an hour south of Boston. I never quite knew exactly what I wanted to be as a kid, but I absolutely loved building things. There's something incredible about seeing individual parts come together to create something far greater than their sum. I loved building Legos (particularly Star Wars) and creating all kinds of crazy structures in Minecraft on my Xbox.`}
                      <br />
                    </PageText>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={2} width="100%">
              <Grid container direction="row" spacing={3}>
                <Grid item xs={8}>
                  <Box p={2}>
                    <PageText variant="h3">General Skills</PageText>
                    <PageText>
                      <br />
                      {`I was born and spent my entire childhood in Hull, MA, about an hour south of Boston. I never quite knew exactly what I wanted to be as a kid, but I absolutely loved building things. There's something incredible about seeing individual parts come together to create something far greater than their sum. I loved building Legos (particularly Star Wars) and creating all kinds of crazy structures in Minecraft on my Xbox.`}
                      <br />
                    </PageText>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box p={2} height="100%">
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Grid item xs={4}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          height="100%"
                          pt={2}
                        >
                          <Box>
                            <img width="100%" height="100%" src="react.png" />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          height="100%"
                        >
                          <Box>
                            <img width="100%" height="100%" src="graphql.png" />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          height="100%"
                          pb={2}
                        >
                          <Box>
                            <img width="100%" height="100%" src="python.png" />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
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

export default ExperiencePage;
