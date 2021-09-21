import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProjectPWA from "./ProjectPWA";
import Home from "./Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/project/pwa" component={ProjectPWA} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
