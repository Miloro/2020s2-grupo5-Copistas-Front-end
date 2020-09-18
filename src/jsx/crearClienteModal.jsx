import React, { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { crearCliente } from './Api'

export default function CrearClienteModal({ abierto, cerrarModal, darId }) {

    const [cliente, setCliente] = useState({
        "nombre": "",
        "apellido": "",
        "dni": 0,
        "cuilORcuit": 0,
        "domicilio": "",
        "ciudad": "",
        "provincia": "",
        "telefonoFijo": 0,
        "telefonoMovil": 0,
        "correoElectronico": "",
        "fechaDeNacimiento": "2020-09-08",
        "sexo": "HOMBRE",
        "nivelDiscapacidadVisual": ""
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
            darId(clienteCreado)
        });
        cerrarModal()
    }

    return (
        <Modal show={abierto}>
            <ModalBody>
                <h1>Crear Cliente</h1>
                <form className="row" onSubmit={enviarDatos}>
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                    <input type="int" placeholder="dni" className="form-control" onChange={handleInputChange} name="dni"></input>
                    <input type="int" placeholder="cuilORcuit" className="form-control" onChange={handleInputChange} name="cuilORcuit"></input>
                    <input type="int" placeholder="domicilio" className="form-control" onChange={handleInputChange} name="domicilio"></input>
                    <input type="int" placeholder="ciudad" className="form-control" onChange={handleInputChange} name="ciudad"></input>
                    <input type="int" placeholder="provincia" className="form-control" onChange={handleInputChange} name="provincia"></input>
                    <input type="int" placeholder="telefonoFijo" className="form-control" onChange={handleInputChange} name="telefonoFijo"></input>
                    <input type="int" placeholder="telefonoMovil" className="form-control" onChange={handleInputChange} name="telefonoMovil"></input>
                    <input type="int" placeholder="correoElectronico" className="form-control" onChange={handleInputChange} name="correoElectronico"></input>
                    <input type="int" placeholder="fechaDeNacimiento" className="form-control" onChange={handleInputChange} name="fechaDeNacimiento"></input>
                    <input type="int" placeholder="sexo" className="form-control" onChange={handleInputChange} name="sexo"></input>
                    <input type="int" placeholder="nivelDiscapacidadVisual" className="form-control" onChange={handleInputChange} name="nivelDiscapacidadVisual"></input>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </ModalBody>
        </Modal>
    );
}