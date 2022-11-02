import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./components/Footer";

import Formulario from "./components/Formulario";
import Producto from "./components/Producto";
import ProductoSimple from "./components/ProductoSimple";

function App() {
  let productosIniciales = JSON.parse(localStorage.getItem("productos"));

  if (!productosIniciales) {
    productosIniciales = [];
  }

  const [productos, guardarProductos] = useState(productosIniciales);
  const [productoEditado, setProductoEditado] = useState({});
  const [ocultar, setOcultar] = useState(false);

  const categorias = ["Cocina", "Baño", "Frio", "Verduleria"];

  useEffect(() => {
    if (productosIniciales) {
      localStorage.setItem("productos", JSON.stringify(productos));
    } else {
      localStorage.setItem("productos", JSON.stringify([]));
    }
  }, [productos, productosIniciales]);

  function SortArray(x, y) {
    if (x.nombre < y.nombre) {
      return -1;
    }
    if (x.nombre > y.nombre) {
      return 1;
    }
    return 0;
  }

  productosIniciales.sort(SortArray);

  // Funcion que tome los productos actuales y agregue el nuevo
  const crearProducto = (producto) => {
    guardarProductos([...productos, producto]);
  };

  //Funcion que elimina un producto con su id
  const eliminar = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    guardarProductos(nuevosProductos);
  };

  const tachar = (id) => {
    productos.map(
      (producto) => producto.id === id && (producto.tachar = !producto.tachar)
    );

    const pepe = Array.from(productos);
    guardarProductos(pepe);
  };

  const sumarCantidad = (id) => {
    productos.map(
      (producto) =>
        producto.id === id &&
        (producto.cantidad = parseInt(producto.cantidad) + 1)
    );

    const pepe = Array.from(productos);
    guardarProductos(pepe);
  };

  const restarCantidad = (id) => {
    productos.map(
      (producto) =>
        producto.id === id &&
        (producto.cantidad = parseInt(producto.cantidad) - 1)
    );
    const pepe = Array.from(productos);
    guardarProductos(pepe);
  };

  // Mensaje Condicional
  const titulo = productos.length === 0 ? "No hay Productos" : "Próxima Compra";

  return (
    <>
      <Container fluid="md">
        <h2
          style={{
            color: "#6C5EC2",
            fontFamily: "Grape Nuts",
            fontSize: "50px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {titulo}
        </h2>
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
        {ocultar ? (
          <Button
            style={{
              marginRight: "4px",
              marginTop: "8px",
              marginBottom: "12px",
              padding: "7px",
            }}
            variant="outline-warning"
            size="sx"
            onClickCapture={() => setOcultar(false)}
          >
            Listar Compra
          </Button>
        ) : (
          <Button
            style={{
              marginRight: "4px",
              marginTop: "8px",
              marginBottom: "12px",
              padding: "7px",
            }}
            variant="outline-warning"
            size="sx"
            onClickCapture={() => setOcultar(true)}
          >
            Mostrar Formulario
          </Button>
        )}

        <Row>
          <Col>
            {ocultar ? (
              <div>
                <Formulario
                  crearProducto={crearProducto}
                  setProductoEditado={setProductoEditado}
                  productoEditado={productoEditado}
                  productos={productos}
                  guardarProductos={guardarProductos}
                />

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
                <Col>
                  <div>
                    {/* {productos.map((producto, id) => (
                      <div>
                        <p
                          style={{
                            color: "#00C89D",
                            fontFamily: "Grape Nuts",
                            fontSize: "30px",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            marginTop: 15,
                          }}
                        >
                          {producto.categoria}
                        </p>

                        <Producto
                            key={id}
                            ocultar={ocultar}
                            producto={producto}
                            eliminar={eliminar}
                            sumarCantidad={sumarCantidad}
                            restarCantidad={restarCantidad}
                            tachar={tachar}
                            setProductoEditado={setProductoEditado}
                          />
                      </div>
                    ))} */}

                    <p
                      style={{
                        color: "#00C89D",
                        fontFamily: "Grape Nuts",
                        fontSize: "30px",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        marginTop: 15,
                      }}
                    >
                      Cocina
                    </p>

                    {productos.map((producto, id) =>
                      producto.categoria === "Cocina" ? (
                        <div>
                          <Producto
                            key={id}
                            ocultar={ocultar}
                            producto={producto}
                            eliminar={eliminar}
                            sumarCantidad={sumarCantidad}
                            restarCantidad={restarCantidad}
                            tachar={tachar}
                            setProductoEditado={setProductoEditado}
                          />
                        </div>
                      ) : null
                    )}

                    <p
                      style={{
                        color: "#00C89D",
                        fontFamily: "Grape Nuts",
                        fontSize: "30px",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        marginTop: 15,
                      }}
                    >
                      Baño
                    </p>

                    {productos.map((producto, id) =>
                      producto.categoria === "Baño" ? (
                        <div>
                          <Producto
                            key={id}
                            producto={producto}
                            eliminar={eliminar}
                            sumarCantidad={sumarCantidad}
                            restarCantidad={restarCantidad}
                            tachar={tachar}
                            setProductoEditado={setProductoEditado}
                          />
                        </div>
                      ) : null
                    )}
                    <p
                      style={{
                        color: "#00C89D",
                        fontFamily: "Grape Nuts",
                        fontSize: "30px",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        marginTop: 15,
                      }}
                    >
                      Frío
                    </p>

                    {productos.map((producto, id) =>
                      producto.categoria === "Frio" ? (
                        <div>
                          <Producto
                            key={id}
                            producto={producto}
                            eliminar={eliminar}
                            sumarCantidad={sumarCantidad}
                            restarCantidad={restarCantidad}
                            tachar={tachar}
                            setProductoEditado={setProductoEditado}
                          />
                        </div>
                      ) : null
                    )}

                    <p
                      style={{
                        color: "#00C89D",
                        fontFamily: "Grape Nuts",
                        fontSize: "30px",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        marginTop: 15,
                      }}
                    >
                      Verdulería
                    </p>

                    {productos.map((producto, id) =>
                      producto.categoria === "Verduleria" ? (
                        <div>
                          <Producto
                            key={id}
                            producto={producto}
                            eliminar={eliminar}
                            sumarCantidad={sumarCantidad}
                            restarCantidad={restarCantidad}
                            tachar={tachar}
                            setProductoEditado={setProductoEditado}
                          />
                        </div>
                      ) : null
                    )}
                  </div>
                </Col>
              </div>
            ) : (
              productos.map((producto, id) => (
                <div>
                  <ProductoSimple key={id} producto={producto} />
                </div>
              ))
            )}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default App;
