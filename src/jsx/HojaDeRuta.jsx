import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CrearClienteModal from './crearClienteModal'
import Button from 'react-bootstrap/Button';
import CrearLibroModal from './crearLibroModal'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function HojaDeRuta() {

    const [estadoModalSolicitante, setEstadoModalSolicitante] = useState(false)
    const [estadoModalDestinatario, setEstadoModalDestinatario] = useState(false)
    const [estadoModalLibro, setEstadoModalLibro] = useState(false)
    const [solicitante, setSolicitante] = useState({
        "nombre": "",
        "apellido": "",
        "dni": 0,
        "cuilORcuit": 0,
        "domicilio": "",
        "ciudad": "",
        "provincia": "",
        "telefonoFijo": 0,
        "telefonoMovil": 0,
        "correoElectronico": "",
        "fechaDeNacimiento": "2020-09-08",
        "sexo": "HOMBRE",
        "nivelDiscapacidadVisual": ""
    })
    const [startDate, setStartDate] = useState(new Date());

    const abrirModalSolicitante = () => {
        setEstadoModalSolicitante(true)

    }

    const cerrarModalSolicitante = () => {
        setEstadoModalSolicitante(false)
    }

    const abrirModalDestinatario = () => {
        setEstadoModalDestinatario(true)

    }

    const cerrarModalDestinatario = () => {
        setEstadoModalDestinatario(false)
    }

    const abrirModalLibro = () => {
        setEstadoModalLibro(true)

    }

    const cerrarModalLibro = () => {
        setEstadoModalLibro(false)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Solicitante
                        <Button onClick={abrirModalSolicitante} > + Solicitante </Button>
                        <CrearClienteModal abierto={estadoModalSolicitante} cerrarModal={cerrarModalSolicitante} darId={setSolicitante} />
                        <Row>
                            <label>nombre: {solicitante.nombre}</label>
                        </Row>
                        <Row>
                            <label>apellido: {solicitante.apellido}</label>
                        </Row>
                        <Row>
                            <label>dni: {solicitante.dni}</label>
                        </Row>
                        <Row>
                            <label>cuilORcuit: {solicitante.cuilORcuit}</label>
                        </Row>
                        <Row>
                            <label>domicilio: {solicitante.domicilio}</label>
                        </Row>
                        <Row>
                            <label>ciudad: {solicitante.ciudad}</label>
                        </Row>
                        <Row>
                            <label>provincia: {solicitante.provincia}</label>
                        </Row>
                        <Row>
                            <label>telefonoFijo: {solicitante.telefonoFijo}</label>
                        </Row>
                        <Row>
                            <label>telefonoMovil: {solicitante.telefonoMovil}</label>
                        </Row>
                        <Row>
                            <label>correoElectronico: {solicitante.correoElectronico}</label>
                        </Row>
                        <Row>
                            <label>fechaDeNacimiento: {solicitante.fechaDeNacimiento}</label>
                        </Row>
                        <Row>
                            <label>sexo: {solicitante.sexo}</label>
                        </Row>
                        <Row>
                            <label>nivelDiscapacidadVisual: {solicitante.nivelDiscapacidadVisual}</label>
                        </Row>
                    </Col>
                    <Col>
                        Solicitante
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        <Button onClick={abrirModalDestinatario} > + Destinatario </Button>
                        <CrearClienteModal abierto={estadoModalDestinatario} cerrarModal={abrirModalDestinatario} />
                    </Col>
                    <Col>
                        Solicitante
                        <Button onClick={abrirModalLibro} > + libro </Button>
                        <CrearLibroModal show={estadoModalLibro} cerrarLibroModal={cerrarModalLibro} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}