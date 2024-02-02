import { Card, Button } from "react-bootstrap";

const CardColor = () => {
    return (
        <Card className="card text-center">
        <Card.Body>
          <Card.Title>Nombre del color</Card.Title>
          <Button variant="danger">Eliminar</Button>
        </Card.Body>
      </Card>
    );
};

export default CardColor;