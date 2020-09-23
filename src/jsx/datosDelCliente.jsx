import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CrearClienteModal from "./crearClienteModal";
import { getClientePorDNI } from "./Api";

import "react-datepicker/dist/react-datepicker.css";

export default function DatosDelCliente({ titulo, setClienteId }) {
  const [dniABuscar, setDniABuscar] = useState("");

  const [estadoModalCliente, setEstadoModalCliente] = useState(false);

  const [cliente, setCliente] = useState({
    id: "",
    nombre: "",
    apellido: "",
    dni: 0,
    cuilORcuit: 0,
    domicilio: "",
    ciudad: "",
    provincia: "",
    telefonoFijo: 0,
    telefonoMovil: 0,
    correoElectronico: "",
    fechaDeNacimiento: "2020/09/08",
    sexo: "HOMBRE",
    nivelDiscapacidadVisual: "",
  });

  const abrirModalCliente = () => {
    setEstadoModalCliente(true);
  };

  const cerrarModalCliente = () => {
    setEstadoModalCliente(false);
  };

  const cambiarDniABuscar = (event) => {
    if (!Number(event.target.value) && event.target.value !== "") {
      return;
    }
    setDniABuscar(event.target.value);
  };

  const buscarClientePorDni = () => {
    getClientePorDNI(dniABuscar).then((clienteEncontrado) => {
      !!clienteEncontrado[0]
        ? setearCliente(clienteEncontrado[0])
        : setCliente(cliente);
    });
  };

  const setearCliente = (cliente) => {
    setCliente(cliente);
    setClienteId(cliente.id);
  };

  return (
    <div>
      <Col>
        {titulo}
        <Button onClick={abrirModalCliente}> + </Button>
        <CrearClienteModal
          abierto={estadoModalCliente}
          cerrarModal={cerrarModalCliente}
          actualizarCliente={setCliente}
          setClienteId={setClienteId}
        />
        <Row>
          <Col>
            <input
              class="form-control"
              value={dniABuscar}
              onChange={cambiarDniABuscar}
            />
          </Col>
          <Col>
            <Button onClick={buscarClientePorDni}> Buscar por DNI</Button>
          </Col>
        </Row>
        <Row>
          <label>Nombre: {cliente.nombre}</label>
        </Row>
        <Row>
          <label>Apellido: {cliente.apellido}</label>
        </Row>
        <Row>
          <label>DNI: {cliente.dni}</label>
        </Row>
        <Row>
          <label>CUIL/CUIT: {cliente.cuilORcuit}</label>
        </Row>
        <Row>
          <label>Domicilio: {cliente.domicilio}</label>
        </Row>
        <Row>
          <label>Ciudad: {cliente.ciudad}</label>
        </Row>
        <Row>
          <label>Provincia: {cliente.provincia}</label>
        </Row>
        <Row>
          <label>Teléfono Fijo: {cliente.telefonoFijo}</label>
        </Row>
        <Row>
          <label>Teléfono Movil: {cliente.telefonoMovil}</label>
        </Row>
        <Row>
          <label>eMail: {cliente.correoElectronico}</label>
        </Row>
        <Row>
          <label>Fecha de nacimiento: {cliente.fechaDeNacimiento}</label>
        </Row>
        <Row>
          <label>Sexo: {cliente.sexo}</label>
        </Row>
        <Row>
          <label>
            Nivel discapacidad visual: {cliente.nivelDiscapacidadVisual}
          </label>
        </Row>
      </Col>
    </div>
  );
}
