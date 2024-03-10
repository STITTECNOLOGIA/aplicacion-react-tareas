import React, { useState } from "react";
import "../stylesheet/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const traeNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(traeNueva);
  };

  return (
    <form className="traea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escibe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
}

export default TareaFormulario;
