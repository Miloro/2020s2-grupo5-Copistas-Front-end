import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { getHojaDeRuta } from "./Api";

export default function HojaDeRutaModal({ libro, abierto, cerrarModal }) {
  const [hojaDeRuta, setHojaDeRuta] = useState(null);

  useEffect(() => {
    getHojaDeRuta(libro.id).then((unaHojaDeRuta) => {
      setHojaDeRuta(unaHojaDeRuta);
    });
  });

  function mostrarIteraciones() {
    return hojaDeRuta.historialDeEstado.map((iteracion) => {
      return <div>{iteracion.tareaAsignada}</div>;
    });
  }

  function mostrarData() {
    return (
      <div>
        {hojaDeRuta.solicitante.nombre}
        {mostrarIteraciones()}
      </div>
    );
  }

  return (
    <Modal show={abierto}>
      <ModalBody>
        Historial de los estados del libro :{" "}
        {!!hojaDeRuta ? <div>{mostrarData()}</div> : "buscando..."}
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={cerrarModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
