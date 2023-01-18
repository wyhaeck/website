import React from "react";
import { Box, Grid } from "@material-ui/core";

export const AboutPage: React.FC = () => {
  return (
    <>
      <Box>
        <h1>About Me</h1>
      </Box>
      <Box display="flex" flexDirection="row">
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item xs={6}>
            Hey
          </Grid>
          <Grid item xs={6}>
            <p>Whats up</p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutPage;
