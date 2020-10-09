import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, Button, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NuevaIteracion from "./FormularioNuevaIteracion"
import { getHojaDeRuta } from "./Api";

export default function HojaDeRutaModal({ libro, abierto, cerrarModal }) {
  const [hojaDeRuta, setHojaDeRuta] = useState(null);

  useEffect(() => {
    getHojaDeRuta(libro.id).then((unaHojaDeRuta) => {
      setHojaDeRuta(unaHojaDeRuta);
    });
  });

  function mostrarIteraciones() {
    return (<div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre de persona Encargada</th>
            <th>Fecha en la que se va a hacer cargo</th>
            <th>Tarea asignada</th>
          </tr>
        </thead>
        <tbody>
        {hojaDeRuta.historialDeEstado.map((iteracion) => {
          return (
                <tr>
                  <td>{iteracion.personaEncargada}</td>
                  <td>{iteracion.fechaAsignacion}</td>
                  <td>{iteracion.tareaAsignada}</td>
                </tr>
          )
        })}
        </tbody>
      </Table>
      </div>
  );
  }

  function mostrarData() {
    return (
      <div>
          <Row>
            <Col xs={6} md={4}>
                Nombre de Solicitante: {hojaDeRuta.solicitante.nombre}<br/>
                Apellido de Solicitante: {hojaDeRuta.solicitante.apellido}<br/>
                Dni del Solicitante: {hojaDeRuta.solicitante.dni}<br/>
            </Col>
            <Col xs={6} md={4}>
              Nombre de Destinatario: {hojaDeRuta.destinatario.nombre}<br/>
              Apellido de Destinatario: {hojaDeRuta.destinatario.apellido}<br/>
              Dni del Destinatario: {hojaDeRuta.destinatario.dni}<br/>
            </Col>
            <Col xs={6} md={4}>
                Titulo del Libro: {hojaDeRuta.libro.titulo}<br/>
            </Col>
          </Row>
        {mostrarIteraciones()}
        <NuevaIteracion idHojaDeRuta = {hojaDeRuta.id}/>
      </div>
    );
  }

  return (
    <Modal show={abierto} onHide={cerrarModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
          <Modal.Title>Hoja de Ruta</Modal.Title>
      </Modal.Header>
      <ModalBody>
        {!!hojaDeRuta ? <div>{mostrarData()}</div> : "buscando..."}
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={cerrarModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
