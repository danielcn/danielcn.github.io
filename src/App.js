import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/about/About'
import Home from './components/home/Home'
import Portifolio from './components/portiflio/Portiflio'
import Service from './components/service/Service'

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/portifolio">Portiflio</Link>
            </li>
            <li>
              <Link to="/">Curriculum</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
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

export default App;
