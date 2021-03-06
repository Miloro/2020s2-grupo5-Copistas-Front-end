import React, {useEffect, useState} from "react";
import {Row, Table} from "react-bootstrap";
import "../css/hojaDeRuta.css"
import NuevaIteracion from "./FormularioNuevaIteracion"
import UsuarioContext from './UsuarioContext';

export default function HojaDeRutaModal({hoja}) {
    const [hojaDeRuta, setHojaDeRuta] = useState();

    useEffect(() => {
            setHojaDeRuta(hoja);
    }, [hoja]);

    function mostrarIteraciones() {
        return (<div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Nombre de persona Encargada</th>
                        <th>Fecha en la que se va a hacer cargo</th>
                        <th>Tarea asignada</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hojaDeRuta.historialDeEstado.map((iteracion) => {
                        return (
                            <tr>
                                <td>{iteracion.personaEncargada}</td>
                                <td>{iteracion.fechaAsignacion}</td>
                                <td>{iteracion.tareaAsignada}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }

    function mostrarData() {
        return (
            <UsuarioContext.Consumer>{
                context =>  {
                    return(
                    <div id="hojaderuta" className={"container p-3"}>
                        <Row>
                            <h1 className={"m-3"}>
                                {"Hoja de ruta de " + hojaDeRuta.libro.titulo}
                            </h1>
                        </Row>
                        {mostrarIteraciones()}
                        {console.log(hoja.libro.retirado)}
                        {!!context.usuario.rol && context.usuario.esAdministrador()&& !hoja.libro.retirado ?
                            <NuevaIteracion idHojaDeRuta={hojaDeRuta.id}/>:
                            <h2>Este libro ya fue retirado</h2>
                        }
                        
                    </div>
                        
                    )
                }
            }
            </UsuarioContext.Consumer>
        );
    }

    return (
        !!hojaDeRuta ? <div>{mostrarData()}</div> : "buscando..."
    );
}


