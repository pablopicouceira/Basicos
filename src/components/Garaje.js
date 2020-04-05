import React from "react";
import "./garaje.css";
import Coche from "./Coche";

export const Garaje = ({ garaje, setGaraje }) => (
  <div className="garaje">
    <h2>Tu garaje</h2>
    {garaje.length === 0 ? (
      <p>No hay coches en el garaje</p>
    ) : (
      garaje.map((coche) => (
        <Coche
          key={coche.id}
          coche={coche}
          garaje={garaje}
          setGaraje={setGaraje}
        />
      ))
    )}
  </div>
);
