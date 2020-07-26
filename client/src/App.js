import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layout
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Payment from "./components/layout/Payment";
import NotFound from "./components/layout/NotFound";

import "./App.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/payment" component={Payment} />

      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
