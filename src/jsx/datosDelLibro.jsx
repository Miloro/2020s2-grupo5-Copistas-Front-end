import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button';
import CrearLibroModal from './crearLibroModal'

import "react-datepicker/dist/react-datepicker.css";

export default function DatosDelLibro({ libroId }) {

    const [estadoModalLibro, setEstadoModalLibro] = useState(false)
    const [libro, setLibro] = useState({
        "titulo": "",
        "nombreAutor": "",
        "apellidoAutor": " ",
        "editorial": "",
        "edicion": "",
        "idioma": "",
        "categoria": ""
    })

    const abrirModalLibro = () => {
        setEstadoModalLibro(true)

    }

    const cerrarModalLibro = () => {
        setEstadoModalLibro(false)
    }

    return (
        <div>
            <Col>
                Libro
                <Button onClick={abrirModalLibro} > + </Button>
                <CrearLibroModal show={estadoModalLibro} cerrarLibroModal={cerrarModalLibro} actualizarLibro={setLibro} libroId={libroId} />
                <Row>
                    <label>Titulo: {libro.titulo}</label>
                </Row>
                <Row>
                    <label>Nombre del autor: {libro.nombreAutor}</label>
                </Row>
                <Row>
                    <label>Apellido del autor: {libro.apellidoAutor}</label>
                </Row>
                <Row>
                    <label>Editorial: {libro.editorial}</label>
                </Row>
                <Row>
                    <label>Edicion: {libro.edicion}</label>
                </Row>
                <Row>
                    <label>Idioma: {libro.idioma}</label>
                </Row>
                <Row>
                    <label>Categoria: {libro.categoria}</label>
                </Row>
            </Col>
        </div>
    );
}