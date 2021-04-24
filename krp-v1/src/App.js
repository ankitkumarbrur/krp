import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Shop, About, Contact, Error } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
