import React from "react";
import { hot } from "react-hot-loader";
import "./app.less";

const App = () => (
  <div>
    <h1>💖 Hello World!</h1>
    <p>
      Welcome to your <span>Electron application</span>.
    </p>
  </div>
);

export default hot(module)(App);
