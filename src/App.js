import React, { Fragment } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const edad = 41;

  //Obtener la fecha
  const añoActual = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        edad={edad}
        titulo="Aplicación de compra"
        hijos="Sofía y Darío"
        poblacion="Santiago"
      />

      <Footer año={añoActual} />
    </Fragment>
  );
}

export default App;
