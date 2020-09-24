import React from "react";
//import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./components/Home";
import HojaDeRuta from "./components/HojaDeRuta";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  /*cerrarLibroModal = () => {
    this.setState({
        show: false
      });
    }
  
    abrirLibroModal = () => {
    this.setState({
        show: true
    });
  }
  */

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hojaDeRuta" component={HojaDeRuta} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
