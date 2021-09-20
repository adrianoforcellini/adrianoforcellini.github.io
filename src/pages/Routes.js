import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Projects from "./Projects";
import Home from "./Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
