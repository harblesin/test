import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Secretpage from "./Pages/Secretpage";
import Sidepage from "./Pages/Sidepage";
import Nomatch from "./Pages/Nomatch";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/side" component={Sidepage} />
          <Route exact path="/secret" component={Secretpage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={Nomatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
