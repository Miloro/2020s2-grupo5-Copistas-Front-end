import React, { Fragment } from "react";
import UsuarioContext from './UsuarioContext';
import Container from "react-bootstrap/Container";

import NavBar from "./NavBar";

export default function Home () {

    return (
      <UsuarioContext.Consumer>{
        context =>  {
          console.log(context.usuario.nombre)
          return(
          <>
            <Fragment>
              <NavBar />
              <Container id="contenedor">
                {context.usuario.nombre?
                <h1>Bienvenido a Libraille {context.usuario.nombre}</h1>:
                null}
              </Container>
            </Fragment>
          </>         
          )
        }
    }
    </UsuarioContext.Consumer>

    );
}
