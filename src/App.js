import React from 'react';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { CodeBlock } from 'react-code-blocks'
import { Box } from '@material-ui/core'

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <Box>
            <CodeBlock
              text="Hello"
              language='typescript'
              showLineNumbers
              wrapLines
            />
          </Box>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;