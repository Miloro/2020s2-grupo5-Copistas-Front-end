import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import CrearClienteModal from "./CrearClienteModal";
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

      <fieldset id="contenedorAzul">
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
            <label className="font-weight-bold" >Nombre:&nbsp;</label>
            {cliente.nombre}
          </div>
          <div>
            <label className="font-weight-bold" >Apellido:&nbsp;</label>
            {cliente.apellido}
          </div>
          <div>
            <label className="font-weight-bold">DNI:&nbsp;</label>
            {cliente.dni}
          </div>
          <div>
            <label className="font-weight-bold">CUIL/CUIT:&nbsp;</label>
            {cliente.cuilORcuit}
          </div>
          <div>
            <label className="font-weight-bold">Fecha de nacimiento:&nbsp;</label>
            {cliente.fechaDeNacimiento}
          </div>
          <div>
            <label className="font-weight-bold">Sexo:&nbsp;</label>
            {cliente.sexo}
          </div>
          <div>
            <label className="font-weight-bold">Nivel discapacidad visual:&nbsp;</label>
            {cliente.nivelDiscapacidadVisual}
          </div>
          <div>
            <label className="font-weight-bold">Domicilio:&nbsp;</label>
            {cliente.domicilio}
          </div>
          <div>
            <label className="font-weight-bold">Ciudad:&nbsp;</label>
            {cliente.ciudad}
          </div>
          <div>
            <label className="font-weight-bold">Provincia:&nbsp;</label>
            {cliente.provincia}
          </div>
          <div>
            <label className="font-weight-bold">Teléfono Fijo:&nbsp;</label>
            {cliente.telefonoFijo}
          </div>
          <div>
            <label className="font-weight-bold">Teléfono Movil:&nbsp;</label>
            {cliente.telefonoMovil}
          </div>
          <div>
            <label className="font-weight-bold">eMail:&nbsp;</label>
            {cliente.correoElectronico}
          </div>
        </Container>
      </fieldset>
    </Fragment>
  );
}