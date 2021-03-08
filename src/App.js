import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import Publications from "./Publications";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        className="App"
        // onClick={(e) => {
        //   console.log(e.target);
        // }}
      >
        <h1>Shin yi Ho</h1>
        <Header />
        <Switch>
          <Route path="/project">
            <Projects />
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
