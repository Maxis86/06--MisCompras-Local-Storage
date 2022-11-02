import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProductoSimple = ({ producto }) => {
  return (
    <>
      <Container>
        <Row>
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
          {/* Nombre */}
          <Col xs={4}>
            {producto.tachar ? (
              <span
                style={{
                  color: "#4F8B94",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
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
                  fontWeight: "bold",
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
          <Col xs={3}>
            <span
              style={{
                color: "#5C5F63",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              $ {producto.precio}
            </span>
          </Col>

          {/* Cantidad */}
        </Row>
        {/* <hr
          style={{
            color: "#6C5EC2",
            fontFamily: "Grape Nuts",
            fontSize: "40px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        /> */}
      </Container>
    </>
  );
};

export default ProductoSimple;
