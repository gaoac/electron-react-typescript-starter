import React from 'react';
import { Button } from 'antd';
import { hot } from 'react-hot-loader';
import Details from './Details';
import logo from '@/assets/electron.png';
import './app.less';

const App: React.FC = (): React.ReactElement => (
  <div>
    <h1>
      <span role="img" aria-label="Sparkling Heart">
        💖
      </span>
      Hello World!
    </h1>
    <p>Welcome to your Electron application.</p>
    <Details title="Do you have a dream?" content="Yes, I do." />
    <Button type="primary">Button</Button>
    <div className="img-wrapper">
      <img src={logo} alt="" className="img" />
    </div>
  </div>
);

export default hot(module)(App);
