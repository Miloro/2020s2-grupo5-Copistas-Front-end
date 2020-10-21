import React, { useState, useEffect , Fragment } from "react";
import NavBar from "./NavBar";
import { Pie } from "react-chartjs-2";
import { getDashboard } from "./Api";

export default function Dashboards() {
  const [dashBoards, setDashBoards] = useState();

  useEffect(() => {
    getDashboard().then((data) => {
      setDashBoards(data);
    });
  }, [dashBoards]);

  return (
    <div>
      <NavBar></NavBar>
      <div className="d-flex flex-row bd-highlight mb-3">
        {!!dashBoards ? <GraficosDeTorta data={dashBoards} /> : "cargando"}
      </div>
    </div>
  );
}

function GraficosDeTorta({ data }) {

  return (
    <Fragment>

      <div class="d-flex justify-content-around flex-wrap">
      <GraficoDeTorta
        titulo = "Genero"
        elementos={["Mujeres", "Hombres"]}
        cantidades={[data.dashboardSexoDTO.mujer, data.dashboardSexoDTO.hombre]}
      ></GraficoDeTorta>

      <GraficoDeTorta
        titulo = "Discapacidad visual"
        elementos={["Total", "Parcial"]}
        cantidades={[
          data.dashboardNivelCegueraDTO.total,
          data.dashboardNivelCegueraDTO.parcial,
        ]}

      ></GraficoDeTorta>

      <GraficoDeTorta
        titulo = "Libros Pagados"
        elementos={["Pagados", "Impagos"]}
        cantidades={[
          data.dashboardCantidadPagadosDTO.pagados,
          data.dashboardCantidadPagadosDTO.inpagos,
        ]}

      ></GraficoDeTorta>

      <GraficoDeTorta
        titulo = "Libros Retirados"
        elementos={["Retirado", "No Retirado"]}
        cantidades={[
          data.dashboardCantidadDeLibrosRetiradosDTO.retirados,
          data.dashboardCantidadDeLibrosRetiradosDTO.noRetirados,
        ]}

      ></GraficoDeTorta>

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

      ></GraficoDeTorta>
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
/*
  useEffect(() => { 
    var sum = cantidades.reduce(function(a, b){return a + b;}, 0);
    var i;
    var newList = []
    var numero
    for (i = 0; i < elementos.length; i++) {
      numero = Math.round((100/sum) * cantidades[i])
      newList.push(elementos[i] + '('+ numero +'%)')
    }
    setData({
      ...data, 
      labels : newList,
    })
  });
*/
  return (
    <div class="card border-secondary mb-3" style={tamanio}>
      <div class="card-header">{titulo}</div>
      <div class="card-body"><Pie data={data} /></div>
    </div>
  );
}
