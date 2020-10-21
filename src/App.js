import React from "react";
//import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./components/Home";
import HojaDeRuta from "./components/HojaDeRuta";
import Dashboards from "./components/dashboards";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/hojaDeRuta" component={HojaDeRuta} />
        <Route path="/graficos" component={Dashboards} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
