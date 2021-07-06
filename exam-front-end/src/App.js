import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Favorite from "./Component/Favorite";
import Header from "./Component/Header";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/fav">
              <Favorite />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
