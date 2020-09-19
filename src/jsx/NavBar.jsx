import React from 'react'
import  { BrowserRouter, Switch, Route, NavLink, Link, Nav,  Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CrearLibroModal from './crearLibroModal'
import CrearClienteModal from './crearClienteModal'


export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            abierto: false,
            show: false,
        };
    }
    cerrarLibroModal = () => {
    this.setState({
        show: false
    });
    };
    
    abrirModal = () => {
    this.setState({
        abierto: true
    });
    };
    abrirLibroModal = () => {
    this.setState({
        show: true
    });
    };

    cerrarModal = () => {
        this.setState({
            abierto: false
        });
    }


    render(){
        return(
            <nav className="nav">
            <Button onClick={this.abrirLibroModal} > Crear Libro </Button>
            <CrearLibroModal show={this.state.show} cerrarLibroModal={this.cerrarLibroModal} />
            <Button onClick={this.abrirModal} > Crear Cliente </Button>
            <CrearClienteModal abierto={this.state.abierto} cerrarModal={this.cerrarModal} />
            <Link className="nav-link" to="/page">page</Link>
        </nav>
      );
    }

}