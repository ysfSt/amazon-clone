import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
