import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const Producto = ({
  producto,
  eliminar,
  sumarCantidad,
  restarCantidad,
  tachar,
  setProductoEditado,
}) => {
  return (
    <>
      <Container>
        <Row>
          {/* <Col xs={2} md={2}> */}

          {/* tachar */}
          <Col xs={2}>
            <Button
              style={{
                //marginRight: "1px",
                marginTop: "14px",
                marginBottom: "14x",
                padding: "6px",
                width: "25px",
              }}
              onClick={() => tachar(producto.id)}
              variant="outline-info"
            ></Button>
          </Col>

          {/* Nombre */}
          <Col xs={3}>
            {producto.tachar ? (
              <span
                style={{
                  color: "#4F8B94",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 'bold'
                }}
              >
                {producto.nombre}
              </span>
            ) : (
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#BEA6A0",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 'bold'
                }}
              >
                {producto.nombre}
              </span>
            )}
          </Col>

          {/* Lugar */}
          <Col xs={3}>
            <span
              style={{
                color: "#4F8B94",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              {producto.lugar}
            </span>
          </Col>

          {/* Precio */}
          <Col xs={4}>
            <span
              style={{
                color: "#5C5F63",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 'bold'
              }}
            >
              $ {producto.precio}
            </span>
          </Col>

          {/* + */}

          <Col xs={4}>
            <Button
              style={{
                marginRight: "2px",
                marginTop: "8px",
                marginBottom: "16x",
                padding: "6px",
                width: 30
              }}
              onClick={() => sumarCantidad(producto.id)}
              variant="outline-primary"
              size="md"
            >
              +
            </Button>

            {/* - */}
            <Button
              style={{
                marginRight: "2px",
                marginTop: "8px",
                marginBottom: "16x",
                padding: "6px",
                width: 30
              }}
              onClick={() => restarCantidad(producto.id)}
              variant="outline-warning"
              size="md"
            >
              -
            </Button>
          </Col>
          {/* Cantidad */}
          <Col xs={2}>
            <span
              style={{
                color: "#4F8B94",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              {producto.cantidad}
            </span>
          </Col>

          <Col
             xs={6}
            // md={4}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {/* Eliminar */}
            <Button
              style={{
                marginRight: "4px",
                marginTop: "8px",
                marginBottom: "12px",
                padding: "7px",
              }}
              onClick={() => eliminar(producto.id)}
              variant="outline-danger"
              size="sx"
            >
              Eliminar
            </Button>

            {/* Editar */}
            <Button
              style={{
                marginRight: "4px",
                marginTop: "8px",
                marginBottom: "12px",
                padding: "7px",
              }}
              variant="outline-warning"
              size="sx"
              onClickCapture={() => setProductoEditado(producto)}
            >
              Editar
            </Button>
          </Col>
        </Row>
        <hr
            style={{
              color: "#6C5EC2",
              fontFamily: "Grape Nuts",
              fontSize: "40px",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          />
      </Container>
    </>
  );
};

export default Producto;
