import React, {Fragment} from "react";

import LogoImg from "./LogoImg";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
      this.cambiarTituloABuscar = this.cambiarTituloABuscar.bind(this);
      this.buscarLibros = this.buscarLibros.bind(this);
  }

    cambiarTituloABuscar(event) {
        this.setState({ tituloABuscar: event.target.value });
    }

    buscarLibros(){
      console.log("hola")
    }

  render() {
    return (
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <LogoImg class="img-rounded" alt="Cinque Terre" className="logo" />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/hojaDeRuta">Crear Hoja De Ruta</a>
              </li>
            </ul>
          </div>
        </nav>
        </Fragment>
    );
  }
}
