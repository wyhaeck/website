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
                      {`Through my time at the University of Michigan in both the Computer Science and Cognitive Science programs, I've worked with a wide range of topics. These include AI / Machine Learning (EECS 492 / COGSCI 445), Web Development (EECS 485), and User Experience and Interface Design (EECS 493).`}
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
                      {`I created React components and webpages that were backed by a PostgreSQL database through GraphQL, using both Next.js and Node.js in the process. I also mentored a software engineer intern in each of the previously stated processes.`}
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
                      <strong>{`- Javascript / Typescript / React: `}</strong>
                      {`I built functional components in React and Typescript at Legaci, as well as in EECS 485 (Web Development).`}
                      <br />
                      <strong>{`- SQL (PostgreSQL) / GraphQL: `}</strong>
                      {`I wrote complex SQL and GraphQL queries to connect a PostgreSQL database with the front end in my time at Legaci.`}
                      <br />
                      <strong>{`- HTML / CSS: `}</strong>
                      {`I wrote significant HTML in EECS 485 with a static website, as well as creating CSS animations at Legaci.`}
                      <br />
                      <strong>{`- Python / C++: `}</strong>
                      {`My primary programming classes at Michigan were done in C++ and Python, as well as working with Jupyter Notebooks in COGSCI 445 (Machine Learning for Natural Language Processing).`}
                      <br />
                      <strong>{`- Extras (in order of proficiency): `}</strong>
                      <br />
                      <i>{`Git (Legaci + Classes), Shell Scripting (Classes), Swift (Personal)`}</i>
                      <br />
                    </PageText>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    p={2}
                    height="100%"
                  >
                    <Grid container direction="row" spacing={2}>
                      <Grid item xs={6}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          height="100%"
                        >
                          <Box>
                            <img width="100%" height="100%" src="react.png" />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
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
                      <Grid item xs={6}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          height="100%"
                        >
                          <Box>
                            <img width="100%" height="100%" src="python.png" />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          height="100%"
                        >
                          <Box>
                            <img width="100%" height="100%" src="git.png" />
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
