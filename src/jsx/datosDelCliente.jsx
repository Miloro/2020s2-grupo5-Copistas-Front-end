import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "react-datepicker/dist/react-datepicker.css";

export default function DatosDelCliente({ cliente }) {

    return (
        <div>
            <Col>
                <Row>
                    <label>nombre: {cliente.nombre}</label>
                </Row>
                <Row>
                    <label>apellido: {cliente.apellido}</label>
                </Row>
                <Row>
                    <label>dni: {cliente.dni}</label>
                </Row>
                <Row>
                    <label>cuilORcuit: {cliente.cuilORcuit}</label>
                </Row>
                <Row>
                    <label>domicilio: {cliente.domicilio}</label>
                </Row>
                <Row>
                    <label>ciudad: {cliente.ciudad}</label>
                </Row>
                <Row>
                    <label>provincia: {cliente.provincia}</label>
                </Row>
                <Row>
                    <label>telefonoFijo: {cliente.telefonoFijo}</label>
                </Row>
                <Row>
                    <label>telefonoMovil: {cliente.telefonoMovil}</label>
                </Row>
                <Row>
                    <label>correoElectronico: {cliente.correoElectronico}</label>
                </Row>
                <Row>
                    <label>fechaDeNacimiento: {cliente.fechaDeNacimiento}</label>
                </Row>
                <Row>
                    <label>sexo: {cliente.sexo}</label>
                </Row>
                <Row>
                    <label>nivelDiscapacidadVisual: {cliente.nivelDiscapacidadVisual}</label>
                </Row>
            </Col>
        </div>
    );
}