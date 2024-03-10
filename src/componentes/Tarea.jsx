import React from "react";
import "../stylesheet/Tarea.css";
import { IoCloseCircleOutline } from "react-icons/io5";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <IoCloseCircleOutline className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;
