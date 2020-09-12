import React from 'react'
import { getLibros } from './Api'
import Libro from './libro'
import LogoImg from '../components/LogoImg';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tituloABuscar: '',
            libros: []
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


    render() {
        return (
            <>
                <LogoImg />
                <form onSubmit={this.buscarLibros}>
                    <label>
                        Titulo:
                    <input type="text" value={this.state.tituloABuscar} onChange={this.cambiarTituloABuscar} />        </label>
                    <button >Buscar</button>

                </form>

                {       this.state.libros.map(libro => <Libro libro={libro} />)}
            </>
        );
    }


}