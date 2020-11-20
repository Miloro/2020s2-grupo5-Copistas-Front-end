import React, { Fragment, useEffect } from "react";
import UsuarioContext from './UsuarioContext';
import {Table,Container, Button, Modal} from 'react-bootstrap'

import NavBar from "./NavBar";

export default function Tareas () {

    return (
        <UsuarioContext.Consumer>{
            context =>  {
                return(
                    <Fragment>
                        <NavBar />

                        <Container className="p-3" id="contenedor">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Libro</th>
                                        <th>Tarea</th>
                                        <th>Fecha Asignada</th>
                                        <th>Terminada</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {!!context.usuario.rol?
                                        <RenderizarTareas tareas={context.usuario.tareasPendientes}/>:
                                    null}
                                </tbody>
                            </Table>
                        </Container>
                    </Fragment>
                    
                )
            }
        }
    </UsuarioContext.Consumer>

    );
}

function RenderizarTareas({tareas}){

    return(
        tareas.map(tarea => {
            
            return(
            <tr>
                <td>{tarea.libro_titulo}</td>
                <td>{tarea.iteracion_tareaAsignada}</td>
                <td>{tarea.iteracion_fechaAsignacion}</td>
                <td>
                    <Button>Terminado</Button>
                </td>

            </tr>)
        })
    )
}