import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import { agregarIteracionParaHojaDeRuta } from "./Api";

export default function NuevaIteracion() {
  const [personaencargada, setPersonaEncargada] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [estadoDeIteracion, setestadoDeIteracion] = useState("DIGITALIZACION");

  const cambiarImputPersonaEncargada = (event) => {
    setPersonaEncargada(event.target.value);
  };

  const cambiarDia = (date) => {
    setStartDate(date);
  };

  const handleChange = (event) => {
    setestadoDeIteracion(event.target.value);
  };

  const enviarDatos = () => {
    var instancia = {
      personaEncargada: personaencargada,
      fechaAsignacion: formatoDia(startDate),
      tareaAsignada: estadoDeIteracion,
    };
    agregarIteracionParaHojaDeRuta(24, instancia);
  };

  return (
    <div>
      <form action="">
        <input
          name="personaEncargada"
          value={personaencargada}
          onChange={cambiarImputPersonaEncargada}
          placeholder="Persona encargada"
          className="form-control"
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => cambiarDia(date)}
        />
        <label>
          <select value={estadoDeIteracion} onChange={handleChange}>
            <option value="DIGITALIZACION">DIGITALIZACION</option>
            <option value="CORRECION">CORRECION</option>
            <option value="VISADO">VISADO</option>
            <option value="ENVIO_DE_MAIL">ENVIO_DE_MAIL</option>
            <option value="IMPRESION_EN_BRAILE">IMPRESION_EN_BRAILE</option>
            <option value="ANILLADO">ANILLADO</option>
          </select>
        </label>
      </form>
      <Button variant="primary" onClick={enviarDatos}>
        Guardar cliente
      </Button>
    </div>
  );
}

function formatoDia(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}
