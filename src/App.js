import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/home", "/index"]} component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
