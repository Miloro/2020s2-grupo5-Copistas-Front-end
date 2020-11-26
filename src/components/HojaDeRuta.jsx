import React, {Fragment, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from 'react-bootstrap/Alert'
import Button from "react-bootstrap/Button";

import "react-datepicker/dist/react-datepicker.css";
import DatosDelCliente from "./DatosDelCliente";
import DatosDelLibro from "./DatosDelLibro";

import {crearHojaDeRuta} from "./Api";
import NavBar from "./NavBar";

export default function HojaDeRuta() {
    const [destinatario_id, setDestinatario_id] = useState();

    const [solicitante_id, setSolicitante_id] = useState();

    const [libro_id, setLibro_id] = useState();


    const [estadoAlert, setEstadoAlert] = useState({
        show: false,
        estado: '',
        cuerpo: "",
        boton:''
    });


    const enviarHojaDeRuta = () => {
        //catch falta algun ID

        if (destinatario_id === undefined || solicitante_id === undefined || libro_id === undefined) {
            setEstadoAlert({
                show: true,
                estado: 'danger',
                cuerpo: "falta completar datos",
                boton: "outline-danger"
            })
        } else {
            crearHojaDeRuta(destinatario_id, solicitante_id, libro_id).then(() => {
                setEstadoAlert({
                    show: true,
                    estado: 'success',
                    cuerpo: "se creo la hoja de ruta correctamente",
                    boton: "outline-success"
                })
            })
        }


    };

    return (
        <Fragment>
            <NavBar/>
            <Container>
                <h1 className={"mb-4"}>CREAR HOJA DE RUTA</h1>
                <Alert show={estadoAlert.show} variant={estadoAlert.estado}>
                    <p>
                        {estadoAlert.cuerpo}
                    </p>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <Button  onClick={() => setEstadoAlert({...estadoAlert, show: false})} variant={estadoAlert.boton}>
                            Cerrar
                        </Button>
                    </div>
                </Alert>
                <Row>
                    <Col>
                        <DatosDelCliente
                            titulo={"Solicitante"}
                            setClienteId={setDestinatario_id}
                        />
                    </Col>
                    <Col>
                        <DatosDelCliente
                            titulo={"Destinatario"}
                            setClienteId={setSolicitante_id}
                        />
                    </Col>
                    <Col>
                        <DatosDelLibro libroId={setLibro_id}/>
                    </Col>
                </Row>
                <div className="pull-right button-group">
                    <Button className={"m-4 "} onClick={enviarHojaDeRuta}> Crear </Button>
                </div>
            </Container>
        </Fragment>
    );
}
