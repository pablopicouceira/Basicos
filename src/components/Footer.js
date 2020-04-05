import React from "react";

// function expression (podemos eliminar las llaves y el "return")

export const Footer = ({ año }) => (
  <footer>
    <p>
      Todos los derechos reservados &copy; - <strong>Pablo Pico Uceira</strong>{" "}
      - {año}
    </p>
  </footer>
);
