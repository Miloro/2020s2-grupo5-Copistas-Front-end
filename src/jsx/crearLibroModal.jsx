import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { crearLibro } from './Api'
import Button from 'react-bootstrap/Button';

//export default function CrearLibroModal(props) {
export default function CrearLibroModal({ show, cerrarLibroModal }) {
    const [libro, setLibro] = useState({
        "titulo": "",
        "nombreAutor": "",
        "apellidoAutor": " ",
        "editorial": "",
        "edicion": "",
        "idioma": "",
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
        crearLibro(libro);
        cerrarLibroModal();
    }

    return (
        <Modal show={show} onHide={cerrarLibroModal}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row">
                    <label>Titulo</label>
                    <input type="text" placeholder="Titulo" className="form-control" onChange={handleInputChange} name="titulo"></input>
                    <label>Nombre del autor</label>
                    <input type="text" placeholder="Nombre del autor" className="form-control" onChange={handleInputChange} name="nombreAutor"></input>
                    <label>Apellido del autor</label>
                    <input type="text" placeholder="Apellido del autor" className="form-control" onChange={handleInputChange} name="apellidoAutor"></input>
                    <label>Editorial</label>
                    <input type="text" placeholder="Editorial" className="form-control" onChange={handleInputChange} name="editorial"></input>
                    <label>Edicion</label>
                    <input type="text" placeholder="Edicion" className="form-control" onChange={handleInputChange} name="edicion"></input>
                    <label>Idioma</label>
                    <input type="text" placeholder="Idioma" className="form-control" onChange={handleInputChange} name="idioma"></input>
                    <label>Categoria</label>
                    <input type="text" placeholder="Categoria" className="form-control" onChange={handleInputChange} name="categoria"></input>
                </form>
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
