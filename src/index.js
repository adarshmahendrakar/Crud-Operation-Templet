import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import GetFunction from "./Components/Get";
import PostFunction from "./Components/Post";
import CrudOp from "./Components/CrudOp";
import PutFunction from "./Components/Put";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/Put" component={PutFunction} />

    <Route path="/Crud" component={CrudOp} />
      <Route path="/Post" component={PostFunction} />
      <Route path="/" component={GetFunction} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
