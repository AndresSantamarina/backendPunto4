import { Card, Button } from "react-bootstrap";

const CardColor = ({ arrayColores, borrarColor }) => {
  return (
    <>
      {arrayColores.map((color, posicionColor) => (
        <Card className="card text-center m-4" key={posicionColor}>
          <Card.Body>
            <Card.Title>{color}</Card.Title>
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
