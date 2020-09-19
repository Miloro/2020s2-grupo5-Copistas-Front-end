import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { crearCliente } from './Api'
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)


export default function CrearClienteModal({ abierto, cerrarModal, actualizarCliente }) {

    const [cliente, setCliente] = useState({
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
        nivelDiscapacidadVisual: ""
    })

    const handleInputChange = (event) => {
        setCliente({
            ...cliente,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        crearCliente(cliente).then(clienteCreado => {
            actualizarCliente(clienteCreado)
        });
        cerrarModal()
    }

    const handleChange = date => {
        setCliente({
            fechaDeNacimiento: date
        });
        console.log(cliente.fechaDeNacimiento.toString('YYYY-MM-dd'))
    };



    return (
        <Modal show={abierto} onHide={cerrarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row" >
                    <label>Nombre</label>
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                    <label>Apellido</label>
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                    <label>DNI</label>
                    <input type="int" placeholder="DNI" className="form-control" onChange={handleInputChange} name="dni"></input>
                    <label>CUIL o RCUIT</label>
                    <input type="int" placeholder="CUIL o RCUIT" className="form-control" onChange={handleInputChange} name="cuilORcuit"></input>
                    <label>Domicilio</label>
                    <input type="int" placeholder="Domicilio" className="form-control" onChange={handleInputChange} name="domicilio"></input>
                    <label>Ciudad</label>
                    <input type="int" placeholder="Ciudad" className="form-control" onChange={handleInputChange} name="ciudad"></input>
                    <label>Provincia</label>
                    <input type="int" placeholder="Provincia" className="form-control" onChange={handleInputChange} name="provincia"></input>
                    <label>Telefono fijo</label>
                    <input type="int" placeholder="Telefono fijo" className="form-control" onChange={handleInputChange} name="telefonoFijo"></input>
                    <label>Telefono movil</label>
                    <input type="int" placeholder="Telefono movil" className="form-control" onChange={handleInputChange} name="telefonoMovil"></input>
                    <label>Correo electronico</label>
                    <input type="int" placeholder="Correo electronico" className="form-control" onChange={handleInputChange} name="correoElectronico"></input>
                    <label>Fecha de nacimiento</label>
                    <DatePicker
                        selected={cliente.fechaDeNacimiento}
                        onChange={handleChange}
                        locale="es"
                        dateFormat="dd/MM/yyyy"

                    />
                    <label>Sexo</label>
                    <input type="int" placeholder="Sexo" className="form-control" onChange={handleInputChange} name="sexo"></input>
                    <label>Nivel discapacidad visual</label>
                    <input type="int" placeholder="Nivel discapacidad visual" className="form-control" onChange={handleInputChange} name="nivelDiscapacidadVisual"></input>
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