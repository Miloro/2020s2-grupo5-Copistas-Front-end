import React, {Fragment, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import "react-datepicker/dist/react-datepicker.css";
import DatosDelCliente from "./datosDelCliente";
import DatosDelLibro from "./datosDelLibro";

import { crearHojaDeRuta } from "./Api";
import NavBar from "./NavBar";

export default function HojaDeRuta() {
  const [destinatario_id, setDestinatario_id] = useState();

  const [solicitante_id, setSolicitante_id] = useState();

  const [libro_id, setLibro_id] = useState();

  const enviarHojaDeRuta = () => {
    //catch falta algun ID
    crearHojaDeRuta(destinatario_id, solicitante_id, libro_id);
  };

  return (
    <Fragment>
      <NavBar></NavBar>
      <Container>
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
            <DatosDelLibro libroId={setLibro_id} />
          </Col>
        </Row>
        <Row>
          <Button onClick={enviarHojaDeRuta}> crear hoja de ruta </Button>
        </Row>
      </Container>
    </Fragment>
  );
}
