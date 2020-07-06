import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";

const CustomerContainer = () => <h1>Customer Container</h1>;
const CustomerListContainer = () => <h1>Customer List Container</h1>;
const CustomerNewContainer = () => <h1>Customer New Container</h1>;

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/customers" component={CustomerListContainer} />
        <Switch>
          <Route path="/customers/new" component={CustomerNewContainer} />
          <Route path="/customers/:dni" component={CustomerContainer} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
