import { Card, Button, Form } from "react-bootstrap";
import { borrarColorAPI, leerColoresAPI } from "../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardColor = ({ color, setColores }) => {
  const borrarColor = () => {
    Swal.fire({
      title: "Estás seguro de eliminar el color?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Salir",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarColorAPI(color._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Color eliminado!",
            text: `El color "${color.nombreColor}" fue eliminado correctamente`,
            icon: "success",
          });
          const listaColores = await leerColoresAPI();
          setColores(listaColores);
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `El color "${color.nombreColor}" no fue eliminado, intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <Card className="card text-center m-4">
        <Card.Body>
          <Card.Title>
            <div>{color.nombreColor}</div>
          </Card.Title>
          <div className="d-flex justify-content-center my-2">
            <Form.Control
              type="color"
              defaultValue={color.codigoHexadecimal}
              disabled
            />
          </div>
          <Link
            className="me-lg-2 btn btn-warning m-1"
            to={"/administrador/editar/" + color._id}
          >
            Editar
          </Link>
          <Button variant="danger" onClick={borrarColor}>
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardColor;
