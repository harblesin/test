import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Sidepage from "./Pages/Sidepage";
import Nomatch from "./Pages/Nomatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/Secret" component={Sidepage}/>
        <Route component={Nomatch}/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
