import React from "react";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ContextProvider } from "./context/Context";
import { ParallaxProvider } from 'react-scroll-parallax';

// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <ParallaxProvider>
//         <App />
//       </ParallaxProvider>
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root')
);