import React,{useState} from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UsuarioContext from './components/UsuarioContext';
import { obtenerSession, guardarSession, eliminarSession } from './sesion';
import RutaAutenticada from './components/RutaAutenticada';

import Home from "./components/Home";
import HojaDeRuta from "./components/HojaDeRuta";
import Dashboards from "./components/Dashboards";
import Login from "./components/Login";
import Libro from "./components/Libro";


function App() {

  const [usuario, setUsuario] = useState({})
  const [sesion, setSesion] = useState(obtenerSession());
  const [estaLogueado, setEstaLogueado] = useState(!!sesion);

  const iniciarSesion = (sesion) => {
    guardarSession(sesion);
    setEstaLogueado(true) 
    setUsuario(sesion);
  }

  const cerrarSesion = () => {
    eliminarSession();
    setEstaLogueado(false)
    setUsuario({})

  }

  return (
    <UsuarioContext.Provider value={{ iniciarSesion: iniciarSesion, cerrarSesion: cerrarSesion, usuario:usuario, estaLogueado: estaLogueado}}>
      <BrowserRouter>
        <Switch>
          <RutaAutenticada exact path="/home"
                             component={Home} soloAdministrador />
          <RutaAutenticada  path="/hojaDeRuta"
                             component={HojaDeRuta} soloAdministrador />
          <RutaAutenticada  path="/graficos"
                             component={Dashboards} soloAdministrador />
          <RutaAutenticada  path="/libro/:titulo"
                             component={Libro} soloAdministrador />
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </UsuarioContext.Provider>
  );
}

export default App;
