import React, { Fragment, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Coche from "./components/Coche";
import { Garaje } from "./components/Garaje";

function App() {
  const edad = 41;

  //Obtener la fecha
  const añoActual = new Date().getFullYear();

  // Crear listado de coches (no sería necesario un estado)

  const [coches, setCoches] = useState([
    { id: 1, marca: "Masserati", precio: 80000 },
    { id: 2, marca: "Ferrari", precio: 200000 },
    { id: 3, marca: "BMW", precio: 55000 },
    { id: 4, marca: "Mercedes", precio: 65000 },
  ]);

  // States para un garaje

  const [garaje, setGaraje] = useState([]);

  return (
    <Fragment>
      <Header
        edad={edad}
        titulo="Aplicación de compra"
        hijos="Sofía y Darío"
        poblacion="Santiago"
      />

      <h1>Lista de coches</h1>
      {coches.map((coche) => (
        <Coche
          key={coche.id}
          coche={coche}
          garaje={garaje}
          setGaraje={setGaraje}
          coches={coches}
        />
      ))}

      <Garaje garaje={garaje} setGaraje={setGaraje} />

      <Footer año={añoActual} />
    </Fragment>
  );
}

export default App;
