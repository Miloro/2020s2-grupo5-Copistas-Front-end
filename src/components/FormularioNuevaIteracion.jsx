import React, { useState } from "react";
import { Form,  Button,  Col,  } from "react-bootstrap";
import { agregarIteracionParaHojaDeRuta } from "./Api";

export default function NuevaIteracion({idHojaDeRuta}) {
  const [personaencargada, setPersonaEncargada] = useState("");
  const [startDate, setStartDate] = useState();
  const [estadoDeIteracion, setestadoDeIteracion] = useState("DIGITALIZACION");

  const cambiarImputPersonaEncargada = (event) => {
    setPersonaEncargada(event.target.value);
  };

  const cambiarDia = (event) => {
    setStartDate(event.target.value);
  };

  const handleChange = (event) => {
    setestadoDeIteracion(event.target.value);
  };

  const enviarDatos = () => {
    var instancia = {
      personaEncargada: personaencargada,
      fechaAsignacion: formatoDia(startDate),
      tareaAsignada: estadoDeIteracion,
    };
    agregarIteracionParaHojaDeRuta(idHojaDeRuta, instancia).catch(e => {
      alert(e.response.data.mensaje)
    });
  };

  return (
    <div>
      <Form>
        <Form.Row xs={1} md={4}>
          <Col>
            <Form.Label>Persona Encargada</Form.Label>
            <Form.Control
              name="personaEncargada"
              value={personaencargada}
              onChange={cambiarImputPersonaEncargada}
              placeholder="Persona encargada"
              className="form-control"/>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" name="fechaDeNacimiento" onChange={cambiarDia} />
            </Form.Group>
          </Col>
          <Col>
          <Form.Label>Tarea Asignada</Form.Label>
          <Form.Control size="sm" as="select" value={estadoDeIteracion} onChange={handleChange} >
              <option value="DIGITALIZACION">DIGITALIZACION</option>
              <option value="CORRECION">CORRECION</option>
              <option value="VISADO">VISADO</option>
              <option value="ENVIO_DE_MAIL">ENVIO_DE_MAIL</option>
              <option value="IMPRESION_EN_BRAILE">IMPRESION_EN_BRAILE</option>
              <option value="ANILLADO">ANILLADO</option>
          </Form.Control>
          </Col>
          <Col>
          </Col>
          <Col> 
            <br/>
            <Button variant="primary" onClick={enviarDatos}>
              Crear tarea
            </Button>
          </Col>
        </Form.Row>
      </Form>

    </div>
  );
}

function formatoDia(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}
