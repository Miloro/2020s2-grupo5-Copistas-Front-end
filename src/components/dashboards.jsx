import React, { useState } from "react";
import NavBar from "./NavBar";
import { Pie } from "react-chartjs-2";

export default function Dashboards() {
  const [genero, setGenero] = useState({
    labels: ["Mujeres", "Hombres"],
    datasets: [
      {
        data: [10, 5],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  });

  return (
    <div>
      <NavBar></NavBar>
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="w-25 p-3">
          <Pie data={genero} />
        </div>
        <div class="w-25 p-3">
          <Pie data={genero} />
        </div>
        <div class="w-25 p-3">
          <Pie data={genero} />
        </div>
        <div class="w-25 p-3">
          <Pie data={genero} />
        </div>
      </div>
    </div>
  );
}
