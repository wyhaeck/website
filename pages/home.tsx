import React from "react";
import { CodeBlock } from "react-code-blocks";
import { Box, Grid } from "@material-ui/core";

export const Home: React.FC = () => {
  return (
    <Box>
      <h1>William Haeck</h1>
      {/* <CodeBlock text="Hello" language="typescript" showLineNumbers wrapLines /> */}
      <Box display="flex" flexDirection="row">
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item xs={6}>
            <p>
              {`Hello, and welcome to my website!`}
              <br />
              <br />
              {`My name is William Haeck, and I'm a Senior at the University of Michigan
              studying Cognitive Science. I'm currently looking for a position in the field of software 
              development, preferably in the realm of web development or mobile development.`}
              <br />
              <br />
              {/* {`Feel free to take a look around!`} */}
            </p>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <img
                width="100%"
                height="100%"
                border-radius="16px"
                object-fit="hidden"
                src="Will Senior Photo 2019.jpg"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
