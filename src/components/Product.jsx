import React, { useState } from "react";
import { Card, Col, Button, Alert } from "react-bootstrap";

const Product = ({ product, onBook }) => {
  const [message, setMessage] = useState("");
  const [liked, setLiked] = useState(product.like);

  const handleBook = () => {
    if (product.quantity > 0) {
      onBook(product.name);
      setMessage("Produit réservé avec succès !");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const toggleLike = () => setLiked(true);
  const toggleDislike = () => setLiked(false);

  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={
            product.quantity === 0
              ? "/src/assets/sold_out.png"
              : product.img || "/src/assets/placeholder.jpg"
          }
          style={{ width: "200px" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Prix: {product.price} DT</Card.Text>
          <Card.Text>Quantité: {product.quantity}</Card.Text>
          <Card.Text>Description: {product.description}</Card.Text>
          <Button onClick={handleBook} disabled={product.quantity === 0}>
            {product.quantity === 0 ? "Épuisé" : "Réserver"}
          </Button>
          <Button onClick={toggleLike} variant="success" className="ms-2">
            {liked ? "❤️ J'aime" : "🤍 J'aime"}
          </Button>
          <Button onClick={toggleDislike} variant="danger" className="ms-2">
            {!liked ? "💔 Je n'aime plus" : "💔 Je n'aime pas"}
          </Button>
          {message && <Alert variant="success" className="mt-2">{message}</Alert>}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
