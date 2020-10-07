import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HojaDeRutaModal from "./HojaDeRutaModal";

export default function Libro({ libro }) {
  const [abierto, setAbierto] = useState(false);

  function mostrarEstadoLibro() {
    setAbierto(true);
  }

  function cerrarModal() {
    setAbierto(false);
  }

  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Header>
        {" "}
        {libro.titulo} <br />
      </Card.Header>
      <Card.Body>
        <Card.Text>
          nombre autor: {libro.nombreAutor} <br />
          apellido autor: {libro.apellidoAutor} <br />
          editorial: {libro.editorial} <br />
          edicion: {libro.edicion} <br />
          idioma: {libro.idioma} <br />
          categoria: {libro.categoria} <br />
        </Card.Text>

        <Button onClick={mostrarEstadoLibro}> ver estado </Button>
        <HojaDeRutaModal
          libro={libro}
          abierto={abierto}
          cerrarModal={cerrarModal}
        />
      </Card.Body>
    </Card>
  );
}
