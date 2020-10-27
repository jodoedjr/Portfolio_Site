import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import logo from './logo.svg';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* <Nav> Nav placeholder </Nav> */}
        <div className="navigation">
          {/* <img src={logo} className="logo-image" alt="Logo" /> */}
          <div className="navigation-sub">
            <Link to="/" className="item">Home</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      {/* <Footer> Footer placeholder </Footer> */}
    </Router>
  );
}

export default App;
