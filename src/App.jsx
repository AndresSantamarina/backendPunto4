import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <h1 className="text-center">Bienvenido</h1>
      </Container>
      <Footer />
    </>
  );
}

export default App;
