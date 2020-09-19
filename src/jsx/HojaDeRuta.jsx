import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CrearClienteModal from './crearClienteModal'
import Button from 'react-bootstrap/Button';
import CrearLibroModal from './crearLibroModal'

import "react-datepicker/dist/react-datepicker.css";
import DatosDelCliente from "./datosDelCliente";
import DatosDelLibro from "./datosDelLibro";

import { crearHojaDeRuta } from "./Api"

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

    const [destinatario, setDestinatario] = useState({
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

    const [libro, setLibro] = useState({
        "titulo": "",
        "nombreAutor": "",
        "apellidoAutor": " ",
        "editorial": "",
        "edicion": "",
        "idioma": "",
        "categoria": ""
    })



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

    const aaa = () => {
        console.log(solicitante.id)
        console.log(destinatario.id)
        console.log(libro.id)
        crearHojaDeRuta(solicitante.id, destinatario.id, libro.id)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Solicitante
                        <Button onClick={abrirModalSolicitante} > + Solicitante </Button>
                        <CrearClienteModal abierto={estadoModalSolicitante} cerrarModal={cerrarModalSolicitante} actualizarCliente={setSolicitante} />
                        <DatosDelCliente cliente={solicitante} />
                    </Col>
                    <Col>
                        Destinatario
                        <Button onClick={abrirModalDestinatario} > + Destinatario </Button>
                        <CrearClienteModal abierto={estadoModalDestinatario} cerrarModal={cerrarModalDestinatario} actualizarCliente={setDestinatario} />
                        <DatosDelCliente cliente={destinatario} />
                    </Col>
                    <Col>
                        Libro
                        <Button onClick={abrirModalLibro} > + libro </Button>
                        <CrearLibroModal show={estadoModalLibro} cerrarLibroModal={cerrarModalLibro} actualizarLibro={setLibro} />
                        <DatosDelLibro libro={libro} />
                    </Col>
                </Row>
                <Row>
                    <Button onClick={aaa} > crear hoja de ruta </Button>
                </Row>
            </Container>
        </div>
    );
}