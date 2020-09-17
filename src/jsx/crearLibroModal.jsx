import React, { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { crearLibro } from './Api'

//export default function CrearLibroModal(props) {
    export default function CrearLibroModal({ show, cerrarLibroModal }) {
    const [libro, setLibro] = useState({
        "id": 0,
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
        <Modal show={show}>
            <ModalBody>
                <h1>Crear Libro</h1>
                <form className="row" onSubmit={enviarDatos}>
                    <input type="text" placeholder="id" className="form-control" onChange={handleInputChange} name="id"></input>
                    <input type="text" placeholder="titulo" className="form-control" onChange={handleInputChange} name="titulo"></input>
                    <input type="text" placeholder="nombreAutor" className="form-control" onChange={handleInputChange} name="nombreAutor"></input>
                    <input type="text" placeholder="apellidoAutor" className="form-control" onChange={handleInputChange} name="apellidoAutor"></input>
                    <input type="text" placeholder="editorial" className="form-control" onChange={handleInputChange} name="editorial"></input>
                    <input type="text" placeholder="edicion" className="form-control" onChange={handleInputChange} name="edicion"></input>
                    <input type="text" placeholder="idioma" className="form-control" onChange={handleInputChange} name="idioma"></input>
                    <input type="text" placeholder="categoria" className="form-control" onChange={handleInputChange} name="categoria"></input>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </ModalBody>
        </Modal>
    );
}