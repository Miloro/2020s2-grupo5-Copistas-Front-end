import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { crearCliente } from "./Api";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

registerLocale("es", es);

export default function CrearClienteModal({
  abierto,
  cerrarModal,
  actualizarCliente,
  setClienteId,
}) {
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
    fechaDeNacimiento: new Date(),
    sexo: "HOMBRE",
    nivelDiscapacidadVisual: "",
  });

  const cambiarOpcionSexo = (event) => {
    setCliente({
      ...cliente,
      sexo: event.target.value,
    });
  };

  const handleInputChange = (event) => {
    setCliente({
      ...cliente,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    crearCliente(cliente).then((clienteCreado) => {
      actualizarCliente(clienteCreado);
      setClienteId(clienteCreado.id);
      console.log(clienteCreado);
    });
    cerrarModal();
  };

  const handleChange = (date) => {
    setCliente({
      fechaDeNacimiento: date,
    });
    console.log(cliente.fechaDeNacimiento.toString("YYYY-MM-dd"));
  };

  return (
    <Modal show={abierto} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <InputForm
            label="Nombre"
            name="nombre"
            onChange={handleInputChange}
          />
          <InputForm
            label="Apellido"
            name="apellido"
            onChange={handleInputChange}
          />
          <InputForm label="DNI" name="dni" onChange={handleInputChange} />
          <InputForm
            label="CUIL o CUIT"
            name="cuilORcuit"
            onChange={handleInputChange}
          />
          <InputForm
            label="Domicilio"
            name="domicilio"
            onChange={handleInputChange}
          />
          <InputForm
            label="Ciudad"
            name="ciudad"
            onChange={handleInputChange}
          />
          <InputForm
            label="Provincia"
            name="provincia"
            onChange={handleInputChange}
          />
          <InputForm
            label="Telefono fijo"
            name="telefonoFijo"
            onChange={handleInputChange}
          />
          <InputForm
            label="Telefono movil"
            name="telefonoMovil"
            onChange={handleInputChange}
          />
          <InputForm
            label="Correo electronico"
            name="correoElectronico"
            onChange={handleInputChange}
          />
          <div>
            <label>Fecha de nacimiento </label> <br />
            <DatePicker
              selected={cliente.fechaDeNacimiento}
              onChange={handleChange}
              locale="es"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div onChange={cambiarOpcionSexo}>
            <label>Sexo</label> <br />
            <input type="radio" value="HOMBRE" name="gender" /> Hombre
            <input type="radio" value="MUJER" name="gender" /> Mujer
          </div>
          <div>
            <label>Nivel discapacidad visual</label>
            <input
              placeholder="Nivel discapacidad visual"
              className="form-control"
              onChange={handleInputChange}
              name="nivelDiscapacidadVisual"
            ></input>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cerrarModal}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={enviarDatos}>
          Guardar cliente
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function InputForm({ label, ...props }) {
  //name onchange
  return (
    <div>
      <label>{label}</label>
      <input {...props} placeholder={label} className="form-control"></input>
    </div>
  );
}
