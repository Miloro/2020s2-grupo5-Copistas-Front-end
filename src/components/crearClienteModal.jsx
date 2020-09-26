import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {crearCliente} from "./Api";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {registerLocale} from "react-datepicker";
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
        dni: "",
        cuilORcuit: "",
        domicilio: "",
        ciudad: "",
        provincia: "",
        telefonoFijo: "",
        telefonoMovil: "",
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

    const handleInputNumberChange = (event) => {
        if (!Number(event.target.value) && event.target.value !== "") {
            return;
        }
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
            ...cliente,
            fechaDeNacimiento: date,
        });
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
                        value={cliente.nombre}
                        onChange={handleInputChange}
                    />
                    <InputForm
                        label="Apellido"
                        name="apellido"
                        value={cliente.apellido}
                        onChange={handleInputChange}
                    />
                    <InputForm
                        label="DNI"
                        name="dni"
                        value={cliente.dni}
                        onChange={handleInputNumberChange}
                    />
                    <InputForm
                        label="CUIL o CUIT"
                        name="cuilORcuit"
                        value={cliente.cuilORcuit}
                        onChange={handleInputNumberChange}
                    />
                    <InputForm
                        label="Domicilio"
                        name="domicilio"
                        value={cliente.domicilio}
                        onChange={handleInputChange}
                    />
                    <InputForm
                        label="Ciudad"
                        name="ciudad"
                        value={cliente.ciudad}
                        onChange={handleInputChange}
                    />
                    <InputForm
                        label="Provincia"
                        name="provincia"
                        value={cliente.provincia}
                        onChange={handleInputChange}
                    />
                    <InputForm
                        label="Telefono fijo"
                        name="telefonoFijo"
                        value={cliente.telefonoFijo}
                        onChange={handleInputNumberChange}
                    />
                    <InputForm
                        label="Telefono movil"
                        name="telefonoMovil"
                        value={cliente.telefonoMovil}
                        onChange={handleInputNumberChange}
                    />
                    <InputForm
                        label="Correo electronico"
                        name="correoElectronico"
                        value={cliente.correoElectronico}
                        onChange={handleInputChange}
                    />
                    <div>
                        <label>Fecha de nacimiento </label> <br/>
                        <DatePicker
                            selected={cliente.fechaDeNacimiento}
                            onChange={handleChange}
                            locale="es"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div onChange={cambiarOpcionSexo}>
                        <label>Sexo</label> <br/>
                        <input type="radio" value="HOMBRE" name="gender"/> Hombre
                        <input type="radio" value="MUJER" name="gender"/> Mujer
                    </div>
                    <div>
                        <InputForm
                            label="Nivel discapacidad visual"
                            name="nivelDiscapacidadVisual"
                            value={cliente.nivelDiscapacidadVisual}
                            onChange={handleInputChange}
                        />
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

function InputForm({label, ...props}) {
    //name onchange
    return (
        <div>
            <label>{label}</label>
            <input {...props} placeholder={label} className="form-control"></input>
        </div>
    );
}
