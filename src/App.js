import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from "./components/common/menu/Menu";

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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Service() {
  return <h2>Service</h2>;
}

function Portifolio() {
  return <h2>Portifolio</h2>;
}
