import React from "react";
import { CodeBlock } from "react-code-blocks";
import { Box, Grid } from "@mui/material";
import { PageText, FlipAnimation } from "../../components";

export const HomeView: React.FC = () => {
  return (
    <Box display="flex" flexDirection="row" height="100%">
      <Grid container direction="row" alignItems="center" spacing={2}>
        <Grid item xs={6}>
          <Box p={2}>
            <PageText variant="h3">William Haeck</PageText>
            <PageText>
              <br />
              {`Hello, and welcome to my website!`}
              <br />
              <br />
              {`My name is William Haeck, and I'm a graduate of the University of Michigan
              in Cognitive Science on the Computation track. `}
              {`I'm currently working as an Implementation Analyst at FeneTech!`}
              {/*`I'm currently looking for a position in the field of software 
              development, preferably in the realm of web development or mobile development.`*/}
              <br />
              <br />
              {`Feel free to take a look around!`}
            </PageText>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2}>
            <FlipAnimation img1="Stare.jpeg" img2="Beach Photo.jpg" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeView;
