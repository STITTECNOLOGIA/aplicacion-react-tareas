import "./App.css";
import logo from "./imagenes/React1.png";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="App-tareas">
      <div className="logo-contenedor">
        <img src={logo} alt="Logotipo de React" className="logo-img" />
      </div>
      <div className="lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
