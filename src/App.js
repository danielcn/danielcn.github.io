import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from "./components/common/menu/Menu";
import About from './components/about/About'
import Home from './components/home/Home'
import Portifolio from './components/portiflio/Portiflio'
import Service from './components/service/Service'

import './App.scss';

export default function App() {
  return (
    <Router>
      <Menu />
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/portifolio">
            <Portifolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
