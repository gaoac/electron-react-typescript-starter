import React from 'react';
import { hot } from 'react-hot-loader';
import Details from './Details';
import './app.less';

const user = { title: 'Do you have a dream?', content: 'Yes, I do.' };
const App = () => {
  return (
    <div>
      <h1>💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>
      <Details {...user} />
    </div>
  );
};

export default hot(module)(App);
