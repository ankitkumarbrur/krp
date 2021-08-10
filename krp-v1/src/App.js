import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Contact, Error, Blog } from "./pages";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/blog" exact component={() => <Blog />} /> 
          <Route path="/about" exact component={() => <About />} /> 
          <Route path="/contact" exact component={() => <Contact />} /> 
          <Route path="*" exact component={() => <Error />} /> 
        </Switch>
      </Router>
  );
}

export default App;
