import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Switch } from "react-router-dom";
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/aboutMe" component={ AboutMe } />
        </Switch>
    </div>
  );
}

export default App;
