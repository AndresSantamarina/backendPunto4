import { useEffect, useState } from "react";
import { leerColoresAPI } from "../helpers/queries";
import { Link } from "react-router-dom";
import { Row, Container} from "react-bootstrap";
import CardColor from "./CardColor";

const Inicio = () => {
  const [colores, setColores] = useState([]);
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerColoresAPI();
      setColores(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="mainPage">
      <div className="text-center">
        <h1 className="m-5 display-5">Paleta de colores</h1>
        <Link to="/administrador/crear" className="my-3 btn btn-success">
          Agregar color
        </Link>
      </div>
      <Container>
        <Row className="contenedorCards">
            {colores.map((color)=>(
                <CardColor key={color._id} color={color} setColores={setColores}/>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
