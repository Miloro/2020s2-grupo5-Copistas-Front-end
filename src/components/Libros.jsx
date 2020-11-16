import { set } from "js-cookie";
import React, { Fragment, useState, useEffect } from "react";
import {Table,Container, Button, Modal} from 'react-bootstrap'
import {getAllLibros, editarLibro} from './Api'

import NavBar from "./NavBar";


export default function Libros () {

    const [libros, setLibros] = useState()

    useEffect(() => {
        getAllLibros().then(brs => {
            setLibros(brs)
        })
    },[]);

    function listarLibros(){
        return  (!!libros ? libros.map((libro) => {
            return  <tr>
                        <td>{libro.titulo}</td>
                        <td>{libro.idioma}</td>
                        <td>{libro.retirado? "si" : "no"}</td>
                        <td>{libro.pagado? "si" : "no"}</td>
                        <td>
                            <InfoLibroModal  libro={libro}/>
                        </td>

                      </tr>
        }): "buscando")

    }
    
    return (
      <Fragment>
        <NavBar />
        
        <Container id="contenedor" >
            
        <h1>Lista De Libros</h1>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>idioma</th>
                    <th>Retirado</th>
                    <th>Pagado</th>
                    <th>Mas Info</th>
                </tr>
            </thead>
            <tbody>
        {listarLibros()}
            </tbody>
        </Table>
        </Container>
        </Fragment>
        
    );
}

function InfoLibroModal({libro,}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleRetirarLibro(){

        editarLibro(libro, "retirado", true).then(libro => {
            window.location.reload();
            handleClose()
        }).catch(e=>(console.log(e)))
    };

    function handlePagarLibro(){

        editarLibro(libro, "pagado", true).then(libro => {
            window.location.reload();
            handleClose()
        }).catch(e=>(console.log(e)))
    };

  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          INFO
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{libro.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label className="font-weight-bold">Nombre de autor:&nbsp;</label>
                    {libro.nombreAutor}
                </div>
                <div>
                    <label className="font-weight-bold">Apellido del autor:&nbsp;</label>
                    {libro.apellidoAutor}
                </div>
                <div>
                    <label className="font-weight-bold">Editorial:&nbsp;</label>
                    {libro.editorial}
                </div>
                <div>
                    <label className="font-weight-bold">Edicion:&nbsp;</label>
                    {libro.edicion}
                </div>
                <div>
                    <label className="font-weight-bold">Idioma:&nbsp;</label>
                    {libro.idioma}
                </div>
                <div>
                    <label className="font-weight-bold">Categoria:&nbsp;</label>
                    {libro.categoria}
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={handleRetirarLibro}>
              Retirar
            </Button>
            <Button variant="success" onClick={handlePagarLibro}>
              Pagar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }