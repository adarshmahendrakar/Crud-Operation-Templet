import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import GetFunction from "./Components/Get";
import PostFunction from "./Components/Post";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
     

      <Route path="/" component={GetFunction} />
      <Route path="/Post" component={PostFunction} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
