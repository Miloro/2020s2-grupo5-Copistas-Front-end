import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./jsx/Home"
import HojaDeRuta from "./jsx/HojaDeRuta"
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/hojaDeRuta" component={HojaDeRuta} />
      <Route path="/" exact component={Home} />

    </Router>
  );
}

export default App;
