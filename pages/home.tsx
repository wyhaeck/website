import React from "react";
import { CodeBlock } from "react-code-blocks";
import { Box, Button } from "@material-ui/core";

export const Home: React.FC = () => {
  return (
    <Box>
      <CodeBlock text="Hello" language="typescript" showLineNumbers wrapLines />
      <Button href="/about">About</Button>
    </Box>
  );
};

export default Home;
