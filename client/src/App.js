import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layout
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Faq from "./components/layout/Faq";
import NotFound from "./components/layout/NotFound";
import Payment from "./components/product/Payment";
import Checkout from "./components/product/Checkout";
import ShushkDetails from "./components/product/ShushkDetails";

import "./App.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/shushkDetails" component={ShushkDetails} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/product/:id" component={Checkout} />

      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
