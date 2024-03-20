import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import FormularioColores from "./FormularioColores";

const Rutas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Inicio />}></Route>
      <Route
        exact
        path="/crear"
        element={<FormularioColores editar={false} titulo="Nuevo color" />}
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={<FormularioColores editar={true} titulo="Editar color" />}
      ></Route>
    </Routes>
  );
};

export default Rutas;
