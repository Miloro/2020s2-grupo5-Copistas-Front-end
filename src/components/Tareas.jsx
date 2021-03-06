import React, { Fragment } from "react";
import UsuarioContext from './UsuarioContext';
import {Table,Container, Button} from 'react-bootstrap'
import {marcarTareaComoTerminada} from './Api'


import NavBar from "./NavBar";

export default function Tareas () {

    return (
        <UsuarioContext.Consumer>{
            context =>  {
                return(
                    <Fragment>
                        <NavBar />
                        
                        <Container className="p-3" id="contenedor">
                            
                            {!!context.usuario.rol ?
                                <CargarTabla context={context}/>:
                                <h1>"cargando..."</h1>}
                            
                        </Container>
                    </Fragment>
                    
                )
            }
        }
    </UsuarioContext.Consumer>

    );
}

function RenderizarTareas({tareas}){

    function terminarTarea(id){
        marcarTareaComoTerminada(id).then((res)=>{
            //refactor
            window.location.reload();
        })
    }

    return(
        tareas.map(tarea => {
        return(
            <tr>
                <td>{tarea.libro_titulo}</td>
                <td>{tarea.iteracion_tareaAsignada}</td>
                <td>{tarea.iteracion_fechaAsignacion}</td>
                <td>
                    <Button onClick={()=> terminarTarea(tarea.iteracion_id)}>Terminado</Button>
                </td>

            </tr>)
        })
    )
}

function CargarTabla({context}){
    return(
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
</Table>)
}