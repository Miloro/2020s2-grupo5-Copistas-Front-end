import React,{useState,useEffect} from "react";
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
import CrearColaborador from "./components/CrearColaborador"
import Libros from "./components/Libros"

import Usuario from "./modelos/usuario"


function App(props) {

  const [usuario, setUsuario] = useState({})
  const [sesion, setSesion] = useState(obtenerSession());
  const [estaLogueado, setEstaLogueado] = useState(!!sesion);

  useEffect(() => {
    if(estaLogueado){
      setUsuario(new Usuario(sesion.data.nombreUsuario, sesion.data.authorities))
    }else{
      setEstaLogueado(false)
      setUsuario({})
    }
  }, [sesion]);


  const iniciarSesion = (sesion) => {

    guardarSession(sesion);
    setEstaLogueado(true) 
    setUsuario(new Usuario(sesion.data.nombreUsuario, sesion.data.authorities));
  }

  const cerrarSesion = () => {
    eliminarSession();
    setEstaLogueado(false)
    setSesion({})
    setUsuario({})

  }

  return (
    <UsuarioContext.Provider value={{ iniciarSesion: iniciarSesion, cerrarSesion: cerrarSesion, usuario:usuario, estaLogueado: estaLogueado}}>
      <BrowserRouter>
        <Switch>
          <RutaAutenticada exact path="/home"
                             component={Home} />
          <RutaAutenticada  path="/hojaDeRuta"
                             component={HojaDeRuta} soloAdministrador/>
          <RutaAutenticada  path="/graficos"
                             component={Dashboards}  />
          <RutaAutenticada  path="/libro/:titulo"
                             component={Libro} />
          <RutaAutenticada  path="/colaborador"
                             component={CrearColaborador} soloAdministrador />
          <RutaAutenticada  path="/libros"
                             component={Libros}  />
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </UsuarioContext.Provider>
  );
}

export default App;
