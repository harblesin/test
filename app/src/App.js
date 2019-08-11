import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Secretpage from "./Pages/Secretpage";
import Sidepage from "./Pages/Sidepage";
import Nomatch from "./Pages/Nomatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/side" component={Sidepage} />
          <Route exact path="/secret" component={Secretpage} />
          <Route component={Nomatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
