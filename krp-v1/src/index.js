import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ContextProvider } from "./context/Context";
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
