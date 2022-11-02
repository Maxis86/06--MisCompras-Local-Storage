import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useEffect } from "react";

const Formulario = ({
  crearProducto,
  setProductoEditado,
  productoEditado,
  productos,
  guardarProductos,
}) => {
  // Crear State de Citas
  const [nuevoProducto, actualizarProducto] = useState({
    nombre: "",
    lugar: "",
    precio: "1",
    cantidad: "1",
    tachar: true,
    categoria: "Cocina",
    id: "",
  });

  const [radioValue, setRadioValue] = useState("Cocina");

  const radios = [
    { name: "Cocina", value: "Cocina" },
    { name: "Baño", value: "Baño" },
    { name: "Frio", value: "Frio" },
    { name: "Verduleria", value: "Verduleria" },
  ];

  useEffect(() => {
    if (Object.keys(productoEditado).length > 0) {
      actualizarProducto(productoEditado);
    }
    console.log(productoEditado);
  }, [productoEditado]);

  const [error, actualizarError] = useState(false);

  useEffect(() => {
    actualizarProducto({ ...nuevoProducto, categoria: radioValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioValue]);

  // Función que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    if (e.target.name === "nombre") {
      const nombreMayúscula =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

      actualizarProducto({
        ...nuevoProducto,
        [e.target.name]: nombreMayúscula,
      });
    } else {
      actualizarProducto({
        ...nuevoProducto,
        [e.target.name]: e.target.value,
      });
    }
  };

  //Extraer los valores
  const { nombre, lugar, cantidad, precio } = nuevoProducto;

  // Cuando el usuario presiona agregar producto
  const submitProducto = (e) => {
    actualizarProducto({ ...nuevoProducto, categoria: radioValue });

    e.preventDefault();

    // Validad
    if (nombre.trim() === "") {
      actualizarError(true);
      return;
    }

    // Objeto de Paciente
    const objetoProducto = {
      nombre: "",
      lugar: "",
      precio: "1",
      cantidad: "1",
      tachar: true,
      categoria: "Cocina",
      id: "",
    };

    if (nuevoProducto.id) {
      // Editando el Registro
      objetoProducto.id = nuevoProducto.id;
      // const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      let productosActualizados = productos.filter(
        (productoState) => productoState.id !== nuevoProducto.id
      );

      productosActualizados.push(nuevoProducto);
      guardarProductos(productosActualizados);
      setProductoEditado({});

      //console.log('editar')
    } else {
      // Nuevo registro
      //Asignar un ID
      nuevoProducto.id = uuidv4();

      //Eliminar mensaje de error
      actualizarError(false);

      //Crear el producto
      crearProducto(nuevoProducto);
    }

    //Reiniciar el form
    actualizarProducto({
      nombre: "",
      lugar: "",
      precio: "1",
      cantidad: "1",
      tachar: true,
      categoria: radioValue,
      id: "",
    });
  };

  return (
    <div>
      <h2
        style={{
          color: "#4F8073",
          fontFamily: "Grape Nuts",
          fontSize: "30px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        Agregar producto
      </h2>

      <div>
        <Form onSubmit={submitProducto}>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ color: "#BF403C" }}>Producto</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              className="u-full-width"
              placeholder="Ingrese el nombre del producto"
              onChange={actualizarState}
              value={nombre}
              autoComplete="off"
            />

            <Form.Label style={{ color: "#BF403C" }}>Lugar</Form.Label>
            <Form.Control
              type="text"
              name="lugar"
              className="u-full-width"
              placeholder="Nombre del Supermercado"
              onChange={actualizarState}
              value={lugar}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group as={Col} className="m-3" style={{ color: "#BF403C"}}>
            <Row style={{ display:'flex'}}>
              <Col
                xs={6}
                style={{
                  color: "#BF403C",
                  fontSize: "17px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Form.Label style={{ marginRight: "6px" }}>Cantidad</Form.Label>
                <Form.Control
                  style={{ width: "100px" }}
                  type="number"
                  name="cantidad"
                  placeholder="0"
                  onChange={actualizarState}
                  value={cantidad}
                />
              </Col>

              <Col
                xs={6}
                style={{
                  color: "#BF403C",
                  fontSize: "17px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Form.Label style={{ marginRight: "6px" }}>Precio</Form.Label>

                <Form.Control
                  style={{ width: "100px" }}
                  type="number"
                  name="precio"
                  placeholder="0"
                  onChange={actualizarState}
                  value={precio}
                />
              </Col>
            </Row>

            <Col
              sm={12}
              xs={12}
              style={{
                color: "#E2D784",
                fontSize: "20px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <ButtonGroup
                style={{
                  marginTop: 0,
                }}
              >
                {radios.map((radio, idx) => (
                  <ToggleButton
                    style={{
                      marginTop: 0,
                    }}
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    // variant={idx % 2 ? "outline-success" : "outline-danger"}
                    variant={"outline-success"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>

            <Col
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "end",
                marginRight: "10px",
              }}
            >
              <Button
                variant="outline-warning"
                type="submit"
                style={{
                  color: "#E2D784",
                  fontSize: "20px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                Agregar
              </Button>
            </Col>
          </Form.Group>
          {error ? (
            <p className="alerta-error" style={{ color: "#FF6B6B" }}>
              El nombre es obligatorio
            </p>
          ) : null}
        </Form>
      </div>
    </div>
  );
};

export default Formulario;
