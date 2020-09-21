import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button';
import CrearLibroModal from './crearLibroModal'

import "react-datepicker/dist/react-datepicker.css";
import DatosDelCliente from "./datosDelCliente";
import DatosDelLibro from "./datosDelLibro";



export default function HojaDeRuta() {

    const [estadoModalLibro, setEstadoModalLibro] = useState(false)

    const [destinatario_id, setDestinatario_id] = useState(0)
    const [solicitante_id, setSolicitante_id] = useState(0)
    const [libro_id, setLibro_id] = useState(0)


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


    const aaa = () => {
        console.log(destinatario_id)
        console.log(solicitante_id)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <DatosDelCliente titulo={"Solicitante"} clienteId={setDestinatario_id} />
                    </Col>
                    <Col>
                        <DatosDelCliente titulo={"Destinatario"} clienteId={setSolicitante_id} />
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