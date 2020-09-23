import React from 'react'
import { getLibros } from './Api'
import Libro from './libro'
import LogoImg from '../components/LogoImg';
import CardDeck from 'react-bootstrap/CardDeck'
import CrearClienteModal from './crearClienteModal'
import CrearLibroModal from './crearLibroModal'
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar'
import  { BrowserRouter, Switch, Route, NavLink, Link, Nav,  Redirect } from 'react-router-dom';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tituloABuscar: '',
            abierto: false,
            libros: [],
            show: false,
        };
        this.cambiarTituloABuscar = this.cambiarTituloABuscar.bind(this);
        this.buscarLibros = this.buscarLibros.bind(this);
    }

    componentDidMount() {

    }


    cambiarTituloABuscar(event) {
        this.setState({ tituloABuscar: event.target.value });
    }

    buscarLibros(event) {
        event.preventDefault();
        this.guardarLibros(this.state.tituloABuscar);
    }

    guardarLibros(titulo) {
        getLibros(titulo).then(libros => {
            this.setState({ libros })
        })
    }

    cerrarModal = () => {
        this.setState({
            abierto: false
        });
    }

    cerrarLibroModal = () => {
        this.setState({
            show: false
        });
    }

    abrirModal = () => {
        this.setState({
            abierto: true
        });
    }
    abrirLibroModal = () => {
        this.setState({
            show: true
        });
    }


    render() {
        return (
            <>
                <BrowserRouter>
                <NavBar/> 
            
                </BrowserRouter>               
               
                <form onSubmit={this.buscarLibros}>
                    <label>
                        Titulo:
                    <input type="text" value={this.state.tituloABuscar} onChange={this.cambiarTituloABuscar} />        </label>

                    <button >Buscar</button>

                </form>
                <CardDeck>
                    {this.state.libros.map(libro => <Libro libro={libro} />)}
                </CardDeck>
            </>
        );
    }
}
