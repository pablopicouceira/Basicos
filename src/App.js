import React, { Fragment, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Car from "./components/Car";

function App() {
  const edad = 41;

  //Obtener la fecha
  const añoActual = new Date().getFullYear();

  // Crear listado de productos

  const [cars, setCars] = useState([
    { id: 1, marca: "Masserati", precio: 80000 },
    { id: 2, marca: "Ferrari", precio: 200000 },
    { id: 3, marca: "BMW", precio: 55000 },
    { id: 4, marca: "Mercedes", precio: 65000 },
  ]);

  return (
    <Fragment>
      <Header
        edad={edad}
        titulo="Aplicación de compra"
        hijos="Sofía y Darío"
        poblacion="Santiago"
      />

      <h1>Lista de coches</h1>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}

      <Footer año={añoActual} />
    </Fragment>
  );
}

export default App;
