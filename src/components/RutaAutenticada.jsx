import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import UsuarioContext from './UsuarioContext';

class RutaAutenticada extends React.Component {
  render() {
    return (
      <UsuarioContext.Consumer>
        { contexto => {
          if(contexto.estaLogueado) {
            return <Route {...this.props}/>;
          } else {
            return <Redirect to="/"/>;
          }
        }}
      </UsuarioContext.Consumer>
    )
  }
}

RutaAutenticada.contextType = UsuarioContext;

export default RutaAutenticada;