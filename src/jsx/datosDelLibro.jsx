import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import CrearLibroModal from "./crearLibroModal";

import "react-datepicker/dist/react-datepicker.css";

export default function DatosDelLibro({ libroId }) {
  const [estadoModalLibro, setEstadoModalLibro] = useState(false);
  const [libro, setLibro] = useState({
    titulo: "",
    nombreAutor: "",
    apellidoAutor: " ",
    editorial: "",
    edicion: "",
    idioma: "",
    categoria: "",
  });

  const abrirModalLibro = () => {
    setEstadoModalLibro(true);
  };

  const cerrarModalLibro = () => {
    setEstadoModalLibro(false);
  };

  return (
    <div>
      Libro
      <Button onClick={abrirModalLibro}> + </Button>
      <CrearLibroModal
        show={estadoModalLibro}
        cerrarLibroModal={cerrarModalLibro}
        actualizarLibro={setLibro}
        libroId={libroId}
      />
      <div>
        <label>Título: {libro.titulo}</label>
      </div>
      <div>
        <label>Nombre del autor: {libro.nombreAutor}</label>
      </div>
      <div>
        <label>Apellido del autor: {libro.apellidoAutor}</label>
      </div>
      <div>
        <label>Editorial: {libro.editorial}</label>
      </div>
      <div>
        <label>Edición: {libro.edicion}</label>
      </div>
      <div>
        <label>Idioma: {libro.idioma}</label>
      </div>
      <div>
        <label>Categoría: {libro.categoria}</label>
      </div>
    </div>
  );
}
