import { Route } from "react-router-dom";
import "./App.css";
import { Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portifolio from "./pages/Portifolio";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/portifolio" component={Portifolio} />
      </Switch>
    </div>
  );
}

export default App;
