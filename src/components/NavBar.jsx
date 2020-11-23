import React, {Fragment,useState} from "react";
import {Navbar, Nav, Form, FormControl, Button,Dropdown,DropdownButton, Badge} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import UsuarioContext from './UsuarioContext';
import { obtenerSession } from '../sesion';

import LogoImg from "./LogoImg";

export default function NavBar() {
    
    function nombreDeUsuario(){
        return obtenerSession().data.nombreUsuario;
    }


    let history = useHistory();
    const [tituloABuscar,setTituloABuscar] = useState("")

    function handleClick(event) {
        history.push(event.target.name);
    }

    function cambioTituloABuscar(event){
      setTituloABuscar(event.target.value)
    };

    function buscarLibro(){
        history.push("/libro/"+ tituloABuscar);
    }

    function salir(context){
        context.cerrarSesion()
        history.push("/");
    }

    
    return (
        <UsuarioContext.Consumer>
        {context =>  {
            return( 
            <Fragment>
                
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary m-3 " variant="dark">
                    <LogoImg/>
                    <Nav className="mr-auto"> 

                        {!!context.usuario.rol && context.usuario.esAdministrador()?
                            <Nav.Link className="text-light" onClick={handleClick} name="/hojaderuta">Crear Hoja De Ruta</Nav.Link>:
                        null}

                        {!!context.usuario.rol && context.usuario.esAdministrador()?
                            <Nav.Link className="text-light" onClick={handleClick} name="/colaborador">Crear Colaborador</Nav.Link>:
                        null}

                        <Nav.Link className="text-light" onClick={handleClick} name="/graficos">Estadisticas</Nav.Link>
                        <Nav.Link className="text-light" onClick={handleClick} name="/libros">Lista De Libros</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={buscarLibro}>
                        <FormControl onChange={cambioTituloABuscar} value={tituloABuscar} type="text" placeholder="Nombre De Libro a Buscar" className="mr-sm-2"/>
                        <Button onClick={buscarLibro} variant="outline-light">Buscar</Button>
                    </Form>
                    {!!context.usuario.rol && context.usuario.esColaborador()?
                        <Nav.Link className="text-light" onClick={handleClick} name="/tareas">Tareas<Badge variant="danger">{context.usuario.cantidadDeTareasPendientes()}</Badge>  </Nav.Link>:
                    null}

                    <DropdownButton className="ml-2" variant="success" id="dropdown-basic" title={nombreDeUsuario() } >
                        <Dropdown.Item onClick={()=>{salir(context)}}>Salir</Dropdown.Item>
                    </DropdownButton>
                </Navbar>
            </Fragment>
        )}
        }

        </UsuarioContext.Consumer>
    );
    
}

