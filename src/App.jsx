import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioColores from "./components/FormularioColores";

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <h1 className="text-center">Paleta de colores</h1>
        <FormularioColores/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
