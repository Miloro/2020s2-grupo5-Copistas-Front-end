import React, { Fragment } from "react";
import { getLibros } from "./Api";

import NavBar from "./NavBar";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tituloABuscar: "",
      libros: [],
    };
    this.cambiarTituloABuscar = this.cambiarTituloABuscar.bind(this);
    this.buscarLibros = this.buscarLibros.bind(this);
  }

  componentDidMount() {}

  cambiarTituloABuscar(event) {
    this.setState({ tituloABuscar: event.target.value });
  }

  buscarLibros(event) {
    event.preventDefault();
    this.guardarLibros(this.state.tituloABuscar);
  }

  guardarLibros(titulo) {
    getLibros(titulo).then((libros) => {
      this.setState({ libros });
    });
  }

  abrirLibroModal = () => {
    this.setState({
      show: true,
    });
  };


  render() {
    return (
      <Fragment>
        <NavBar ></NavBar>
      </Fragment>
    );
  }
}
