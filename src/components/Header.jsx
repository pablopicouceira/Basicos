import React from "react";

export function Header({ edad, titulo, hijos, poblacion }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>Edad: {edad}</p>
      <p>Hijos: {hijos}</p>
      <p>Población: {poblacion}</p>
    </div>
  );
}
