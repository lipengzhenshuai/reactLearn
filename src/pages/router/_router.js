import React from "react";

import HelloWorld from "../core/1helloworld";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/baisc/helloworld">baisc/helloworld</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/baisc/helloworld">
            <HelloWorld />
          </Route>
          <Route path="/topics">
            <HelloWorld />
          </Route>
          <Route path="/">
            <HelloWorld />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

