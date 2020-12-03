import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {crearLibro} from './Api'
import Button from 'react-bootstrap/Button';
import { Form,  Col, Modal} from "react-bootstrap";

//export default function CrearLibroModal(props) {
export default function CrearLibroModal({show, cerrarLibroModal, actualizarLibro, libroId}) {
    const [libro, setLibro] = useState({
        "titulo": "",
        "nombreAutor": "",
        "apellidoAutor": " ",
        "editorial": "",
        "edicion": "",
        "idioma": "ESPAÑOL",
        "categoria": ""
    })


    const handleInputChange = (event) => {
        setLibro({
            ...libro,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        crearLibro(libro).then(libroCreado => {
            actualizarLibro(libroCreado)
            libroId(libroCreado.id)
        });
        cerrarLibroModal();
    }

    return (
        <Modal show={show} onHide={cerrarLibroModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Crear Libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate>
                <Form.Row xs={1} md={4}>
                        <Col>
                            <label>Titulo</label>
                            <input type="text" placeholder="Titulo" className="form-control" onChange={handleInputChange}
                             name="titulo"/>
                        </Col>
                        <Col>
                            <label>Nombre del autor</label>
                            <input type="text" placeholder="Nombre del autor" className="form-control"
                            onChange={handleInputChange} name="nombreAutor"/>
                        </Col>
                        <Col>
                            <label>Apellido del autor</label>
                            <input type="text" placeholder="Apellido del autor" className="form-control"
                           onChange={handleInputChange} name="apellidoAutor"/>
                        </Col>
                 </Form.Row>
                <Form.Row xs={1} md={4}>
                             <Col>                             
                                <label>Editorial</label>
                                 <input type="text" placeholder="Editorial" className="form-control" onChange={handleInputChange}
                                 name="editorial"/>
                            </Col>
                </Form.Row> 
                 <Form.Row>
                             <label>Edicion</label>
                             <input type="text" placeholder="Edicion" className="form-control" onChange={handleInputChange}
                           name="edicion"/>
                </Form.Row>
                <Form.Row>
                             <Col>
                                <label>Idioma</label>
                                <Form.Control size="sm" name="idioma" as="select" value={libro.idioma} onChange={handleInputChange} >
                                    <option value="ESPAÑOL">Español</option>
                                    <option value="INGLES">Ingles</option>
                                    <option value="ITALIANO">Italiano</option>
                                    <option value="ALEMAN">Aleman</option>
                                    <option value="FRANCES">Frances</option>
                                    <option value="JAPONES">Japones</option>
                                    <option value="CHINO">Chino</option>
                                    <option value="HOLANDES">Holandes</option>
                                </Form.Control>
                            </Col>
                             <Col>
                                <label>Categoria</label>
                                <input type="text" placeholder="Categoria" className="form-control" onChange={handleInputChange}
                                name="categoria"/>
                             </Col>
                </Form.Row>
                
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={cerrarLibroModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={enviarDatos}>
                    Guardar Libro
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
