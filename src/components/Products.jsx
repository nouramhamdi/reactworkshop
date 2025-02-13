import React, { useState, useEffect } from "react";
import { Row, Alert, Container, Col } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));

    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = (productName) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === productName && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <>
      {showWelcome && <Alert variant="success">Bienvenue sur notre boutique !</Alert>}
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.name} xs={12} md={6} lg={4}>
              <Product product={product} onBook={handleBook} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
