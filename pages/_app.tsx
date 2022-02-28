import React from 'react';
import '../styles/app.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { CodeBlock } from 'react-code-blocks'
import { Box } from '@material-ui/core'

export const App: React.FC = () => {
	return (
		<>
			{/* <Authenticator>
		{({ signOut, user }) => ( */}
			<div className="App" >
				<p>
					Hey user, welcome to my channel, with auth!
				</p>
				<Box>
					<CodeBlock
						text="Hello"
						language='typescript'
						showLineNumbers
						wrapLines
					/>
				</Box>
				<button>Sign out</button>
			</div >
			{/*)
	}
		</Authenticator > */}
		</>
	);
}

export default App;