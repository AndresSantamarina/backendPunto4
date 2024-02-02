import { Button, Form } from "react-bootstrap";
import CardColor from "./CardColor";

const FormularioColores = () => {
  return (
    <section>
      <Form>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese un color"
            minLength={3}
            maxLength={15}
          />
          <Button className="ms-2" type="submit">
            Guardar
          </Button>
        </Form.Group>
      </Form>
      <article className="d-flex justify-content-between">
        <CardColor/>
      </article>
    </section>
  );
};

export default FormularioColores;
