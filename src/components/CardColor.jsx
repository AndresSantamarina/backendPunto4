import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";


const CardColor = ({ arrayColores, borrarColor }) => {
  const [selectorDesactivado, setSelectorDesactivado] = useState(false);

  return (
    <>
      {arrayColores.map((color, posicionColor) => (
        <Card className="card text-center m-4" key={posicionColor}>
          <Card.Body>
            <Card.Title>
              {color}
            </Card.Title>
            <div className="d-flex justify-content-center my-2">
            <Form.Control type="color" defaultValue={color} disabled={selectorDesactivado} />
            </div>
          <Button className="mx-1">
            Editar
          </Button>
            <Button variant="danger" onClick={() => borrarColor(color)}>
              Eliminar
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CardColor;
