import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import CrearClienteModal from './crearClienteModal'
import { getClientePorDNI } from './Api'

import "react-datepicker/dist/react-datepicker.css";

export default function DatosDelCliente({ titulo, clienteId }) {

    const [dniABuscar, setDniABuscar] = useState('')
    const [estadoModalCliente, setEstadoModalCliente] = useState(false)
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
        nivelDiscapacidadVisual: ""
    })

    const abrirModalCliente = () => {
        setEstadoModalCliente(true)

    }

    const cerrarModalCliente = () => {
        setEstadoModalCliente(false)
    }

    const cambiarDniABuscar = (event) => {
        if (!Number(event.target.value) && event.target.value !== "") {
            return
        }
        setDniABuscar(event.target.value)
    }

    const buscarClientePorDni = () => {
        getClientePorDNI(dniABuscar).then(clienteEncontrado => {
            !!clienteEncontrado[0] ? setearCliente(clienteEncontrado[0]) : setCliente(cliente)

        }
        )
    }

    const setearCliente = (cliente) => {
        setCliente(cliente)
        clienteId(cliente.id)
    }

    return (
        <div>
            <Col>
                {titulo}
                <Button onClick={abrirModalCliente} > + </Button>
                <CrearClienteModal abierto={estadoModalCliente} cerrarModal={cerrarModalCliente} actualizarCliente={setCliente} clienteId={clienteId} />
                <Row>
                    <Col><input class="form-control" value={dniABuscar} onChange={cambiarDniABuscar} /></Col>
                    <Col><Button onClick={buscarClientePorDni} > Buscar por DNI</Button></Col>
                </Row>
                <Row>
                    <label>nombre: {cliente.nombre}</label>
                </Row>
                <Row>
                    <label>apellido: {cliente.apellido}</label>
                </Row>
                <Row>
                    <label>dni: {cliente.dni}</label>
                </Row>
                <Row>
                    <label>cuilORcuit: {cliente.cuilORcuit}</label>
                </Row>
                <Row>
                    <label>domicilio: {cliente.domicilio}</label>
                </Row>
                <Row>
                    <label>ciudad: {cliente.ciudad}</label>
                </Row>
                <Row>
                    <label>provincia: {cliente.provincia}</label>
                </Row>
                <Row>
                    <label>telefonoFijo: {cliente.telefonoFijo}</label>
                </Row>
                <Row>
                    <label>telefonoMovil: {cliente.telefonoMovil}</label>
                </Row>
                <Row>
                    <label>correoElectronico: {cliente.correoElectronico}</label>
                </Row>
                <Row>
                    <label>fechaDeNacimiento: {cliente.fechaDeNacimiento}</label>
                </Row>
                <Row>
                    <label>sexo: {cliente.sexo}</label>
                </Row>
                <Row>
                    <label>nivelDiscapacidadVisual: {cliente.nivelDiscapacidadVisual}</label>
                </Row>
            </Col>
        </div>
    );
}