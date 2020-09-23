import React from "react";
import { Link } from "react-router-dom";

import LogoImg from "../components/LogoImg";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abierto: false,
      show: false,
    };
  }
  cerrarLibroModal = () => {
    this.setState({
      show: false,
    });
  };

  abrirModal = () => {
    this.setState({
      abierto: true,
    });
  };
  abrirLibroModal = () => {
    this.setState({
      show: true,
    });
  };

  cerrarModal = () => {
    this.setState({
      abierto: false,
    });
  };

  render() {
    return (
      <nav className="nav">
        <LogoImg class="img-rounded" alt="Cinque Terre" className="logo" />
        {/*<Button onClick={this.abrirLibroModal} > Crear Libro </Button>
            <CrearLibroModal show={this.state.show} cerrarLibroModal={this.cerrarLibroModal} />
            <Button onClick={this.abrirModal} > Crear Cliente </Button>
        <CrearClienteModal abierto={this.state.abierto} cerrarModal={this.cerrarModal} />*/}
        <Link className="nav-link" to="/hojaDeRuta">
          page
        </Link>

        <Link to={(location) => ({ ...location, pathname: "/hojaDeRuta" })}>
          hola que tul
        </Link>

        <Link to={(location) => `${location.pathname}?sort=name`} />
      </nav>
    );
  }
}
