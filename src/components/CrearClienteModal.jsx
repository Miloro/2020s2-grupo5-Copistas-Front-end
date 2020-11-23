import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {crearCliente} from "./Api";
import {Button, Form, InputGroup, Col, Modal} from "react-bootstrap";

export default function CrearClienteModal({
                                              abierto,
                                              cerrarModal,
                                              actualizarCliente,
                                              setClienteId,
                                              titulo,
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
        fechaDeNacimiento: "",
        sexo: "HOMBRE",
        nivelDiscapacidadVisual: "TOTAL",
    });

    const [validated, setValidated] = useState(false);

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

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            crearCliente(cliente).then((clienteCreado) => {
            actualizarCliente(clienteCreado);
            setClienteId(clienteCreado.id);
            });
            cerrarModal();}
        setValidated(true);

      };

    return (
        <Modal show={abierto} onHide={cerrarModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Crear {titulo}</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row xs={1} md={4}>
                        <Col>
                            <InputForm
                                label="Nombre"
                                name="nombre"
                                value={cliente.nombre}
                                onChange={handleInputChange}
                                required
                            />
                        </Col>
                        <Col >
                            <InputForm
                                label="Apellido"
                                name="apellido"
                                value={cliente.apellido}
                                onChange={handleInputChange}
                                required
                            />
                        </Col>
                        <Col >
                            <InputForm
                                type="number"
                                label="DNI"
                                name="dni"
                                value={cliente.dni}
                                onChange={handleInputNumberChange}
                                required
                            />
                        </Col>
                        <Col >
                            <InputForm
                                label="CUIL o CUIT"
                                name="cuilORcuit"
                                value={cliente.cuilORcuit}
                                onChange={handleInputNumberChange}
                            />
                        </Col>
                </Form.Row>
                <Form.Row xs={1} md={3}>
                        <Col>
                            <Form.Group>
                                <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control type="date" name="fechaDeNacimiento" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col >
                            <ImputRadioGeneroForm label="Sexo" cambiarOpcionSexo = {handleInputChange} />
                        </Col>
                        <Col >
                            <Form.Group>
                                <Form.Label>Nivel discapacidad visual</Form.Label>
                                <Form.Control size="sm" name="nivelDiscapacidadVisual" as="select" value={cliente.nivelDiscapacidadVisual} onChange={handleInputChange} >
                                    <option value="TOTAL">Total</option>
                                    <option value="PARCIAL">Parcial</option>
                                    <option value="NINGUNA">Ninguna</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                </Form.Row>
                <Form.Row xs={1} md={3}>
                        <Col>
                            <InputForm
                                label="Domicilio"
                                name="domicilio"
                                value={cliente.domicilio}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col >
                            <InputForm
                                label="Ciudad"
                                name="ciudad"
                                value={cliente.ciudad}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col >
                            <InputForm
                                label="Provincia"
                                name="provincia"
                                value={cliente.provincia}
                                onChange={handleInputChange}
                            />
                        </Col>
                </Form.Row>
                <Form.Row xs={1} md={3}>
                        <Col>
                            <InputForm
                                label="Teléfono fijo"
                                name="telefonoFijo"
                                value={cliente.telefonoFijo}
                                onChange={handleInputNumberChange}
                            />
                        </Col>
                        <Col >
                            <InputForm
                                label="Teléfono movil"
                                name="telefonoMovil"
                                value={cliente.telefonoMovil}
                                onChange={handleInputNumberChange}
                            />
                        </Col>
                        <Col >
                            <InputForm
                                label="Correo electrónico"
                                name="correoElectronico"
                                value={cliente.correoElectronico}
                                onChange={handleInputChange}
                            />
                        </Col>
                </Form.Row>
                <Button type="submit"  >Guardar cliente</Button>
            </Form>
        </Modal.Body>
        </Modal>
    );
}

function InputForm({label, mensajeControlInvalid = "este parametro es obligatorio.", ...props}){
    return(
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control
                {...props}
                type="text"
                placeholder={label}
                aria-describedby="inputGroupPrepend"
                />
                <Form.Control.Feedback type="invalid">
                    {mensajeControlInvalid}
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    )
}

function ImputRadioGeneroForm({label, cambiarOpcionSexo}){
    return(
    <Form.Group>
        <Col>
            <Form.Label>{label}</Form.Label>
        </Col>
        <Col onChange={cambiarOpcionSexo}  >
                <Form.Check
                    inline
                    type="radio"
                    label="Hombre"
                    name="sexo"
                    value="HOMBRE"

                />
                <Form.Check
                    inline
                    type="radio"
                    label="Mujer"
                    name="sexo"
                    value="MUJER"

                />
        </Col>
    </Form.Group>
    )

}
