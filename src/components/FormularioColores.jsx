import { Button, Form } from "react-bootstrap";
import CardColor from "./CardColor";
import { useEffect, useState } from "react";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const coloresLocalStorage =
    JSON.parse(localStorage.getItem("coloresKey")) || [];
  const [colores, setColores] = useState(coloresLocalStorage);

  useEffect(() => {
    localStorage.setItem("coloresKey", JSON.stringify(colores));
  }, [colores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
    setColor("");
  };

  const borrarColor = (nombreColor) => {
    const coloresFiltrados = colores.filter((color) => color !== nombreColor);
    setColores(coloresFiltrados);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese un color"
            minLength={3}
            maxLength={15}
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button className="ms-2" type="submit">
            Guardar
          </Button>
        </Form.Group>
      </Form>
      <article className="container">
        <div className="d-flex align-content-center flex-wrap">
          <CardColor arrayColores={colores} borrarColor={borrarColor}/>
        </div>
      </article>
    </section>
  );
};

export default FormularioColores;
