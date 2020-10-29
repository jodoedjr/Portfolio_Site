import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const networks = [
  {
    "name": "linkedin",
    "url": "https://www.linkedin.com/in/john-edwards-15b638bb/",
    "className": "fa fa-linkedin"
  },
  {
    "name": "github",
    "url": "https://github.com/jodoedjr",
    "className": "fa fa-github"
  }
]

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} networks={networks} />)} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer> Footer placeholder </Footer> */}
    </Router>
  );
}

export default App;
