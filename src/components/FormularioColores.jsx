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
      <h3 className="display-6 text-center mt-3">Seleccione un color</h3>
      <Form onSubmit={handleSubmit} className="d-flex justify-content-center mt-5">
        <Form.Group className="mb-3 d-flex" controlId="colorInput">
          <Form.Control
          type="text"
          placeholder="Nombre del color"/>
          <Form.Control
            onChange={(e) => setColor(e.target.value)}
            type="color"
            defaultValue="#563d7c"
            title="Choose your color"
          />
          <Button className="ms-2" type="submit" variant="success">
            Guardar
          </Button>
        </Form.Group>
      </Form>
      <article className="container">
        <div className="d-flex align-content-center flex-wrap contenedorCards">
          <CardColor arrayColores={colores} borrarColor={borrarColor} />
        </div>
      </article>
    </section>
  );
};

export default FormularioColores;
