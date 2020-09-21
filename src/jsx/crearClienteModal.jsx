import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { crearCliente } from './Api'
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';

registerLocale('es', es)


export default function CrearClienteModal({ abierto, cerrarModal, actualizarCliente, clienteId }) {

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
        nivelDiscapacidadVisual: ""
    })

    const cambiarOpcionSexo = (event) => {

        setCliente({
            ...cliente,
            sexo: event.target.value
        })
    }

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
            clienteId(clienteCreado.id)
            console.log(clienteCreado)
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
                <form  >
                    <div >
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                    </div >
                    <div >
                        <label>Apellido</label>
                        <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                    </div>
                    <div>
                        <label>DNI</label>
                        <input type="int" placeholder="DNI" className="form-control" onChange={handleInputChange} name="dni"></input>
                    </div>
                    <div>
                        <label>CUIL o RCUIT</label>
                        <input type="int" placeholder="CUIL o RCUIT" className="form-control" onChange={handleInputChange} name="cuilORcuit"></input>
                    </div>
                    <div>
                        <label>Domicilio</label>
                        <input type="int" placeholder="Domicilio" className="form-control" onChange={handleInputChange} name="domicilio"></input>
                    </div>
                    <div>
                        <label>Ciudad</label>
                        <input type="int" placeholder="Ciudad" className="form-control" onChange={handleInputChange} name="ciudad"></input>
                    </div>
                    <div>
                        <label>Provincia</label>
                        <input type="int" placeholder="Provincia" className="form-control" onChange={handleInputChange} name="provincia"></input>
                    </div>
                    <div>
                        <label>Telefono fijo</label>
                        <input type="int" placeholder="Telefono fijo" className="form-control" onChange={handleInputChange} name="telefonoFijo"></input>
                    </div>
                    <div>
                        <label>Telefono movil</label>
                        <input type="int" placeholder="Telefono movil" className="form-control" onChange={handleInputChange} name="telefonoMovil"></input>
                    </div>
                    <div>
                        <label >Correo electronico</label>
                        <input type="int" placeholder="Correo electronico" className="form-control" onChange={handleInputChange} name="correoElectronico"></input>
                    </div>
                    <div>
                        <label >Fecha de nacimiento </label> <br />
                        <DatePicker
                            selected={cliente.fechaDeNacimiento}
                            onChange={handleChange}
                            locale="es"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div onChange={cambiarOpcionSexo}>
                        <label >Sexo</label> <br />
                        <input type="radio" value="HOMBRE" name="gender" /> Hombre
                        <input type="radio" value="MUJER" name="gender" /> Mujer
                    </div>
                    <div>
                        <label>Nivel discapacidad visual</label>
                        <input type="int" placeholder="Nivel discapacidad visual" className="form-control" onChange={handleInputChange} name="nivelDiscapacidadVisual"></input>
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