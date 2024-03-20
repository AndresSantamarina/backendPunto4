import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  crearColorAPI,
  editarColorAPI,
  obtenerColorAPI,
} from "../helpers/queries";
import Swal from "sweetalert2";

const FormularioColores = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { id } = useParams();

  const navegacion = useNavigate();

  const cargarDatosColor = async () => {
    try {
      const respuesta = await obtenerColorAPI(id);
      if (respuesta.status === 200) {
        const colorEncontrado = await respuesta.json();
        setValue("nombreColor", colorEncontrado.nombreColor);
        setValue("codigoHexadecimal", colorEncontrado.codigoHexadecimal)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editar === true) {
      cargarDatosColor();
    }
  }, []);

  const colorValidado = async (color) => {
    if (editar === true) {
      const respuesta = await editarColorAPI(color, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Color modificado",
          text: `El color ${color.nombreColor} fue modificado correctamente`,
          icon: "success",
        });
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `El color ${color.nombreColor} no pudo ser modificado, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearColorAPI(color);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Color creado",
          text: `El color ${color.nombreColor} fue creado correctamente`,
          icon: "success",
        });
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `El color ${color.nombreColor} no pudo ser creado, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="mainPage">
      <h3 className="display-6 text-center mt-3">{titulo}</h3>

      <Form
        onSubmit={handleSubmit(colorValidado)}
        className="mt-5"
      >
        <div className="text-center my-2">
        <Form.Text className="text-danger">
            {errors.nombreColor?.message}
          </Form.Text>
        </div>
        <Form.Group className="mb-3 d-flex justify-content-center" controlId="formNombreColor">
          <Form.Control
          className="w-50"
            type="text"
            placeholder="Nombre del color"
            {...register("nombreColor", {
              required: "El nombre del color es obligatorio",
              minLength: {
                value: 3,
                message: "El color debe tener como mínimo 3 caracteres",
              },
              maxLength: {
                value: 15,
                message: "El color debe tener como máximo 50 caracteres",
              },
            })}
          />

          <Form.Control
            onChange={(e) => setColor(e.target.value)}
            type="color"
            title="Elegí un color"
            {...register("codigoHexadecimal", {
              required: "El código hexadecimal es obligatorio",
              minLength: {
                value: 7,
                message: "El código debe tener 7 caracteres",
              },
              maxLength: {
                value: 7,
                message: "El código debe tener 7 caracteres",
              },
            })}
          />
          <Button className="ms-2" type="submit" variant="success">
            Guardar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioColores;
