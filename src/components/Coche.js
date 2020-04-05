// imr
import React from "react";

// sfc escribe una expresión de función

const Coche = ({ coche, garaje, setGaraje, coches }) => {
  const { id, marca, precio } = coche;

  const seleccionarCoche = (id) => {
    const coche = coches.filter((coche) => coche.id === id)[0];
    setGaraje([...garaje, coche]);
  };

  const eliminarCoche = (id) => {
    const coches = garaje.filter((coche) => coche.id !== id);
    setGaraje(coches);
  };

  return (
    <div>
      <h3>{marca}</h3>
      <p>{precio} €</p>

      {coches ? (
        <button type="button" onClick={() => seleccionarCoche(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarCoche(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Coche;

/* También se puede escribir eliminando el return y las llaves:

const Coche = () => <h1>Desde coche</h1>;

export default Coche;

*/
