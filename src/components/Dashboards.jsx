import React, { useState, useEffect , Fragment } from "react";
import NavBar from "./NavBar";
import { Pie } from "react-chartjs-2";
import { getDashboard } from "./Api";

export default function Dashboards() {
  const [dashBoards, setDashBoards] = useState();

  useEffect(() => {
    getDashboard().then((data) => {
      setDashBoards(data);
    }).catch(e => alert(e));
  }, [dashBoards]);

  return (
    <div>
      <NavBar/>
      <h1 className = "m-3">ESTADISTICAS LIBRAILLE</h1>
      <div className="d-flex flex-row bd-highlight mb-3">
        {!!dashBoards ? <GraficosDeTorta data={dashBoards} /> : "cargando"}
      </div>
    </div>
  );
}

function GraficosDeTorta({ data }) {

  return (
    <Fragment>
      
      
      
      <div className="d-flex justify-content-around flex-wrap">
      <GraficoDeTorta
        titulo = "Genero"
        elementos={["Mujeres", "Hombres"]}
        cantidades={[data.dashboardSexoDTO.mujer, data.dashboardSexoDTO.hombre]}
      />

      <GraficoDeTorta
        titulo = "Discapacidad visual"
        elementos={["Total", "Parcial"]}
        cantidades={[
          data.dashboardNivelCegueraDTO.total,
          data.dashboardNivelCegueraDTO.parcial,
        ]}

      />

      <GraficoDeTorta
        titulo = "Libros Pagados"
        elementos={["Pagados", "Impagos"]}
        cantidades={[
          data.dashboardCantidadPagadosDTO.pagados,
          data.dashboardCantidadPagadosDTO.inpagos,
        ]}

      />

      <GraficoDeTorta
        titulo = "Libros Retirados"
        elementos={["Retirado", "No Retirado"]}
        cantidades={[
          data.dashboardCantidadDeLibrosRetiradosDTO.retirados,
          data.dashboardCantidadDeLibrosRetiradosDTO.noRetirados,
        ]}

      />

      <GraficoDeTorta
        tamanio = {{width: 1200}}
        titulo = "Libros por Idioma"
        elementos={["Español", "Ingles", "Italiano", "Aleman", "Frances", "Japones", "Chino", "Holandes"]}
        cantidades={[
          data.dashboardCantidadDeLibrosIdiomaDTO.espaniol,
          data.dashboardCantidadDeLibrosIdiomaDTO.ingles,
          data.dashboardCantidadDeLibrosIdiomaDTO.italiano,
          data.dashboardCantidadDeLibrosIdiomaDTO.aleman,
          data.dashboardCantidadDeLibrosIdiomaDTO.frances,
          data.dashboardCantidadDeLibrosIdiomaDTO.japones,
          data.dashboardCantidadDeLibrosIdiomaDTO.chino,
          data.dashboardCantidadDeLibrosIdiomaDTO.holandes,
        ]}

      />
      </div>

    </Fragment>
  );
}

function GraficoDeTorta({tamanio = {width: 600},  titulo, elementos, cantidades}) {

  const [data] = useState({
    labels: elementos,
    datasets: [
      {
        data: cantidades,
        backgroundColor: [
          "#4a80cc",
          "#c94b4b",
          "#43a548",
          "#d5db78",
          "#d47f1e",
          "#88def3",
          "#ad3e8c",
          "#4d1185",
          "#161616",
          "#442461",
        ],
      },
    ],
  });

  return (
    <div className="card border-secondary mb-3" style={tamanio}>
      <div className="card-header">{titulo}</div>
      <div className="card-body"><Pie data={data} /></div>
    </div>
  );
}
