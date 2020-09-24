import React, {Fragment, useState} from "react";

import Button from "react-bootstrap/Button";
import CrearLibroModal from "./crearLibroModal";

import "react-datepicker/dist/react-datepicker.css";
import { getLibros} from "./Api";

export default function DatosDelLibro({ libroId }) {
  const [estadoModalLibro, setEstadoModalLibro] = useState(false);
    const [tituloABuscar, setTituloABuscar] = useState("");
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

    const cambiarTituloABuscar = (event) => {
        setTituloABuscar(event.target.value);
    };

    const buscarLibroPorTitulo = () => {
        getLibros(tituloABuscar).then((libros) => {
            !!libros[0]
                ? setearLibro(libros[0])
                : setLibro(libro);
        });
    };

    const setearLibro = (libro) => {
        setLibro(libro);
        libroId(libro.id);
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
        <div className="tituloConBoton">
            <input
                className="flex"
                placeholder="buscar por DNI"
                value={tituloABuscar}
                onChange={cambiarTituloABuscar}
            />
            <Button onClick={buscarLibroPorTitulo}> Buscar</Button>
        </div>
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
