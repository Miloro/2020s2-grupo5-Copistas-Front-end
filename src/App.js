import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./jsx/Home"
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
