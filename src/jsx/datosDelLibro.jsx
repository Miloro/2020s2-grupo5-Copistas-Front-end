import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "react-datepicker/dist/react-datepicker.css";

export default function DatosDelLibro({ libro }) {

    return (
        <div>
            <Col>
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