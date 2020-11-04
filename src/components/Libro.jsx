import React, {useState, Fragment, useEffect} from "react";
import {useParams} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import {getHojaDeRutaPorTituloDelLibro} from "./Api";

import NavBar from "./NavBar";
import HojaDeRutaModal from "./HojaDeRutaModal";

export default function Libro() {
    const {titulo} = useParams()

    const [hojaDeRuta, setHojaDeRuta] = useState();

    useEffect(() => {
        getHojaDeRutaPorTituloDelLibro(titulo).then((hoja) => {
            setHojaDeRuta(hoja);
        });
    }, [titulo]);


    return (
        <Fragment>
            <NavBar/>
            <div>
                {
                    !!hojaDeRuta ?
                        <HojaDeRutaModal hoja = {hojaDeRuta} abierto={ true}/>:
                        "buscando"
                }
            </div>
        </Fragment>
    )
}