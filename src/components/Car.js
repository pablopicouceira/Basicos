// imr
import React from "react";

// sfc escribe una expresión de función

const Car = ({ car }) => {
  const { id, marca, precio } = car;

  const seleccionarCoche = (id) => {
    console.log("comprando...", id);
  };

  return (
    <div>
      <h3>{marca}</h3>
      <p>{precio} €</p>
      <button type="button" onClick={() => seleccionarCoche(id)}>
        Comprar
      </button>
    </div>
  );
};

export default Car;

/* También se puede escribir eliminando el return y las llaves:

const Car = () => <h1>Desde car</h1>;

export default Car;

*/
