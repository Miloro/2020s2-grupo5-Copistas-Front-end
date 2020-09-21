import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button';

import "react-datepicker/dist/react-datepicker.css";
import DatosDelCliente from "./datosDelCliente";
import DatosDelLibro from "./datosDelLibro";

import { crearHojaDeRuta } from "./Api"

export default function HojaDeRuta() {

    const [destinatario_id, setDestinatario_id] = useState(0)
    const [solicitante_id, setSolicitante_id] = useState(0)
    const [libro_id, setLibro_id] = useState(0)

    const enviarHojaDeRuta = () => {
        crearHojaDeRuta(destinatario_id, solicitante_id, libro_id)
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
                        <DatosDelLibro libroId={setLibro_id} />
                    </Col>
                </Row>
                <Row>
                    <Button onClick={enviarHojaDeRuta} > crear hoja de ruta </Button>
                </Row>
            </Container>
        </div>
    );
}