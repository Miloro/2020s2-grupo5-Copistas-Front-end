import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HojaDeRutaModal from './HojaDeRutaModal';
export default function Libro({ libro }) {

    const [abierto, setAbierto] = useState(false);

    function mostrarEstadoLibro() {
        setAbierto(true)
    }

    function cerrarModal() {
        setAbierto(false)
    }

    return (
        <div key={libro.id}>
            libro  <br />
            titulo: {libro.titulo} <br />
            nombre autor: {libro.nombreAutor} <br />
            apellido autor: {libro.apellidoAutor} <br />
            editorial: {libro.editorial} <br />
            edicion: {libro.edicion} <br />
            idioma: {libro.idioma} <br />
            categoria: {libro.categoria} <br />
            <button onClick={mostrarEstadoLibro} > ver estado </button>
            <HojaDeRutaModal libro={libro} abierto={abierto} cerrarModal={cerrarModal} />
        </div>
    );
}
