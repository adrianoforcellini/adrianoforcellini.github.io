import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProjectPWA from "./ProjectPWA";
import MapsAPI from "./MapsAPI"; 
import textToSpeech from "./TextToSpeech";
import Home from "./Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/project/pwa" component={ProjectPWA} />
        <Route exact path="/project/google-maps-api" component={MapsAPI} />
        <Route exact path="/project/text-to-speech" component={textToSpeech} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
