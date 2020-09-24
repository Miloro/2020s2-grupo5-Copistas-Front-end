import React, {Fragment} from "react";
import { getLibros } from "./Api";
import Libro from "./libro";

import CardDeck from "react-bootstrap/CardDeck";

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
        <NavBar propiedades = {this.state } ></NavBar>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.buscarLibros}>
          <label>
            <input
                className="form-control mr-sm-2" placeholder="Buscar Libro Por titulo"
              value={this.state.tituloABuscar}
              onChange={this.cambiarTituloABuscar}
            />
          </label>
          <button className="btn btn-outline-success my-2 my-sm-0">Buscar</button>
        </form>
        <CardDeck>
          {this.state.libros.map((libro,key) => (
            <Libro libro={libro} />
          ))}
        </CardDeck>
      </Fragment>
    );
  }
}
