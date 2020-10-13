import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import CrearClienteModal from "./crearClienteModal";
import { getClientePorDNI } from "./Api";
import "../css/hojaDeRuta.css";

import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";

export default function DatosDelCliente({ titulo, setClienteId }) {
  const [dniABuscar, setDniABuscar] = useState("");

  const [estadoModalCliente, setEstadoModalCliente] = useState(false);

  const [cliente, setCliente] = useState({
    id: "",
    nombre: "",
    apellido: "",
    dni: "",
    cuilORcuit: "",
    domicilio: "",
    ciudad: "",
    provincia: "",
    telefonoFijo: "",
    telefonoMovil: "",
    correoElectronico: "",
    fechaDeNacimiento: "",
    sexo: "",
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
    <Fragment>
      <CrearClienteModal
        abierto={estadoModalCliente}
        cerrarModal={cerrarModalCliente}
        actualizarCliente={setCliente}
        setClienteId={setClienteId}
      />

      <fieldset id={"contenedor"}>
        <Container className={"m-3"}>
          <div className="tituloConBoton">
            <h4>{titulo}</h4>
            <button
              type="button"
              className="btn btn-primary "
              onClick={abrirModalCliente}
            >
              +
            </button>
          </div>

          <div className="tituloConBoton">
            <input
              className="flex"
              placeholder="buscar por DNI"
              value={dniABuscar}
              onChange={cambiarDniABuscar}
            />
            <Button onClick={buscarClientePorDni}> Buscar</Button>
          </div>
          <div>
            <label>Nombre: {cliente.nombre}</label>
          </div>
          <div>
            <label>Apellido: {cliente.apellido}</label>
          </div>
          <div>
            <label>DNI: {cliente.dni}</label>
          </div>
          <div>
            <label>CUIL/CUIT: {cliente.cuilORcuit}</label>
          </div>
          <div>
            <label>Domicilio: {cliente.domicilio}</label>
          </div>
          <div>
            <label>Ciudad: {cliente.ciudad}</label>
          </div>
          <div>
            <label>Provincia: {cliente.provincia}</label>
          </div>
          <div>
            <label>Teléfono Fijo: {cliente.telefonoFijo}</label>
          </div>
          <div>
            <label>Teléfono Movil: {cliente.telefonoMovil}</label>
          </div>
          <div>
            <label>eMail: {cliente.correoElectronico}</label>
          </div>
          <div>
            <label>Fecha de nacimiento: {cliente.fechaDeNacimiento}</label>
          </div>
          <div>
            <label>Sexo: {cliente.sexo}</label>
          </div>
          <div>
            <label>
              Nivel discapacidad visual: {cliente.nivelDiscapacidadVisual}
            </label>
          </div>
        </Container>
      </fieldset>
    </Fragment>
  );
}
