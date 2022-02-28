import React from 'react';
// import ReactDOM from 'react-dom';
import App from './_app';
// import reportWebVitals from '../src/reportWebVitals';
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure(config);

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

export const Home: React.FC = () => {
  return (
    <>
      <App />
    </>
  )
}

export default Home;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
