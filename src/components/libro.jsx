import React, {useState, Fragment, useEffect} from "react";
import {useParams} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import {getLibros} from "./Api";

import NavBar from "./NavBar";
import HojaDeRutaModal from "./HojaDeRutaModal";

export default function Libro({libro}) {
    const {titulo} = useParams()

    const [libroEncontrado, setLibroEncontrado] = useState();

    useEffect(() => {
        getLibros(titulo).then((libros) => {
            setLibroEncontrado(libros[0]);
        });
    }, []);


    return (
        <Fragment>
            <NavBar/>
            <div>
                {
                    !!libroEncontrado ?
                        <HojaDeRutaModal libro = {libroEncontrado} abierto={ true}/>:
                        "buscando"
                }
            </div>
        </Fragment>
    )
}