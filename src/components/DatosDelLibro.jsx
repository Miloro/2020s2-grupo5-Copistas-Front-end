import React, {Fragment, useState} from "react";

import Button from "react-bootstrap/Button";
import CrearLibroModal from "./CrearLibroModal";

import "react-datepicker/dist/react-datepicker.css";
import {getLibros} from "./Api";
import Container from "react-bootstrap/Container";

export default function DatosDelLibro({libroId}) {
    const [estadoModalLibro, setEstadoModalLibro] = useState(false);
    const [tituloABuscar, setTituloABuscar] = useState("");
    const [libro, setLibro] = useState({
        titulo: "",
        nombreAutor: "",
        apellidoAutor: " ",
        editorial: "",
        edicion: "",
        idioma: "",
        categoria: "",
    });

    const abrirModalLibro = () => {
        setEstadoModalLibro(true);
    };

    const cerrarModalLibro = () => {
        setEstadoModalLibro(false);
    };

    const cambiarTituloABuscar = (event) => {
        setTituloABuscar(event.target.value);
    };

    const buscarLibroPorTitulo = () => {
        getLibros(tituloABuscar).then((libros) => {
            !!libros[0]
                ? setearLibro(libros[0])
                : setLibro(libro);
        });
    };

    const setearLibro = (libro) => {
        setLibro(libro);
        libroId(libro.id);
    };

    return (
        <Fragment>

            <CrearLibroModal
                show={estadoModalLibro}
                cerrarLibroModal={cerrarModalLibro}
                actualizarLibro={setLibro}
                libroId={libroId}
            />

            <fieldset id={"contenedor"}>
                <Container className={"m-3"}>
                    <div className="tituloConBoton">
                        <h4> Libro </h4>
                        <Button onClick={abrirModalLibro}> + </Button>
                    </div>
                    <div className="tituloConBoton">
                        <input
                            placeholder="Buscar por titulo"
                            value={tituloABuscar}
                            onChange={cambiarTituloABuscar}
                        />
                        <Button onClick={buscarLibroPorTitulo}> Buscar</Button>
                    </div>
                    <div>
                        <label>Título: {libro.titulo}</label>
                    </div>
                    <div>
                        <label>Nombre del autor: {libro.nombreAutor}</label>
                    </div>
                    <div>
                        <label>Apellido del autor: {libro.apellidoAutor}</label>
                    </div>
                    <div>
                        <label>Editorial: {libro.editorial}</label>
                    </div>
                    <div>
                        <label>Edición: {libro.edicion}</label>
                    </div>
                    <div>
                        <label>Idioma: {libro.idioma}</label>
                    </div>
                    <div>
                        <label>Categoría: {libro.categoria}</label>
                    </div>
                </Container>
            </fieldset>
        </Fragment>
    );
}
