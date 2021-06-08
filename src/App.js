import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./layout/Layout"
import About from "./component/About";
import Projects from "./component/Projects";
import Resume from "./component/Resume";

import "./App.css";

function App() {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/project" exact>
          <Projects />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
